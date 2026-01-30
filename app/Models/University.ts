import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Country from './Country'

export default class University extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public country_id: number

  @column()
  public city: number

  @column()
  public news_ranking: string

  @column()
  public webometrics_national_ranking: string

  @column()
  public webometrics_world_ranking: string

  @column()
  public qs_ranking: string

  @column()
  public percentage_of_international_students: string

  @column()
  public acceptance_rate: string

  @column()
  public university_type: string

  @column()
  public location: string

  @column()
  public deleted_at: string

  @column()
  public logo: string

  @belongsTo(() => Country, {
    foreignKey: 'country_id',
  })
  public country: BelongsTo<typeof Country>

  static listing(request) {
    const { page = 1, country_id = '', search_key = '' } = request.qs()
    const limit = 10
    let query = this.query()

    if (country_id) {
      query = query.where('country_id', '=', country_id)
    }

    if (search_key) {
      query = query.where('name', 'LIKE', `%${search_key}%`)
    }

    return query
      .whereNull('deleted_at')
      .select('id', 'name', 'country_id', 'location', 'city', 'logo')
      .preload('country')
      .orderBy('id', 'desc')
      .paginate(page, limit)
  }

  static dropdown(country_id) {
    return this.query()
      .where('country_id', '=', country_id)
      .whereNull('deleted_at')
      .select('id', 'name', 'country_id')
      .preload('country')
      .orderBy('id', 'desc')
  }
  
    static getCity(country_id) {
    return this.query()
      .where('country_id', '=', country_id)
      .whereNull('deleted_at')
      .distinct('city')
      .orderBy('city', 'asc')
  }
}
