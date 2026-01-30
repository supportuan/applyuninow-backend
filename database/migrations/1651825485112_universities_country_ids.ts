import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Universities extends BaseSchema {
  protected tableName = 'universities'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.integer('country_id').unsigned().references('id').inTable('countries').nullable()
    })
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('country_id')
    })
  }
}
