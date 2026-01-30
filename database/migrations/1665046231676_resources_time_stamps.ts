import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Resources extends BaseSchema {
  protected tableName = 'resources'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.timestamp('deleted_at', { useTz: true }).nullable()
      table.timestamps(false)
    })
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('deleted_at')
    })
  }
}
