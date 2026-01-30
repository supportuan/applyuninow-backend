import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class StudentChecklist extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public student_id: number

  @column()
  public check_list_id: number

  @column()
  public value: string

  @column()
  public link_url: string

  @column.dateTime()
  public updated_at: DateTime
}
