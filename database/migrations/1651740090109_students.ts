import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Students extends BaseSchema {
  protected tableName = 'students'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 100)
      table.string('email', 225)
      table.string('phone', 20)
      table.string('level', 100)
      table.string('industry', 100)
      table.string('intake', 100)
      table.specificType('total_check_list', 'tinyint(20)').unsigned().defaultTo(0)
      table.specificType('completed_check_list', 'tinyint(20)').unsigned().defaultTo(0)
      table.string('stage', 20)
      table.specificType('stage_total_task', 'tinyint(20)').unsigned().defaultTo(0)
      table.specificType('stage_completed_task', 'tinyint(20)').unsigned().defaultTo(0)
      table.integer('country_id').unsigned().references('id').inTable('countries').nullable()
      table.integer('contact_id').unsigned().references('id').inTable('users').nullable()
      table.integer('user_id').unsigned().references('id').inTable('users').nullable()
      table.timestamps(false)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
