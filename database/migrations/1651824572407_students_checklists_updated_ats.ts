import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class StudentsChecklists extends BaseSchema {
  protected tableName = 'student_checklists'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.timestamp('updated_at', { useTz: true }).nullable()
    })
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('updated_at')
    })
  }
}
