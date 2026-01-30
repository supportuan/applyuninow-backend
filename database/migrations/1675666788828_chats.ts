import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Chats extends BaseSchema {
  protected tableName = 'chats'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('application_id').unsigned().references('id').inTable('students')
      table.integer('author_id').unsigned().references('id').inTable('users')
      table.json('attatchments').nullable()
      table.text('message')
      table.boolean('read').defaultTo(false)
      table.timestamps(false)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
