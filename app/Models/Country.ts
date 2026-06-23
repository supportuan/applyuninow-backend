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

  static async resolveId(value: string | number | null | undefined): Promise<number | null> {
    if (value === null || value === undefined || value === '') {
      return null
    }

    const raw = String(value).trim()
    if (/^\d+$/.test(raw)) {
      return Number(raw)
    }

    const slug = raw.replace(/^static-/, '').toLowerCase()
    const country = await this.query()
      .whereRaw("LOWER(REPLACE(name, ' ', '-')) = ?", [slug])
      .first()

    return country?.id ?? null
  }
}
