import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ContactRequests extends BaseSchema {
  protected tableName = 'contact_requests'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.integer('reassign_req_id').unsigned().references('id').inTable('users').nullable()
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('reassign_req_id')
    })
  }
}
