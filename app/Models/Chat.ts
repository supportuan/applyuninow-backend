import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Chat extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public author_id: number

  @column()
  public attatchments: string

  @column()
  public message: string

  @column()
  public read: boolean

  @belongsTo(() => User, {
    foreignKey: 'author_id',
  })
  public author: BelongsTo<typeof User>

  @column()
  public application_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  static listing(request) {
    const { page = 1, student_id = '' } = request.qs()
    const limit = 100
    let query = this.query()

    return query
      .preload('author', (query) => {
        query.select('name')
      })
      .where('application_id', student_id)
      .select('id', 'application_id', 'message', 'created_at', 'author_id')
      .orderBy('id', 'asc')
      .paginate(page, limit)
  }
}
