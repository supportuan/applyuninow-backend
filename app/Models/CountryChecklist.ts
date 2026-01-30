import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class CountryChecklist extends BaseModel {
  @column()
  public country_id: number

  @column()
  public check_list_id: number
}
