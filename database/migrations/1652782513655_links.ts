import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class StudentChecklists extends BaseSchema {
  protected tableName = 'student_checklists'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.string('link_url', 1000).nullable()
    })
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('link_url')
    })
  }
}
