import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UserPayslips extends BaseSchema {
  protected tableName = 'user_payslips'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .notNullable()
      table.string('payslip_url', 255).notNullable()
      table.timestamp('payslip_month', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
