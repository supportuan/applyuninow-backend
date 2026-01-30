import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.boolean('active').defaultTo(1)
      table.boolean('is_super_admin').defaultTo(0)
      table.boolean('first_time').defaultTo(0)
      table.integer('role_id').unsigned().references('id').inTable('roles').nullable()
      table.string('token', 1000).nullable()
    })
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumns('status', 'is_super_admin', 'first_time', 'role_id', 'token')
    })
  }
}
