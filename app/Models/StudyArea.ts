import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import StudyIndustry from './StudyIndustry'
import StudySubIndustry from './StudySubIndustry'

export default class StudyArea extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public industry_id: number

  @belongsTo(() => StudyIndustry, {
    foreignKey: 'industry_id',
  })
  public industry: BelongsTo<typeof StudyIndustry>

  @column()
  public sub_industry_id: number

  @belongsTo(() => StudySubIndustry, {
    foreignKey: 'sub_industry_id',
  })
  public sub_industry: BelongsTo<typeof StudySubIndustry>

  @column()
  public deleted_at: string

  static dropdown() {
    return this.query().whereNull('deleted_at').where('industry_id', 1).select('name', 'id').orderBy('name', 'asc')
  }

  static listing(request) {
    const { page = 1, search_key = '', industry_id = '', sub_industry_id = '' } = request.qs()

    const limit = 10

    let query = this.query()

    if (search_key) {
      query = query.where('name', 'LIKE', `%${search_key}%`)
    }

    if (industry_id) {
      query = query.where('industry_id', '=', industry_id)
    }

    if (sub_industry_id) {
      query = query.where('sub_industry_id', '=', sub_industry_id)
    }

    return query
      .whereNull('deleted_at')
      .select('id', 'name', 'industry_id', 'sub_industry_id')
      .preload('industry', (query) => {
        query.select('name')
      })
      .preload('sub_industry', (query) => {
        query.select('name')
      })
      .orderBy('id', 'desc')
      .paginate(page, limit)
  }
}
