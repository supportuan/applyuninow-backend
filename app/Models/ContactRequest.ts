import { DateTime } from 'luxon'
import { BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Database from '@ioc:Adonis/Lucid/Database'
import moment from 'moment'
import Country from './Country'
import Model from './Model'
import User from './User'
import StudyArea from './StudyArea'
import StudyIndustry from './StudyIndustry'
export default class ContactRequest extends Model {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public email: string

  @column()
  public study_area_id: number | null

  @column()
  public industry_id: string

  @column()
  public study_area: string

  @column()
  public phone: string

  @column()
  public destination: string

  @column()
  public level: string

  @column()
  public industry: string

  @column()
  public intake: string

  @column()
  public study_budget: string

  @column()
  public study_mode: string

  @column()
  public rec_grade_achived: string

  @column()
  public rec_level_academic: string

  @column()
  public pre_study_loc: string

  @column()
  public last_name: string

  @column()
  public study_duration: string

  @column()
  public intake_year: string

  @column()
  public intake_month: string

  @column()
  public first_name: string

  @column()
  public deleted_at: string | null

  @column()
  public type_of_degree: string

  @column()
  public study_attendance_type: string

  @column()
  public work_experince: string

  @column({
    prepare: (value: boolean) => Number(value).toString(),
    serialize: (value: number) => Boolean(value),
  })
  public enable_email_notification: boolean

  @column()
  public asst_eng_prof_test: string

  @column()
  public source_page: string

  @column()
  public assigned_by: number

  @column()
  public assigned_to: number | null

  @column()
  public assigned_on: string | null

  @column()
  public status: string
  @column()
  public source: string

  @column({
    prepare: (value: boolean) => Number(value).toString(),
    serialize: (value: number) => Boolean(value),
  })
  public is_reassign_req: boolean

  @column()
  public callback_time: string

  @column()
  public created_by: number

  @column()
  public re_assign_notes: string

  @column()
  public re_assign_date: string | null

  @column({
    prepare: (value: string) => JSON.stringify(value),
    serialize: (value: string) => {
      return value ? JSON.parse(value) : []
    },
  })
  public education_details: any

  @column({
    prepare: (value: string) => JSON.stringify(value),
    serialize: (value: string) => {
      return value ? JSON.parse(value) : []
    },
  })
  public asst_exam_sections: any

  @column({
    prepare: (value: boolean) => Number(value).toString(),
    serialize: (value: number) => Boolean(value),
  })
  public is_contacted: boolean

  @column({
    prepare: (value: boolean) => Number(value).toString(),
    serialize: (value: number) => Boolean(value),
  })
  public is_student: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Country, {
    foreignKey: 'country_id',
  })
  public country: BelongsTo<typeof Country>

  @column()
  public country_id: number

  @belongsTo(() => User, {
    foreignKey: 'assigned_to',
  })
  public user: BelongsTo<typeof User>

  @belongsTo(() => User, {
    foreignKey: 'assigned_by',
  })
  public assignedBy: BelongsTo<typeof User>

  @belongsTo(() => StudyArea, {
    foreignKey: 'study_area_id',
  })
  public lead_study_area: BelongsTo<typeof StudyArea>

  @belongsTo(() => StudyIndustry, {
    foreignKey: 'industry_id',
  })
  public study_industry: BelongsTo<typeof StudyIndustry>

  @column()
  public reassign_req_id: number | null

  @belongsTo(() => User, {
    foreignKey: 'reassign_req_id',
  })
  public re_assign_user: BelongsTo<typeof User>

  static async listing(request, user) {
    const {
      page = 1,
      search = '',
      status = '',
      from = '',
      to = '',
      intake_month = '',
      intake_year = '',
      assigned_to = '',
      source = '',
      country_id = '',
    } = request.qs()
    const limit = 10
    let query = this.query()

    if (user.role.slug != 'admin' && user.role.slug != 'manager') {
      query.where((query) => {
        query.where('assigned_to', '=', user.id).where('is_reassign_req', 0)
      })
    }

    if (country_id) {
      query = query.where('country_id', country_id)
    }

    if (source) {
      query = query.where('source', source)
    }

    if (assigned_to) {
      query = query.where('assigned_to', assigned_to)
    }

    if (from && to) {
      query = query
        .where('created_at', '>=', moment(from).startOf('day').format('YYYY-MM-DD HH:mm:ss'))
        .where('created_at', '<=', moment(to).endOf('day').format('YYYY-MM-DD HH:mm:ss'))
    }

    if (search) {
      query = query.where((query) => {
        query
          .orWhere('name', 'LIKE', `%${search}%`)
          .orWhere('phone', 'LIKE', `%${search}%`)
          .orWhere('email', 'LIKE', `%${search}%`)
      })
    }

    if (status) {
      query = query.where('status', status)
    }

    if (intake_month) {
      query = query.where('intake_month', intake_month)
    }
    if (intake_year) {
      query = query.where('intake_year', intake_year)
    }

    return query
      .preload('country', (query) => {
        query.select('name')
      })
      .preload('user', (query) => {
        query.select('name')
      })
      .preload('re_assign_user', (query) => {
        query.select('name')
      })
      
      .select(
        'name',
        'id',
        'country_id',
        'phone',
        'email',
        'source',
        'assigned_to',
        'status',
        'intake_year',
        'intake_month',
        'first_name',
        'last_name',
        'is_reassign_req',
        're_assign_notes',
        're_assign_date',
        'callback_time',
        'reassign_req_id',
        'created_at'
      )
      .whereNull('deleted_at')
      .where('is_student',0)
      .orderBy('id', 'desc')
      .paginate(page, limit)
  }

  static async stats(request, user) {
    let { from = '2022-01-01', to = new Date() } = request.qs()
    if (!from) {
      from = '2022-01-01'
    }
    if (!to) {
      to = new Date()
    }
    from = moment(new Date(from)).startOf('day').format('YYYY-MM-DD HH:mm:ss')
    to = moment(new Date(to)).endOf('day').format('YYYY-MM-DD HH:mm:ss')

    let assignCondition = user.role.slug !== 'admin' ? `and assigned_to = ${user.id}` : ``
    const [[stats]] = await Database.rawQuery(`
    SELECT
      (SELECT count(id) from contact_requests where created_at >= '${from}' and created_at <= '${to}' and deleted_at IS NULL and is_student = 0 ${assignCondition}) as total_contacts,
      (SELECT count(id) from contact_requests where created_at >= '${from}' and created_at <= '${to}' and is_contacted = 1 and  deleted_at IS NULL and is_student = 0 ${assignCondition}) as contacted,
      (SELECT count(id) from contact_requests where created_at >= '${from}' and created_at <= '${to}' and is_contacted = 0 and  deleted_at IS NULL  and is_student = 0 ${assignCondition}) as not_contacted,
      (SELECT count(id) from contact_requests where created_at >= '${from}' and created_at <= '${to}' and assigned_to IS NOT NULL and  deleted_at IS NULL and is_student = 0) as assigned,
      (SELECT count(id) from contact_requests where created_at >= '${from}' and created_at <= '${to}' and assigned_to IS NULL and  deleted_at IS NULL and is_student = 0) as not_assigned
  `)
    return stats
  }

  static async archiveListing(request) {
    const { page = 1, search = '', status = '', from = '', to = '', intake_month = '', intake_year='', country_id='', source='', assigned_to='' } = request.qs()
    const limit = 10
    let query = this.query()


    if (country_id) {
      query = query.where('country_id', country_id)
    }

    if (source) {
      query = query.where('source', source)
    }

    if (assigned_to) {
      query = query.where('assigned_to', assigned_to)
    }

    if (from && to) {
      query = query
        .where('created_at', '>=', moment(from).startOf('day').format('YYYY-MM-DD HH:mm:ss'))
        .where('created_at', '<=', moment(to).endOf('day').format('YYYY-MM-DD HH:mm:ss'))
    }

    if (search) {
      query = query.where((query) => {
        query
          .orWhere('name', 'LIKE', `%${search}%`)
          .orWhere('phone', 'LIKE', `%${search}%`)
          .orWhere('email', 'LIKE', `%${search}%`)
      })
    }

    if (status) {
      query = query.where('status', status)
    }

    if (intake_month) {
      query = query.where('intake_month', intake_month)
    }
    if (intake_year) {
      query = query.where('intake_year', intake_year)
    }

    return query
      .preload('country', (query) => {
        query.select('name')
      })
      .preload('user', (query) => {
        query.select('name')
      })
      .whereNotNull('deleted_at')
      .select(
        'name',
        'id',
        'country_id',
        'phone',
        'email',
        'source',
        'assigned_to',
        'status',
        'intake_year',
        'intake_month',
        'first_name',
        'last_name'
      )
      .orderBy('id', 'desc')
      .paginate(page, limit)
  }
}
