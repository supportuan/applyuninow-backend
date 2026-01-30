import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Notification extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public navigation_id: string

  @column()
  public receiver_id: number
  
  @column()
  public message: string

  @column()
  public active: boolean

  @column()
  public read: boolean

  @column()
  public category: string


  @belongsTo(() => User, {
    foreignKey: 'receiver_id',
  })
  public receiver: BelongsTo<typeof User>


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime


  static listing(request, user_id) {
    const { page = 1 } = request.qs()
    const limit = 10
    let query = this.query()

    return query
      .preload('receiver', (query) => {
        query.select('name')
      })
      .where('receiver_id', user_id)
      .where('active', 1)
      .select('id', 'read', 'message', 'created_at', 'receiver_id','active','navigation_id','category')
      .orderBy('id', 'desc')
      .paginate(page, limit)
  }
}
