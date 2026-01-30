import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import University from './University'

export default class StudentUniversity extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public student_id: number

  @column()
  public university_id: number

  @column()
  public value: string

  @column()
  public applied_intake: string

  @column()
  public offer_intake: string

  @column()
  public course_link: string

  @column()
  public defer: string

  @column.dateTime()
  public updated_at: DateTime

  @column({
    prepare: (value: boolean) => Number(value).toString(),
    serialize: (value: number) => Boolean(value),
  })
  public is_selected: string

  @column()
  public status: string

  @belongsTo(() => University, {
    foreignKey: 'university_id',
  })
  public university: BelongsTo<typeof University>
}
