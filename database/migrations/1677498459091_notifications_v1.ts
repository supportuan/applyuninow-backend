import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Notifications extends BaseSchema {
  protected tableName = 'notifications'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.string('navigation_id', 100)
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('navigation_id')
    })
  }
}
