import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Notifications extends BaseSchema {
  protected tableName = 'notifications'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('receiver_id').unsigned().references('id').inTable('users')
      table.string('message', 100)
      table.boolean('read').defaultTo(false)
      table.boolean('active').defaultTo(true)
      table.enu('category', [1, 2, 3]).defaultTo(1) // 1 = Leads , 2 = Application , 3 = chat
      table.timestamps(false)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
