import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import CheckList from './CheckList'

export default class Country extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public symbol: string

  @column()
  public currency: string
  
  @column()
  public status: number
  
  @column()
  public position: number

  @manyToMany(() => CheckList, {
    pivotTable: 'country_checklists',
  })
  public checklist: ManyToMany<typeof CheckList>

  static dropdown() {
    return this.query().where('status', '=', 1).select('name', 'id','currency').orderBy('name', 'asc')
  }
}
