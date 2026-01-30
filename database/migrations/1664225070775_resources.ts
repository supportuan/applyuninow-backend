import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Resources extends BaseSchema {
  protected tableName = 'resources'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 100)
      table.string('url')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
