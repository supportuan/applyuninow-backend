import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class StudentsChecklists extends BaseSchema {
  protected tableName = 'student_checklists'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('student_id').unsigned().references('id').inTable('students')
      table.integer('check_list_id').unsigned().references('id').inTable('check_lists')
      table.string('value', 500)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
