import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Resource extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public url: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public deleted_at: string | null

  @column()
  public parent_id: number

  @column()
  public slug: string

  @column()
  public user_type: number

  @column()
  public folder_image: string

  @column({
    prepare: (value: boolean) => Number(value),
    serialize: (value: number) => Boolean(value),
  })
  public is_folder: boolean

  static listing(request) {
    const { page = 1, search_key = '', type = 1 } = request.qs()
    const limit = 10
    let query = this.query()

    if (search_key) {
      query = query.where((query) => {
        query.orWhere('name', 'LIKE', `%${search_key}%`)
      })
    }

    return query
      .where('user_type', type)
      .where('is_folder', 1)
      .whereNull('deleted_at')
      .select('id', 'name', 'folder_image', 'slug')
      .paginate(page, limit)
  }

  static subFileList(request) {
    const { page = 1, search_key = '', parent_id = '' } = request.qs()
    const limit = 10
    let query = this.query()

    if (search_key) {
      query = query.where((query) => {
        query.orWhere('name', 'LIKE', `%${search_key}%`)
      })
    }

    return query
      .where('parent_id', parent_id)
      .whereNull('deleted_at')
      .where('is_folder', 0)
      .select('id', 'name', 'url')
      .paginate(page, limit)
  }

  static deleteFiles(request) {
    const { page = 1, search_key = '' } = request.qs()
    const limit = 10
    let query = this.query()

    if (search_key) {
      query = query.where((query) => {
        query.orWhere('name', 'LIKE', `%${search_key}%`)
      })
    }

    return query
      .whereNotNull('deleted_at')
      .where('is_folder', 0)
      .select('id', 'name', 'url')
      .orderBy('id', 'desc')
      .paginate(page, limit)
  }
}
