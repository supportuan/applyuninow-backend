import StudyIndustry from 'App/Models/StudyIndustry'
import moment from 'moment'
const Validator = require('validatorjs')

export default class StudyIndustryController {
  /**
   * @param request
   * @param response
   */
  public async index({ request, response }) {
    try {
      const studyList = await StudyIndustry.listing(request)
      return response.json(studyList)
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
    const { studyindustry } = ctx.request
    return this.save(ctx, studyindustry)
  }

  public async save({ request, response }, record = null) {
    const data = request.only(['name'])
    const rules: any = {
      name: 'required|max:200',
    }

    const validation = new Validator(request.all(), rules)
    if (validation.fails()) {
      return response.badRequest(validation.errors.errors)
    }

    let studyindustry: any = record
    if (record === null) {
      studyindustry = new StudyIndustry()
    }
    const existingRecord = await StudyIndustry.query()
    .whereNull('deleted_at')
    .where('name', data.name.trim()).first()

    if (existingRecord && existingRecord.id !== studyindustry.id) {
      if (existingRecord.name.toLowerCase() === data.name.toLowerCase()) {
        return response.badRequest({ message: ' StudyIndustryName already exists.' })
      }
    }

    for (let [key, value] of Object.entries(data)) {
      studyindustry[key] = value
    }

    await studyindustry.save()
    return response.json(studyindustry)
  }

  /**
   * @param request
   * @param response
   */
  public async show({ request, response }) {
    try {
      const { studyindustry } = request
      return response.json(studyindustry)
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
      const { studyindustry } = request
      studyindustry['deleted_at'] = moment().utcOffset('+05:30').format('YYYY-MM-DD HH:mm:ss')
      await studyindustry.save()
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
  public async dropdown({ response }) {
    try {
      const list = await StudyIndustry.dropdown()
      return response.json(list)
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }
}
