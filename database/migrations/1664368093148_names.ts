import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Students extends BaseSchema {
  protected tableName = 'students'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.string('first_name', 100)
      table.string('last_name', 100)
      table
        .integer('industry_id')
        .unsigned()
        .references('id')
        .inTable('study_industries')
        .nullable()
      table.integer('study_area_id').unsigned().references('id').inTable('study_areas').nullable()
    })
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumns('industry_id', 'study_area_id', 'first_name', 'last_name')
    })
  }
}
