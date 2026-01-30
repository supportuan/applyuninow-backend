import Faq from 'App/Models/Faq'
import Student from 'App/Models/Student'
import moment from 'moment'
//import Country from 'App/Models/Country'

const Validator = require('validatorjs')

export default class FaqController {
  /**
   * @param request
   * @param response
   */
  public async index({ request, response }) {
    try {
      const list = await Faq.listing(request)
      return response.json(list)
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }

  public async countryWiseForStudent({ request, response, auth }) {
    try {
      let user = auth.user
      let student: any = await Student.query().where('user_id', user.id).first()

      if (!student) {
        return response.notFound({ message: `student not found.` })
      }
      request.qs().country_id = student.country_id
      const list = await Faq.listing(request)
      return response.json(list)
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
    const { faq } = ctx.request
    return this.save(ctx, faq)
  }

  public async save({ request, response, auth }, record = null) {
    try {
      const data = request.only(['solution', 'query', 'country_id'])
      const rules: any = {
        country_id: 'required',
        query: 'required|max:200',
        solution: 'required|max:5000',
      }

      const validation = new Validator(request.all(), rules)
      if (validation.fails()) {
        return response.badRequest(validation.errors.errors)
      }

      let faq: any = record
      if (record === null) {
        faq = new Faq()
      }

      for (let [key, value] of Object.entries(data)) {
        faq[key] = value
      }

      await faq.save()

      if (record) {
        await faq.log(auth.user, {
          message: `updated the user details`,
          type: 'ACTION',
        })
      }
      return response.json(faq)
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
      const { faq } = request

      if (faq.deleted_at) {
        return response.notFound({ message: `AddOn Deleted Already!` })
      }

      faq['deleted_at'] = moment().utcOffset('+05:30').format('YYYY-MM-DD HH:mm:ss')
      await faq.save()
      return response.json({ message: 'FAQ Deleted Successfully' })
    } catch (exception) {
      console.log(exception)
      return response.internalServerError({ message: exception.message })
    }
  }
  
  public async countryWiseFaqs({ request, response }) {
    try {
        const country_name = request?.requestBody?.country_name
      const list = await Faq
      .query()
      .preload('country', (query) => {
          query.select('name')
        })
        .whereHas('country', (query) => {
          query.where('name', country_name)
        })

      return response.json(list)
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }
}
