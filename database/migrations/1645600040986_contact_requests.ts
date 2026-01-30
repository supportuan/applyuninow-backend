import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ContactRequests extends BaseSchema {
  protected tableName = 'contact_requests'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 100)
      table.string('email', 225)
      table.string('phone', 20)
      table.boolean('is_contacted').defaultTo(false)
      table.string('destination', 100)
      table.string('level', 100)
      table.string('industry', 100)
      table.string('intake', 100)
      table.timestamps(false)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
