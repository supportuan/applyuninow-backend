import Feedback from 'App/Models/Feedback'
import Student from 'App/Models/Student'
const Validator = require('validatorjs')

export default class FeedbackController {
  /**
   * @param request
   * @param response
   */
  public async index({ request, response }) {
    try {
      const list = await Feedback.listing(request)
      return response.send(list)
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }

  public async checkFeedBackStatus({ response, auth }) {
    let user = auth.user
    let student: any = await Student.query().where('user_id', user.id).first()

    if (!student) {
      return response.notFound({ message: `student not found.` })
    }

    let exists = await Feedback.findBy('student_id', student.id)
    return response.send({ status: exists ? 'disabled' : 'enabled' })
  }

  public async createOrUpdateFeedback({ request, response, auth }) {
    const rules = {
      rating: 'required',
      feedback: 'required|max:1000',
    }

    const validation = new Validator(request.all(), rules)
    if (validation.fails()) {
      return response.badRequest(validation.errors.errors)
    }

    let user = auth.user
    let student: any = await Student.query().where('user_id', user.id).first()

    if (!student) {
      return response.notFound({ message: `student not found.` })
    }
    const payload = request.body()
    const searchCriteria = {
      student_id: student.id,
    }

    const savePayload = {
      student_id: student.id,
      rating: payload.rating,
      feedback: payload.feedback,
    }

    await Feedback.updateOrCreate(searchCriteria, savePayload)

    return response.json({ status: 'disabled' })
  }
}
