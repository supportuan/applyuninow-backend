import University from 'App/Models/University'
import moment from 'moment'
const Validator = require('validatorjs')
import { schema } from '@ioc:Adonis/Core/Validator'
import Application from '@ioc:Adonis/Core/Application'
import { cuid } from '@ioc:Adonis/Core/Helpers'
import { toS3 } from 'App/Helpers/upload'

export default class UniversityController {
  /**
   * @param request
   * @param response
   */
  public async index({ request, response }) {
    try {
      const users = await University.listing(request)
      return response.json(users)
    } catch (exception) {
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
    const { university } = ctx.request
    return this.save(ctx, university)
  }

  public async save({ request, response }, record = null) {
    const data = request.only(['name', 'country_id', 'city', 'location'])
    const rules: any = {
      name: 'required|max:150',
      country_id: 'integer|required',
      location: 'string|max:100',
      city: 'string|max:100',
    }

    const validation = new Validator(request.all(), rules)
    if (validation.fails()) {
      return response.badRequest(validation.errors.errors)
    }

    const uploadSchema = schema.create({
      // profile image
      university_logo: schema.file.optional({
        size: '5mb',
        extnames: ['jpeg', 'jpg', 'png'],
      }),
    })

    const payload = await request.validate({ schema: uploadSchema })

    if (payload.university_logo) {
      const fileName = `${cuid()}.${payload.university_logo.extname}`
      await payload.university_logo.move(Application.tmpPath('uploads'), {
        name: fileName,
      })
      data['logo'] = await toS3(Application.tmpPath('uploads') + '/' + fileName)
    }

    let university: any = record

    if (record && !request.body().image && !data.logo) {
      data['logo'] = ''
    }
    if (record === null) {
      university = new University()
    }

    for (let [key, value] of Object.entries(data)) {
      university[key] = value
    }

    await university.save()
    return response.json(university)
  }

  /**
   * @param request
   * @param response
   */
  public async show({ request, response }) {
    try {
      const { university } = request
      return response.json(university)
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
      const { university } = request
      university['deleted_at'] = moment().utcOffset('+05:30').format('YYYY-MM-DD HH:mm:ss')
      await university.save()
      return response.json({ message: 'deleted Successfully' })
    } catch (exception) {
      console.log(exception)
      return response.internalServerError({ message: exception.message })
    }
  }

  /**
   * @param request
   * @param response
   */
  public async dropdown({ request, response }) {
    try {
      const list = await University.dropdown(request.qs().country_id)
      return response.json(list)
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }
  
  /**
   * @param request
   * @param response
   */
  public async city({ request, response }) {
    try {
      const list = await University.getCity(request.qs().country_id)
      return response.json(list)
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
 }
  
  
}
