import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Faqs extends BaseSchema {
  protected tableName = 'faqs'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('country_id').unsigned().references('id').inTable('countries').nullable()
      table.string('query', 200)
      table.string('solution', 500)
      table.timestamp('deleted_at', { useTz: true }).nullable()
      table.timestamps(false)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
