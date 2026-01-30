import CourseList from 'App/Models/CourseList'
//import moment from 'moment'

//const Validator = require('validatorjs')

export default class CourseListController {

  public async courseCart({ request, response }) {
    try {
      const list = await CourseList.listing(request)
      return response.json(list)
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }



}
