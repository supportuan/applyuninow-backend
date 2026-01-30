// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Page from 'App/Models/Page'

export default class PagesController {
	
   /**
   * @param request
   * @param response
   * @param slug
   */
  public async index({ request, response}) {
    try {
    	console.log(request.param('slug'))
    	console.log('sssssssssss')
      const pageDetail = await Page.query().where('page_slug', request.param('slug')).first()
      return response.json(pageDetail)
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }

}


