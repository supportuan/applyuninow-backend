import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ContactRequests extends BaseSchema {
  protected tableName = 'contact_requests'

  public async up() {
    this.schema.table(this.tableName, (table) => {
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
      table.dropColumns('industry_id', 'study_area_id')
    })
  }
}
