import { DateTime } from 'luxon'
import {
  BelongsTo,
  belongsTo,
  column,
  hasMany,
  HasMany,
  ManyToMany,
  manyToMany,
} from '@ioc:Adonis/Lucid/Orm'
import Model from './Model'
import User from './User'
import Country from './Country'
import CheckList from './CheckList'
import University from './University'
import StudentChecklist from './StudentChecklist'
import StudentUniversity from './StudentUniversity'
import Database from '@ioc:Adonis/Lucid/Database'
import moment from 'moment'
import StudyIndustry from './StudyIndustry'
import StudyArea from './StudyArea'
export default class Student extends Model {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public email: string

  @column()
  public phone: string

  @column()
  public level: string

  @column()
  public industry: string

  @column()
  public intake: string

  @column()
  public total_check_list: number

  @column()
  public completed_check_list: number

  @column()
  public stage: string

  @column()
  public stage_total_task: number

  @column()
  public stage_completed_task: number

  @column()
  public country_id: number

  @column()
  public contact_id: number

  @column()
  public user_id: number

  @column()
  public lead_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public deleted_at: string | null

  @belongsTo(() => User, {
    foreignKey: 'contact_id',
  })
  public primaryContact: BelongsTo<typeof User>

  @belongsTo(() => Country, {
    foreignKey: 'country_id',
  })
  public country: BelongsTo<typeof Country>

  @belongsTo(() => User, {
    foreignKey: 'lead_id',
  })
  public lead: BelongsTo<typeof User>

  @column({
    prepare: (value: string) => JSON.stringify(value),
    serialize: (value: string) => {
      return value ? (typeof value === 'string' ? JSON.parse(value) : value) : {}
    },
  })
  public steps_timestamp: any

  @column({
    prepare: (value: boolean) => Number(value).toString(),
    serialize: (value: number) => Boolean(value),
  })
  public is_enrolled: string

  @manyToMany(() => CheckList, {
    pivotTable: 'student_checklists',
  })
  public checklist: ManyToMany<typeof CheckList>

  @hasMany(() => StudentChecklist, {
    foreignKey: 'student_id',
  })
  public selected_checklist: HasMany<typeof StudentChecklist>

  @hasMany(() => StudentUniversity, {
    foreignKey: 'student_id',
  })
  public selected_universities: HasMany<typeof StudentUniversity>

  @manyToMany(() => University, {
    pivotTable: 'student_universities',
  })
  public universities: ManyToMany<typeof University>

  @belongsTo(() => StudyIndustry, {
    foreignKey: 'industry_id',
  })
  public study_industry: BelongsTo<typeof StudyIndustry>

  @column()
  public sub_industry_id: number

  @belongsTo(() => StudyArea, {
    foreignKey: 'study_area_id',
  })
  public study_area: BelongsTo<typeof StudyArea>

  @column()
  public industry_id: number

  @column()
  public study_area_id: number

  @column()
  public last_name: string

  @column()
  public intake_year: string

  @column()
  public intake_month: string

  @column()
  public first_name: string

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
  public study_duration: string

  @column()
  public type_of_degree: string

  @column()
  public study_attendance_type: string

  @column()
  public assigned_by: number

  @column()
  public assigned_on: string

  @column()
  public status: string

  @column()
  public work_experince: string

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

  static listing(request, user) {
    const {
      page = 1,
      search_key = '',
      created_from = '',
      created_to = '',
      country_id = '',
      stage = '',
      contact_id = '',
      status = '',
    } = request.qs()
    const limit = 10
    let query = this.query()

    if (user.role.slug !== 'admin') {
      query = query.where('contact_id', '=', user.id)
    }
    if (created_from && created_to) {
      query = query.where('created_at', '>=', created_from).where('created_at', '<=', created_to)
    }

    if (country_id) {
      query = query.where('country_id', '=', country_id)
    }

    if (stage) {
      query = query.where('stage', '=', stage)
    }

    if (status) {
      query = query.where('status', '=', status)
    }

    if (contact_id) {
      query = query.where('contact_id', '=', contact_id)
    }

    if (search_key) {
      query = query.where((query) => {
        query
          .orWhere('id', 'LIKE', `%${search_key}%`)
          .orWhere('name', 'LIKE', `%${search_key}%`)
          .orWhere('phone', 'LIKE', `%${search_key}%`)
          .orWhere('email', 'LIKE', `%${search_key}%`)
      })
    }

    return query
      .preload('primaryContact', (query) => {
        query.select('name', 'phone')
      })
      .preload('country', (query) => {
        query.select('name')
      })
      .whereNull('deleted_at')
      .select(
        'id',
        'name',
        'created_at',
        'email',
        'phone',
        'contact_id',
        'country_id',
        'completed_check_list',
        'total_check_list',
        'stage_completed_task',
        'stage',
        'stage_total_task',
        'stage_completed_task',
        'status',
        'first_name',
        'last_name'
      )
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

    if (user.role) from = moment(new Date(from)).startOf('day').format('YYYY-MM-DD HH:mm:ss')
    to = moment(new Date(to)).endOf('day').format('YYYY-MM-DD HH:mm:ss')

    let assignCondition = user.role.slug !== 'admin' ? `and contact_id = ${user.id}` : ``


    const [[stats]] = await Database.rawQuery(`
    SELECT
      (SELECT count(id) from  students where created_at >= '${from}' and created_at <= '${to}' and deleted_at IS NULL ${assignCondition}) as total_students,
      (SELECT count(id) from students where created_at >= '${from}' and created_at <= '${to}' and status IN('IN_PROGRESS') and  deleted_at IS NULL  ${assignCondition}) as in_progress,
      (SELECT count(id) from students where created_at >= '${from}' and created_at <= '${to}' and status IN('ENROLLED') and  deleted_at IS NULL  ${assignCondition}) as enrolled,
      (SELECT count(id) from students where created_at >= '${from}' and created_at <= '${to}' and status IN('DEFER') and  deleted_at IS NULL  ${assignCondition}) as defer,
      (SELECT count(id) from students where created_at >= '${from}' and created_at <= '${to}' and status IN('HOLD') and  deleted_at IS NULL  ${assignCondition}) as hold
  `)

    return stats
  }

  static archiveListing(request, user) {
    const {
      page = 1,
      search_key = '',
      created_from = '',
      created_to = '',
      country_id = '',
      stage = '',
      contact_id = '',
      status = ''
    } = request.qs()
    const limit = 10
    let query = this.query()

    if (user.role.slug !== 'admin') {
      query = query.where('contact_id', '=', user.id)
    }
    if (created_from && created_to) {
      query = query.where('created_at', '>=', created_from).where('created_at', '<=', created_to)
    }

    if (country_id) {
      query = query.where('country_id', '=', country_id)
    }

    if (stage) {
      query = query.where('stage', '=', stage)
    }

    if (contact_id) {
      query = query.where('contact_id', '=', contact_id)
    }

    if (status) {
      query = query.where('status', '=', status)
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
      .preload('primaryContact', (query) => {
        query.select('name', 'phone')
      })
      .preload('country', (query) => {
        query.select('name')
      })
      .whereNotNull('deleted_at')
      .select(
        'id',
        'name',
        'created_at',
        'email',
        'phone',
        'contact_id',
        'country_id',
        'completed_check_list',
        'total_check_list',
        'stage_completed_task',
        'stage',
        'stage_total_task',
        'stage_completed_task',
        'status'
      )
      .orderBy('id', 'desc')
      .paginate(page, limit)
  }
}
