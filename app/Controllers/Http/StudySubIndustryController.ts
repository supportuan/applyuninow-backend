import StudySubIndustry from 'App/Models/StudySubIndustry'
import moment from 'moment'
const Validator = require('validatorjs')

export default class StudySubIndustryController {
  /**
   * @param request
   * @param response
   */
  public async index({ request, response }) {
    try {
      const studyList = await StudySubIndustry.listing(request)
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
    const { studysubindustry } = ctx.request
    return this.save(ctx, studysubindustry)
  }

  public async save({ request, response }, record = null) {
    const data = request.only(['name', 'industry_id'])
    const rules: any = {
      name: 'required|max:200',
    }

    const validation = new Validator(request.all(), rules)
    if (validation.fails()) {
      return response.badRequest(validation.errors.errors)
    }

    let studysubindustry: any = record
    if (record === null) {
      studysubindustry = new StudySubIndustry()
    }

    const existingRecord = await StudySubIndustry.query()
    .where('name', data.name.trim())
    .whereNull('deleted_at')
    .where('industry_id',data.industry_id)
    .first()

    if (existingRecord && existingRecord.id !== studysubindustry.id) {
      if (existingRecord.name.toLowerCase() === data.name.toLowerCase()) {
        return response.badRequest({ message: ' StudyArea already exists.' })
      }
    }

    for (let [key, value] of Object.entries(data)) {
      studysubindustry[key] = value
    }

    await studysubindustry.save()
    await studysubindustry.preload('industry')
    return response.json(studysubindustry)
  }

  /**
   * @param request
   * @param response
   */
  public async show({ request, response }) {
    try {
      const { studysubindustry } = request
      return response.json(studysubindustry)
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
      const { studysubindustry } = request
      studysubindustry['deleted_at'] = moment().utcOffset('+05:30').format('YYYY-MM-DD HH:mm:ss')
      await studysubindustry.save()
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
      const list = await StudySubIndustry.dropdown(request.param('id'))
      return response.json(list)
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }
}
