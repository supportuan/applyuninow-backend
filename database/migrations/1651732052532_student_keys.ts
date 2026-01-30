import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ContactRequests extends BaseSchema {
  protected tableName = 'contact_requests'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.boolean('is_student').defaultTo(0)
    })
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('is_student')
    })
  }
}
