import { generatePassword, sendExePasswordEmail } from 'App/Helpers/helpers'
import Role from 'App/Models/Role'
import User from 'App/Models/User'
import moment from 'moment'
const Validator = require('validatorjs')
import { schema } from '@ioc:Adonis/Core/Validator'
import Application from '@ioc:Adonis/Core/Application'
import { cuid } from '@ioc:Adonis/Core/Helpers'
import { toS3 } from 'App/Helpers/upload'
import UserSession from 'App/Models/UserSession'
import Log from 'App/Models/Log'
import UserPayslip from 'App/Models/UserPayslip'
import Hash from '@ioc:Adonis/Core/Hash'

export default class UserController {
  /**
   * @param request
   * @param response
   */
  public async index({ request, response }) {
    try {
      const users = await User.listing(request)
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
    const { user } = ctx.request
    return this.save(ctx, user)
  }

  public async save({ request, response }, record = null) {
    const data = request.only([
      'name',
      'email',
      'phone',
      'role_id',
      'emg_contact_name',
      'emg_contact_phone',
      'emg_contact_email',
      'address',
      'city',
      'state',
      'user_type',
      'image',
      'offer_letter',
    ])
    const rules: any = {
      name: 'required|string|max:150',
      email: 'required|max:150|email',
      phone: 'required|max:15',
      role_id: 'integer|required',
      emg_contact_name: 'max:150',
      emg_contact_phone: 'max:15',
      emg_contact_email: 'max:150|email',
      address: 'string|max:500',
      city: 'string|max:50',
      state: 'string|max:50',
      user_type: 'required',
    }

    const validation = new Validator(request.all(), rules)
    if (validation.fails()) {
      return response.badRequest(validation.errors.errors)
    }

    const uploadSchema = schema.create({
      // profile image
      user_image: schema.file.optional({
        size: '5mb',
        extnames: ['jpeg', 'jpg', 'jfif', 'png'],
      }),
      //  offer letter
      user_offer_letter: schema.file.optional({
        size: '5mb',
        extnames: ['pdf'],
      }),
    })

    const payload = await request.validate({ schema: uploadSchema })

    if (payload.user_image) {
      const fileName = `${cuid()}.${payload.user_image.extname}`
      await payload.user_image.move(Application.tmpPath('uploads'), {
        name: fileName,
      })
      data['image'] = await toS3(Application.tmpPath('uploads') + '/' + fileName)
    }

    if (payload.user_offer_letter) {
      const fileName = `${cuid()}.${payload.user_offer_letter.extname}`
      await payload.user_offer_letter.move(Application.tmpPath('uploads'), {
        name: fileName,
      })
      data['offer_letter'] = await toS3(Application.tmpPath('uploads') + '/' + fileName)
    }

    const existingUserByEmail = await User.query().where('email', data.email).first()
    let password = generatePassword()

    let user: any = record
    if (record === null) {
      user = new User()
      user.password = password
      user.first_time = data.role_id != 1 ? true : false // need to check with role string instead ofid
      user.email = data.email
    }


    if (existingUserByEmail && existingUserByEmail.id !== user.id) {
      if (existingUserByEmail.email.toLowerCase() === data.email.toLowerCase()) {
        return response.badRequest({ message: 'User already exists for given email address.' })
      }
    }

    if(record &&  data['image']){
      data['image'] = data['image']
    }

    if(record &&  data['offer_letter']){
      data['offer_letter'] = data['offer_letter']
    }


    for (let [key, value] of Object.entries(data)) {
      user[key] = value
    }

    await user.save()
    if (!record) {
      sendExePasswordEmail(user, password)
    }
    return response.json({ message: `User  ${record ? 'Updated' : 'Created'} Successfully` })
  }

  /**
   * @param request
   * @param response
   */
  public async show({ request, response }) {
    try {
      let user: any = await User.query()
        .preload('role', (query) => {
          query.select('name')
        })
        .preload('payslips')
        .where('id', request.param('id'))
        .first()
        .then((serialize) => serialize?.toJSON())

      if (!user) {
        return response.notFound({ message: `User not found.` })
      }

      let session = await UserSession.query()
        .where('user_id', user.id)
        .orderBy('id', 'desc')
        .first()

      user.session = session
      if (user.kyc_documents && !user.kyc_documents.length) {
        user.kyc_documents = [
          {
            name: 'Address proof',
            type: 1,
            updtated_at: '',
            url: '',
          },
          {
            name: 'Pan Card',
            type: 2,
            updtated_at: '',
            url: '',
          },
          {
            name: 'Other proof',
            type: 3,
            updtated_at: '',
            url: '',
          },
        ]
      }

      return response.json(user)
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }

  /**
   * @param request
   * @param response
   */
  public async updateStatus({ request, response }) {
    try {
      const payload = request.body()
      let user: any = await User.findOrFail(request.param('id'))
      user.active = payload.active == true ? 1 : 0
      await user.save()
      return response.json({ message: 'Status Update Successfully' })
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }

  /**
   * @param request
   * @param response
   */
  async rolesDropdown({ response }) {
    try {
      let roles: any = await Role.dropdown()
      return response.json(roles)
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }

  /**
   * @param request
   * @param response
   */
  async usersDropdown({ response }) {
    try {
      let users: any = await User.dropdown()
      return response.json(users)
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }

  /**
   * @param request
   * @param response
   */
  async updatePolicyAccept({ response, auth }) {
    try {
      const user = await User.query().where('id', auth.user.id).preload('role').first()

      if (!user) {
        return response.badRequest({ message: 'Invalid User Access' })
      }

      user.is_agreed_policy = '1'
      const token = await auth.use('api').generate(user, {
        expiresIn: '8hours',
      })

      await (await user.save()).serialize()
      let obj = {
        name: user.name,
        email: user.email,
        token: token,
        id: user.id,
        first_time: false,
        role_id: user.role.id,
        role_slug: user.role.slug,
        show_policy_model: false,
      }
      return response.json(obj)
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
      const { user } = request
      user['deleted_at'] = moment().utcOffset('+05:30').format('YYYY-MM-DD HH:mm:ss')
      user.active = false
      await user.save()
      return response.json({ message: 'deleted Successfully' })
    } catch (exception) {
      console.log(exception)
      return response.internalServerError({ message: exception.message })
    }
  }

  public async getLogs({ request, response }) {
    try {
      let { page = 1, start_date = '', end_date = '' } = request.qs()
      const limit = 10
      let query = Log.query().where('user_id', request.params().id)

      if (start_date && end_date) {
        let start = moment(start_date)
          .utcOffset('+05:30')
          .startOf('day')
          .format('YYYY-MM-DD HH:mm:ss')
        let end = moment(end_date).utcOffset('+05:30').endOf('day').format('YYYY-MM-DD HH:mm:ss')
        query.where('created_at', '>=', start)
        query.where('created_at', '<=', end)
      }
      let data = await query
        .preload('user', (query) => {
          query.select('id', 'name', 'image')
        })
        .orderBy('id', 'desc')
        .paginate(page, limit)
      return response.json(data)
    } catch (excepiton) {
      return response.internalServerError({ message: excepiton.message })
    }
  }

  public async addUserPaySlip({ request, response }) {
    try {
      const data = request.only(['user_id', 'payslip_month'])
      const rules: any = {
        payslip_month: 'required|string',
        user_id: 'required',
      }

      const validation = new Validator(data, rules)
      if (validation.fails()) {
        return response.badRequest(validation.errors.errors)
      }

      const uploadSchema = schema.create({
        // profile image
        payslip: schema.file({
          size: '5mb',
          extnames: ['pdf'],
        }),
      })
      const payload = await request.validate({ schema: uploadSchema })

      const fileName = `${cuid()}.${payload.payslip.extname}`
      await payload.payslip.move(Application.tmpPath('uploads'), {
        name: fileName,
      })
      let url: any = await toS3(Application.tmpPath('uploads') + '/' + fileName)

      let payslip = await UserPayslip.create({
        user_id: data.user_id,
        payslip_month: moment(data.payslip_month).utcOffset('+05:30').format('YYYY-MM-DD HH:mm:ss'),
        payslip_url: url,
      })
      return response.json(payslip)
    } catch (excepiton) {
      return response.internalServerError({ message: excepiton })
    }
  }

  public async deleteUserPaySlip({ request, response }) {
    try {
      const { userpayslip } = request

      await userpayslip.delete()

      return response.json({ message: `Payslip deleted Successfully` })
    } catch (excepiton) {
      return response.internalServerError({ message: excepiton.message })
    }
  }

  /**
   * CHANGE USER PASSWORD
   * @param request
   * @param response
   */
  async changePassword({ auth, request, response }) {
    try {
      const user = auth.user
      const rules = {
        password: 'required|min:8|max:14|confirmed',
      }

      const validation = new Validator(request.all(), rules)
      if (validation.fails()) {
        return response.badRequest(validation.errors.errors)
      }
      const { password } = request.all()

      if (await Hash.verify(user.password, password)) {
        return response.badRequest({ message: 'New password not same as old password!' })
      }

      user.password = password
      await user.save()
      await auth.use('api').revoke()
      return response.send({ message: 'Password Updated successfully.' })
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }

  /**
   * UPDATE USER PROFILE
   * @param request
   * @param response
   */
  async updateProfile({ auth, request, response }) {
    try {
      const user = auth.user
      const rules = {
        name: 'required|max:150',
        phone: 'required|max:10|max:10',
      }

      const { name, phone, image } = request.all()

      const validation = new Validator(request.all(), rules)
      if (validation.fails()) {
        return response.badRequest(validation.errors.errors)
      }
      const uploadSchema = schema.create({
        user_image: schema.file.optional({
          size: '5mb',
          extnames: ['jpeg', 'jpg', 'jfif', 'png'],
        }),
      })

      const payload = await request.validate({ schema: uploadSchema })

      if (payload.user_image) {
        const fileName = `${cuid()}.${payload.user_image.extname}`
        await payload.user_image.move(Application.tmpPath('uploads'), {
          name: fileName,
        })
        user['image'] = await toS3(Application.tmpPath('uploads') + '/' + fileName)
      }else {
        user.image = image
      }
  
      user.name = name
      user.phone = phone
      await user.save()
      return response.send({ message: 'Profile Updated successfully.' })
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }

  /**
   * GET AUTH USER PROFILE
   * @param request
   * @param response
   */
  async getAuthProfile({ auth, response }) {
    try {
      let user: any = await User.query()
        .preload('role', (query) => {
          query.select('name')
        })
        .preload('payslips')
        .where('id', auth.user.id)
        .first()
        .then((serialize) => serialize?.toJSON())

      if (!user) {
        return response.notFound({ message: `User not found.` })
      }

      let session = await UserSession.query()
        .where('user_id', user.id)
        .orderBy('id', 'desc')
        .first()

      user.session = session

      if (user.kyc_documents && !user.kyc_documents.length) {
        user.kyc_documents = [
          {
            name: 'Address proof',
            type: 1,
            updtated_at: '',
            url: '',
          },
          {
            name: 'Pan Card',
            type: 2,
            updtated_at: '',
            url: '',
          },
          {
            name: 'Other proof',
            type: 3,
            updtated_at: '',
            url: '',
          },
        ]
      }
      return response.json(user)
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }

  async updateKYCDocuments({ request, response, auth }) {
    const data = request.only(['name', 'type'])
    const rules: any = {
      name: 'required|string',
      type: 'required',
    }

    const validation = new Validator(request.all(), rules)
    if (validation.fails()) {
      return response.badRequest(validation.errors.errors)
    }

    const uploadSchema = schema.create({
      // profile image
      image: schema.file.optional({
        size: '5mb',
        extnames: ['pdf'],
      }),
    })

    const payload = await request.validate({ schema: uploadSchema })
    let key_document: any = ''
    if (payload.image) {
      const fileName = `${cuid()}.${payload.image.extname}`
      await payload.image.move(Application.tmpPath('uploads'), {
        name: fileName,
      })
      key_document = await toS3(Application.tmpPath('uploads') + '/' + fileName)
    }

    let user = auth.user
    let list = user.kyc_documents
      ? JSON.parse(user.kyc_documents)
      : [
          {
            name: 'Address proof',
            type: 1,
            updtated_at: '',
            url: '',
          },
          {
            name: 'Pan Card',
            type: 2,
            updtated_at: '',
            url: '',
          },
          {
            name: 'Other proof',
            type: 3,
            updtated_at: '',
            url: '',
          },
        ]
    let index = list.findIndex((x) => x.name == data.name && x.type == data.type)
    if (index != -1) {
      list[index].url = key_document
      list[index].updtated_at = moment().utcOffset('+05:30').format('YYYY-MM-DD HH:mm:ss')
    }

    user.kyc_documents = list
    await user.save()

    return response.json({ message: `KYC Documents Updated Successfully!` })
  }

  async deleteKYCDocuments({ request, response }) {
    const { user } = request
    const data = request.only(['name', 'type'])
    const rules: any = {
      name: 'required|string',
      type: 'required',
    }

    const validation = new Validator(request.all(), rules)
    if (validation.fails()) {
      return response.badRequest(validation.errors.errors)
    }

    let list = user.kyc_documents
      ? JSON.parse(user.kyc_documents)
      : [
          {
            name: 'Address proof',
            type: 1,
            updtated_at: '',
            url: '',
          },
          {
            name: 'Pan Card',
            type: 2,
            updtated_at: '',
            url: '',
          },
          {
            name: 'Other proof',
            type: 3,
            updtated_at: '',
            url: '',
          },
        ]
    let index = list.findIndex((x) => x.name == data.name && x.type == data.type)
    if (index != -1) {
      list[index].url = ''
      list[index].updtated_at = ''
    }

    user.kyc_documents = list
    await user.save()

    // need log
    return response.json({ message: `KYC Document Deleted Successfully!` })
  }

  async updateKYCStatus({ request, response }) {
    const { user } = request
    const data = request.only(['status'])

    const rules: any = {
      status: 'required',
    }

    const validation = new Validator(data, rules)
    if (validation.fails()) {
      return response.badRequest(validation.errors.errors)
    }

    user.document_status = data.status

    await user.save()
    return response.json({ message: `Status changed to ${user.status}` })
  }
}
