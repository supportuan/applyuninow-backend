import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import StudyIndustry from './StudyIndustry'

export default class StudySubIndustry extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public deleted_at: string

  @column()
  public industry_id: number

  @belongsTo(() => StudyIndustry, {
    foreignKey: 'industry_id',
  })
  public industry: BelongsTo<typeof StudyIndustry>

  static dropdown(industry_id) {
    return this.query()
      .where('industry_id', industry_id)
      .whereNull('deleted_at')
      .preload('industry', (query) => {
        query.select('name')
      })
      .select('name', 'id', 'industry_id')
  }

  static listing(request) {
    const { page = 1, search_key = '', industry_id = '' } = request.qs()

    const limit = 10

    let query = this.query()

    if (search_key) {
      query = query.where('name', 'LIKE', `%${search_key}%`)
    }

    if (industry_id) {
      query = query.where('industry_id', '=', industry_id)
    }

    return query
      .whereNull('deleted_at')
      .preload('industry', (query) => {
        query.select('name')
      })
      .select('id', 'name', 'industry_id')
      .orderBy('id', 'desc')
      .paginate(page, limit)
  }
}
