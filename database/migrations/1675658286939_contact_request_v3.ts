import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ContactRequests extends BaseSchema {
  protected tableName = 'contact_requests'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.string('study_attendance_type', 100).nullable()
      table.string('type_of_degree', 100).nullable()
      table.string('work_experince', 100).nullable()
      table.string('rec_level_academic', 100).nullable()
      table.string('pre_study_loc', 100).nullable()
      table.json('education_details').nullable()
      table.json('asst_exam_sections').nullable()
      table.boolean('enable_email_notification').defaultTo(0)
      table.integer('assigned_by').unsigned().references('id').inTable('users').nullable()
      table.integer('assigned_to').unsigned().references('id').inTable('users').nullable()
      table.timestamp('assigned_on', { useTz: true }).nullable()
      table.string('status', 50).nullable()
      table.string('source', 50).nullable()
      table.boolean('is_reassign_req').defaultTo(false)
      table.dateTime('callback_time').nullable()
      table.integer('created_by').unsigned().references('id').inTable('users').nullable()
      table.string('re_assign_notes').nullable()
      table.timestamp('re_assign_date').nullable()
    })
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumns(
        'study_attendance_type',
        'education_details',
        'asst_exam_sections',
        'enable_email_notification',
        'assigned_by',
        'status',
        'source',
        'assigned_to',
        'is_reassign_req',
        'callback_time',
        'created_by',
        're_assign_notes',
        're_assign_date'
      )
    })
  }
}
