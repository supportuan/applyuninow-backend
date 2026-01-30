import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Student from './Student'

export default class Feedback extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public student_id: number

  @column()
  public rating: number

  @column()
  public feedback: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime


  @belongsTo(() => Student, {
    foreignKey: 'student_id',
  })
  public student: BelongsTo<typeof Student>

  
  static listing(request) {
    const { 
      page = 1,
      created_from = '',
      created_to = '',
     } = request.qs()
    const limit = 10
    let query = this.query()

    if (created_from && created_to) {
      query = query.where('created_at', '>=', created_from).where('created_at', '<=', created_to)
    }
    return query
      .preload('student', (query) => {
        query.select('name','email','phone')
      })
      .select('id', 'feedback', 'rating', 'created_at', 'student_id')
      .orderBy('id', 'desc')
      .paginate(page, limit)
  }
}
