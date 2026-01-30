import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class StudyIndustry extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string
  
  @column()
  public icon: string

  static dropdown() {
    return this.query().whereNull('deleted_at').select('name', 'id', 'icon').orderBy('name', 'asc')
  }

  @column()
  public deleted_at: string

  static listing(request) {
    const { page = 1, search_key = '' } = request.qs()

    const limit = 10

    let query = this.query()

    if (search_key) {
      query = query.where('name', 'LIKE', `%${search_key}%`)
    }

    return query
      .whereNull('deleted_at')
      .select('id', 'name', 'icon')
      .orderBy('id', 'desc')
      .paginate(page, limit)
  }
}
