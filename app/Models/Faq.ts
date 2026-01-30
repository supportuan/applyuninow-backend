import { DateTime } from 'luxon'
import { column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Model from './Model'
import Country from './Country'

export default class Faq extends Model {
  @column({ isPrimary: true })
  public id: number

  @column()
  public country_id: number

  @column()
  public query: string

  @column()
  public solution: string

  @column()
  public deleted_at: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
  
  @column()
  public category_name: string
  
   @belongsTo(() => Country, {
    foreignKey: 'country_id',
  })
  public country: BelongsTo<typeof Country>

  static listing(request) {
    const { page = 1, search_key = '', country_id = '' } = request.qs()
    const limit = 10
    let query = this.query()

    if (search_key) {
      query = query.where((query) => {
        query
          .orWhere('query', 'LIKE', `%${search_key}%`)
          .orWhere('solution', 'LIKE', `%${search_key}%`)
      })
    }
    if (country_id) {
      query = query.where('country_id', '=', country_id)
    }

    return query
      .whereNull('deleted_at')
      .select('id', 'country_id', 'query', 'solution')
      .orderBy('id', 'asc')
      .paginate(page, limit)
  }
}
