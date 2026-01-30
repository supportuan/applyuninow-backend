import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class StudentsUniversities extends BaseSchema {
  protected tableName = 'student_universities'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('student_id').unsigned().references('id').inTable('students')
      table.integer('university_id').unsigned().references('id').inTable('universities')
      table.string('value', 500)
      table.timestamp('updated_at', { useTz: true }).nullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
