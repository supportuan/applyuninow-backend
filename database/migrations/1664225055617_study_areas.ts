import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class StudyAreas extends BaseSchema {
  protected tableName = 'study_areas'

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
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
