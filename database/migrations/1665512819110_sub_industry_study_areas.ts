import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class StudyAreas extends BaseSchema {
  protected tableName = 'study_areas'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table
        .integer('sub_industry_id')
        .unsigned()
        .references('id')
        .inTable('study_sub_industries')
        .nullable()
    })
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('sub_industry_id')
    })
  }
}
