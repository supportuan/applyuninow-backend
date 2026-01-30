import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class StudentUniversities extends BaseSchema {
  protected tableName = 'student_universities'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.string('offer_intake', 100).nullable()
      table.string('course_link').nullable()
      table.boolean('defer').defaultTo(0)
    })
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumns('offer_intake', 'course_link', 'defer')
    })
  }
}
