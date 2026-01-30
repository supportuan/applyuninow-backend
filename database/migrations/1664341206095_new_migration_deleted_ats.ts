import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class StudyIndustries extends BaseSchema {
  protected tableName = 'study_industries'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.timestamp('deleted_at', { useTz: true }).nullable()
    })
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('deleted_at')
    })
  }
}
