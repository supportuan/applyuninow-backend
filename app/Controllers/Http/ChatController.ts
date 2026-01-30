import Chat from 'App/Models/Chat'
import Student from 'App/Models/Student'
const Validator = require('validatorjs')
import Ws from 'App/Services/Ws'

export default class ChatController {
  /**
   * @param request
   * @param response
   */
  public async index({ request, response, auth }) {
    try {
      if (auth.user.user_type == 3) {
        let student: any = await Student.findBy('user_id', auth.user.id)
        request.qs().student_id = student.id
      }
      const list = await Chat.listing(request)
      return response.send(list)
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }

  /**
   * @param request
   * @param response
   */
  public async store({ request, response, auth }) {
    const rules = {
      message: 'required|max:1000',
    }
    console.log(auth.user.user_type)
    if (auth.user.user_type != 3) {
      rules['student_id'] = 'required'
    }

    const validation = new Validator(request.all(), rules)
    if (validation.fails()) {
      return response.badRequest(validation.errors.errors)
    }

    const payload = request.body()
    let student: any = ''
    if (auth.user.user_type != 3) {
      student = await Student.find(payload.student_id)
    } else if (auth.user.user_type == 3) {
      student = await Student.findBy('user_id', auth.user.id)
    }

    if (!student) {
      return response.badRequest({ message: 'Invalid Application ID' })
    }

    let chat = await Chat.create({
      author_id: auth.user.id,
      message: payload.message,
      application_id: student.id,
    })

    await chat.load('author', (query) => {
      query.select('name')
    })
    Ws.io.emit('APPLICATION_INNER_CHAT', {
      application_id: student.id,
      meta: chat,
      application_user_id: student.user_id,
    })
    return response.send(chat)
  }
}
