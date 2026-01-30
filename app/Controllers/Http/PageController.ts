import Page from 'App/Models/Page'

export default class PageController {
  /**
   * @param request
   * @param response
   * @param slug
   */
  public async index({ request, response}) {
    try {
    	console.log(request.param('id'))
    	console.log('sssssssssss')
      const pageDetail = await Page.query().where('page_slug', request.param('id')).first()
      return response.json(pageDetail)
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }



  
}
