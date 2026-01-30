import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Students extends BaseSchema {
  protected tableName = 'students'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.boolean('is_enrolled').defaultTo(false)
    })
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('is_enrolled')
    })
  }
}
