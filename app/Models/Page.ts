import { DateTime } from 'luxon'
import { column } from '@ioc:Adonis/Lucid/Orm'
import Model from './Model'

export default class Page extends Model {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string
  
  @column()
  public title: string
  
  @column()
  public page_slug: string
  
  @column()
  public MetaTitle: string

  @column()
  public MetaKeywords: string
  
  @column()
  public MetaDescription: string
  
  @column()
  public page_content: string
  
  @column()
  public status: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  
}
