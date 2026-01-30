import { DateTime } from 'luxon'
import { belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Country from './Country'
import Model from './Model'
import moment from 'moment'
import Database from '@ioc:Adonis/Lucid/Database'

export default class AdditionalService extends Model {
  @column({ isPrimary: true })
  public id: number

  @column()
  public last_name: string

  @column()
  public phone: string

  @column()
  public email: string

  @column()
  public first_name: string

  @column()
  public alternate_phone: string

  @column({
    prepare: (value: boolean) => Number(value).toString(),
    serialize: (value: number) => Boolean(value),
  })
  public is_contacted: string

  @column()
  public dob: string

  @column()
  public gender: string

  @column()
  public passport_no: string

  @column()
  public present_status: string

  @column({
    prepare: (value: string) => JSON.stringify(value),
    serialize: (value: string) => {
      return value ? JSON.parse(value) : []
    },
  })
  public images: any

  @column()
  public deleted_at: string | null

  @belongsTo(() => Country, {
    foreignKey: 'country_id',
  })
  public country: BelongsTo<typeof Country>

  @column()
  public country_id: number

  @column()
  public status: string

  @column()
  public call_back_time: string

  @column()
  public selected_service: string

  @column()
  public notes: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  static listing(request) {
    const {
      page = 1,
      country_id = '',
      status = '',
      created_from = '',
      created_to = '',
      search_key = '',
      service = '',
    } = request.qs()
    const limit = 10
    let query = this.query()

    if (created_from && created_to) {
      query = query
        .where(
          'created_at',
          '>=',
          moment(created_from).startOf('day').format('YYYY-MM-DD HH:mm:ss')
        )
        .where('created_at', '<=', moment(created_to).endOf('day').format('YYYY-MM-DD HH:mm:ss'))
    }

    if (search_key) {
      query = query.where((query) => {
        query
          .orWhere('first_name', 'LIKE', `%${search_key}%`)
          .orWhere('last_name', 'LIKE', `%${search_key}%`)
          .orWhere('phone', 'LIKE', `%${search_key}%`)
          .orWhere('email', 'LIKE', `%${search_key}%`)
      })
    }

    if (service) {
      query = query.where((query) => {
        query.where('selected_service', 'LIKE', `%${service}%`)
      })
    }

    if (country_id) {
      query = query.where('country_id', '=', country_id)
    }

    if (status) {
      query = query.where('status', '=', status)
    }

    return query
      .select(
        'id',
        'first_name',
        'last_name',
        'phone',
        'email',
        'created_at',
        'status',
        'present_status',
        'call_back_time',
        'country_id',
        'selected_service'
      )
      .preload('country')
      .whereNull('deleted_at')
      .orderBy('id', 'desc')
      .paginate(page, limit)
  }

  static archiveListing(request) {
    const {
      page = 1,
      country_id = '',
      status = '',
      created_from = '',
      created_to = '',
      search_key = '',
      service = '',
    } = request.qs()
    const limit = 10
    let query = this.query()

    if (created_from && created_to) {
      query = query
        .where(
          'created_at',
          '>=',
          moment(created_from).startOf('day').format('YYYY-MM-DD HH:mm:ss')
        )
        .where('created_at', '<=', moment(created_to).endOf('day').format('YYYY-MM-DD HH:mm:ss'))
    }

    if (search_key) {
      query = query.where((query) => {
        query
          .orWhere('first_name', 'LIKE', `%${search_key}%`)
          .orWhere('last_name', 'LIKE', `%${search_key}%`)
          .orWhere('phone', 'LIKE', `%${search_key}%`)
          .orWhere('email', 'LIKE', `%${search_key}%`)
      })
    }
    if (service) {
      query = query.where((query) => {
        query.where('selected_service', 'LIKE', `%${service}%`)
      })
    }
    if (country_id) {
      query = query.where('country_id', '=', country_id)
    }

    if (status) {
      query = query.where('status', '=', status)
    }

    return query
      .select(
        'id',
        'first_name',
        'last_name',
        'phone',
        'email',
        'created_at',
        'status',
        'present_status',
        'call_back_time',
        'country_id',
        'selected_service'
      )
      .preload('country')
      .whereNotNull('deleted_at')
      .orderBy('id', 'desc')
      .paginate(page, limit)
  }

  static async stats(request) {
    let { from = '2022-01-01', to = new Date() } = request.qs()
    if (!from) {
      from = '2022-01-01'
    }
    if (!to) {
      to = new Date()
    }
    from = moment(new Date(from)).startOf('day').format('YYYY-MM-DD HH:mm:ss')
    to = moment(new Date(to)).endOf('day').format('YYYY-MM-DD HH:mm:ss')
    const [[stats]] = await Database.rawQuery(`
      SELECT
        (SELECT count(id) from additional_services where created_at >= '${from}' and created_at <= '${to}' and deleted_at IS NULL) as total_leads,
        (SELECT count(id) from additional_services where created_at >= '${from}' and created_at <= '${to}' and status IN ('IN_PROGRESS','CONTACTED','COMPLETED') and  deleted_at IS NULL) as contacted,
        (SELECT count(id) from additional_services where created_at >= '${from}' and created_at <= '${to}' and status IN ('NOT_CONTACTED') and deleted_at IS NULL) as not_contacted,
        (SELECT count(id) from additional_services where created_at >= '${from}' and created_at <= '${to}' and status IN ('IN_PROGRESS') and  deleted_at IS NULL) as in_progress,
        (SELECT count(id) from additional_services where created_at >= '${from}' and created_at <= '${to}' and status IN ('COMPLETED') and  deleted_at IS NULL) as completed
    `)
    return stats
  }
}
