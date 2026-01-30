import Country from 'App/Models/Country'

export default class CountryController {
  /**
   * @param request
   * @param response
   */
  public async index({ response }) {
    try {
      const users = await Country.dropdown()
      return response.json(users)
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }
}
