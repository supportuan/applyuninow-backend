import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Countries extends BaseSchema {
  protected tableName = 'countries'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.string('symbol', 5)
      table.string('currency', 10)
    })
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumns('symbol', 'currency')
    })
  }
}
