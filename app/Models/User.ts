import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import {
  column,
  beforeSave,
  belongsTo,
  BelongsTo,
  BaseModel,
  hasMany,
  HasMany,
  computed,
} from '@ioc:Adonis/Lucid/Orm'
import Role from './Role'
import UserPayslip from './UserPayslip'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public email: string

  @column()
  public phone: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public rememberMeToken?: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }

  @column({
    prepare: (value: boolean) => Number(value),
    serialize: (value: number) => Boolean(value),
  })
  public active: string

  @column({
    prepare: (value: boolean) => Number(value),
    serialize: (value: number) => Boolean(value),
  })
  public is_super_admin: string

  @column({
    prepare: (value: boolean) => Number(value),
    serialize: (value: number) => Boolean(value),
  })
  public first_time: string

  @column({
    prepare: (value: boolean) => Number(value),
    serialize: (value: number) => Boolean(value),
  })
  public is_agreed_policy: string

  @column()
  public role_id: number

  @column()
  public token: string

  @belongsTo(() => Role, {
    foreignKey: 'role_id',
  })
  public role: BelongsTo<typeof Role>

  @column()
  public deleted_at: string | null

  @column()
  public emg_contact_name: string

  @column()
  public emg_contact_phone: string

  @column()
  public emg_contact_email: string

  @column()
  public address: string

  @column()
  public city: string

  @column()
  public state: string

  @column()
  public image: string

  @column()
  public offer_letter: string

  @column()
  public user_type: number

  @column()
  public document_status: string

  @column({
    prepare: (value: string) => JSON.stringify(value),
    serialize: (value: string) => {
      return value ? JSON.parse(value) : []
    },
  })
  public kyc_documents: string

  @hasMany(() => UserPayslip, {
    foreignKey: 'user_id',
  })
  public payslips: HasMany<typeof UserPayslip>

  @computed()
  public session: any

  static listing(request) {
    const {
      page = 1,
      search_key = '',
      role_id = '',
      user_type = '1',
      document_status = '',
    } = request.qs()
    const limit = 10
    let query = this.query()

    if (document_status) {
      query = query.where('document_status', '=', document_status)
    }

    if (role_id) {
      query.whereHas('role', (query) => {
        query.where('id', role_id).select('name')
      })
    }

    if (search_key) {
      query = query.where((query) => {
        query
          .orWhere('name', 'LIKE', `%${search_key}%`)
          .orWhere('phone', 'LIKE', `%${search_key}%`)
          .orWhere('email', 'LIKE', `%${search_key}%`)
      })
    }

    return query
      .preload('role', (query) => {
        query.select('name')
      })
      .where('user_type', '=', user_type)
      .where('is_super_admin', 0)
      .whereNull('deleted_at')
      .select(
        'id',
        'name',
        'created_at',
        'email',
        'phone',
        'active',
        'role_id',
        'document_status',
        'user_type'
      )
      .orderBy('active', 'desc')
      .orderBy('id', 'desc')
      .paginate(page, limit)
  }

  static dropdown() {
    return this.query()
      .whereHas('role', (query) => {
        query.whereNot('slug', 'student')
      })
      .where('active', 1)
      .where('user_type', '!=', 3)
      .whereNull('deleted_at')
      .select('id', 'name', 'phone', 'active', 'role_id')
      .orderBy('id', 'desc')
  }

  static archiveListing(request) {
    const {
      page = 1,
      search_key = '',
      role_id = '',
      user_type = '1',
      document_status = '',
    } = request.qs()
    const limit = 10
    let query = this.query()

    if (document_status) {
      query = query.where('document_status', '=', document_status)
    }

    if (role_id) {
      query.whereHas('role', (query) => {
        query.where('id', role_id).select('name')
      })
    }

    if (search_key) {
      query = query.where((query) => {
        query
          .orWhere('name', 'LIKE', `%${search_key}%`)
          .orWhere('phone', 'LIKE', `%${search_key}%`)
          .orWhere('email', 'LIKE', `%${search_key}%`)
      })
    }

    return query
      .preload('role', (query) => {
        query.select('name')
      })
      .where('user_type', '=', user_type)
      .whereNotNull('deleted_at')
      .select(
        'id',
        'name',
        'created_at',
        'email',
        'phone',
        'active',
        'role_id',
        'document_status',
        'user_type'
      )
      .orderBy('active', 'desc')
      .orderBy('id', 'desc')
      .paginate(page, limit)
  }
}
