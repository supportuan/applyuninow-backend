import AdditionalService from 'App/Models/AdditionalService'
const Validator = require('validatorjs')
import Application from '@ioc:Adonis/Core/Application'
import { cuid } from '@ioc:Adonis/Core/Helpers'
import { toS3 } from 'App/Helpers/upload'
import moment from 'moment'

export default class AdditionalServiceController {
  /**
   * @param request
   * @param response
   */
  public async index({ request, response }) {
    try {
      const studyAreaList = await AdditionalService.listing(request)
      return response.json(studyAreaList)
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }

  /**
   * @param request
   * @param response
   */
  public async create({ request, response }) {
    try {
      const rules: any = {
        first_name: 'required|max:200',
        last_name: 'required|max:200',
        email: 'required|email',
        phone: 'required|max:10|min:10',
        dob: 'required',
        gender: 'required',
        present_status: 'required',
        selected_service: 'required',
        country_id: 'required',
      }

      const validation = new Validator(request.body(), rules)
      if (validation.fails()) {
        return response.badRequest(validation.errors.errors)
      }

      const data = request.only([
        'first_name',
        'last_name',
        'email',
        'phone',
        'alternate_phone',
        'dob',
        'gender',
        'passport_no',
        'present_status',
        'selected_service',
        'notes',
        'country_id',
      ])

      const images: any = []
      // additional supported documents
      if (request.files('images')) {
        const docs = request.files('images', {
          size: '5mb',
          extnames: ['pdf', 'png', 'jpeg', 'jpg'],
        })
        for (let i = 0; i < docs.length; i++) {
          if (docs[i].isValid) {
            const fileName = `${cuid()}.${docs[i].extname}`
            await docs[i].move(Application.tmpPath('uploads'), {
              name: fileName,
            })

            let url = await toS3(Application.tmpPath('uploads') + '/' + fileName)
            images.push({ label: JSON.parse(request.body().labels)[i], url: url })
          }
        }
      }

      if (images.length) {
        data['images'] = images
      }

      let additionalservice = new AdditionalService()

      for (let [key, value] of Object.entries(data)) {
        additionalservice[key] = value
      }
      additionalservice.status = 'NOT_CONTACTED'
      await additionalservice.save()
      console.log('additionalservice')
      return response.json({ message: 'Additional Service Requsted Successfully' })
    } catch (exception) {
      console.log(exception)
      return response.internalServerError({ message: exception.message })
    }
  }

  /**
   * @param request
   * @param response
   */
  public async store(ctx) {
    return this.save(ctx)
  }

  /**
   * @param request
   * @param response
   */
  public async update(ctx) {
    const { additionalservice } = ctx.request
    return this.save(ctx, additionalservice)
  }

  public async save({ request, response, auth }, record = null) {
    try {
      const data = request.only([
        'first_name',
        'last_name',
        'email',
        'phone',
        'alternate_phone',
        'dob',
        'gender',
        'passport_no',
        'present_status',
        'selected_service',
        'notes',
        'country_id',
      ])
      const rules: any = {
        first_name: 'required|max:200',
        last_name: 'required|max:200',
        email: 'required|email',
        phone: 'required|max:10|min:10',
        dob: 'required',
        gender: 'required',
        present_status: 'required',
        selected_service: 'required',
        country_id: 'required',
      }

      const validation = new Validator(request.all(), rules)
      if (validation.fails()) {
        return response.badRequest(validation.errors.errors)
      }
      let images: any = []
      // additional supported documents
      if (request.files('images')) {
        const docs = request.files('images', {
          size: '5mb',
          extnames: ['pdf', 'png', 'jpeg', 'jpg'],
        })
        for (let i = 0; i < docs.length; i++) {
          if (docs[i].isValid) {
            const fileName = `${cuid()}.${docs[i].extname}`
            await docs[i].move(Application.tmpPath('uploads'), {
              name: fileName,
            })

            let url = await toS3(Application.tmpPath('uploads') + '/' + fileName)
            images.push({ label: JSON.parse(request.body().labels)[i], url: url })
          }
        }
      }

      if (images.length) {
        data['images'] = images
      }
        if (request.body().old_files && record) {
          let old_files = JSON.parse(request.body().old_files)
          data['images'] = [
              ...(Array.isArray(data['images']) ? data['images'] : []),
              ...old_files,
          ]
      }
      
      if(record && !request.body().old_files){
        data['images'] = images.length ? images : []
      }

      let additionalservice: any = record
      if (record === null) {
        additionalservice = new AdditionalService()
      }

      for (let [key, value] of Object.entries(data)) {
        additionalservice[key] = value
      }

      await additionalservice.save()

      if (record) {
        await additionalservice.log(auth.user, {
          message: `updated the user details`,
          type: 'ACTION',
        })
      }

      return response.json({ message: `AddOn  ${record ? 'Updated' : 'Created'} Successfully` })
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }

  /**
   * @param request
   * @param response
   */
  public async show({ request, response }) {
    try {
      let additionalservice: any = await AdditionalService.query()
        .preload('country', (query) => {
          query.select('name')
        })
        .where('id', request.param('id'))
        .first()

      if (!additionalservice) {
        return response.notFound({ message: `User Not Found` })
      }

      if (request.qs().fetch_logs) {
        additionalservice.logs = await additionalservice.getLogs()
      }

      return response.json(additionalservice)
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }

  /**
   * @param ctx
   */
  public async updateStatus({ request, response, auth }) {
    try {
      const additionalservice = request.additionalservice as AdditionalService
      const data = request.only(['status', 'call_back_time', 'notes'])

      const rules: any = {
        status: 'required',
        notes: 'required|max:500',
      }

      if (data.status === 'CALL_BACK') {
        rules['call_back_time'] = 'required|date'
      }

      const validation = new Validator(data, rules)
      if (validation.fails()) {
        return response.badRequest(validation.errors.errors)
      }

      additionalservice.status = data.status

      if (data.call_back_time) {
        additionalservice.call_back_time = moment(data.call_back_time)
          .utcOffset('+05:30')
          .format('YYYY-MM-DD HH:mm:ss')
      }

      await additionalservice.save()
      await Promise.all([
        additionalservice.log(auth.user, { message: data.notes, type: 'NOTE' }),
        additionalservice.log(auth.user, {
          message: `<strong>${auth.user.name}</strong> modified the status to <span>${data.status}</span>`,
          type: 'STATUS',
        }),
      ])

      return response.json({ message: `Status changed to ${additionalservice.status}` })
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }

  /**
   * @param request
   * @param response
   */
  async destroy({ request, response }) {
    try {
      const { additionalservice } = request

      if (additionalservice.deleted_at) {
        return response.notFound({ message: `AddOn Deleted Already!` })
      }

      additionalservice['deleted_at'] = moment().utcOffset('+05:30').format('YYYY-MM-DD HH:mm:ss')
      await additionalservice.save()
      return response.json({ message: 'AddOn Deleted Successfully' })
    } catch (exception) {
      console.log(exception)
      return response.internalServerError({ message: exception.message })
    }
  }

  /**
   * @param request
   * @param response
   */
  async statistics({ request, response }) {
    try {
      const stats = await AdditionalService.stats(request)
      return response.send({
        status: true,
        message: 'Stats information',
        data: {
          total_leads: stats.total_leads || 0,
          contacted: stats.contacted || 0,
          not_contacted: stats.not_contacted || 0,
          in_progress: stats.in_progress || 0,
          completed: stats.completed || 0,
        },
      })
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }
}
