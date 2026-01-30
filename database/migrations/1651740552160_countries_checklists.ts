import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CountryChecklists extends BaseSchema {
  protected tableName = 'country_checklists'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('country_id').unsigned().references('id').inTable('countries').nullable()
      table.integer('check_list_id').unsigned().references('id').inTable('check_lists').nullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
