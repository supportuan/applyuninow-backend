import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Students extends BaseSchema {
  protected tableName = 'students'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.string('intake_month', 10)
      table.string('intake_year', 4)
    })
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumns('intake_month', 'intake_year')
    })
  }
}
