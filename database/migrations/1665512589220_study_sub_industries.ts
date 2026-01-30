import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class StudySubIndustries extends BaseSchema {
  protected tableName = 'study_sub_industries'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 100)
      table
        .integer('industry_id')
        .unsigned()
        .references('id')
        .inTable('study_industries')
        .nullable()

      table.timestamp('deleted_at', { useTz: true }).nullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
