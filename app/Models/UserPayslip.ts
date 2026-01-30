import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class UserPayslip extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public user_id: number

  @column()
  public payslip_url: string

  @column()
  public payslip_month: string
}
