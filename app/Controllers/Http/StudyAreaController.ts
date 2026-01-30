import StudyArea from 'App/Models/StudyArea'
import moment from 'moment'
const Validator = require('validatorjs')

export default class StudyAreaController {
  /**
   * @param request
   * @param response
   */
  public async index({ request, response }) {
    try {
      const studyAreaList = await StudyArea.listing(request)
      return response.json(studyAreaList)
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
    const { studyarea } = ctx.request
    return this.save(ctx, studyarea)
  }

  public async save({ request, response }, record = null) {
    const data = request.only(['name', 'industry_id', 'sub_industry_id'])
    const rules: any = {
      name: 'required|max:200',
    }

    const validation = new Validator(request.all(), rules)
    if (validation.fails()) {
      return response.badRequest(validation.errors.errors)
    }

    let studyarea: any = record
    if (record === null) {
      studyarea = new StudyArea()
    }

    const existingRecord = await StudyArea.query()
    .where('name', data.name.trim())
    .where('industry_id',data.industry_id)
    .where('sub_industry_id',data.sub_industry_id)
    .whereNull('deleted_at')
    .first()

    if (existingRecord && existingRecord.id !== studyarea.id) {
      if (existingRecord.name.toLowerCase() === data.name.toLowerCase()) {
        return response.badRequest({ message: ' StudySubject already exists.' })
      }
    }

    for (let [key, value] of Object.entries(data)) {
      studyarea[key] = value
    }

    await studyarea.save()
    studyarea = await studyarea.load('sub_industry')
    return response.json(studyarea)
  }

  /**
   * @param request
   * @param response
   */
  public async show({ request, response }) {
    try {
      const { studyarea } = request
      return response.json(studyarea)
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
      const { studyarea } = request
      studyarea.deleted_at = moment().utcOffset('+05:30').format('YYYY-MM-DD HH:mm:ss')
      await studyarea.save()
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
      const users = await StudyArea.dropdown()
      return response.json(users)
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }
}
