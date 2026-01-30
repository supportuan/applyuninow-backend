import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Students extends BaseSchema {
  protected tableName = 'students'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.json('steps_timestamp').nullable()
      table.integer('lead_id').unsigned().references('id').inTable('contact_requests').nullable()
    })
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumns('steps_timestamp', 'lead_id')
    })
  }
}
