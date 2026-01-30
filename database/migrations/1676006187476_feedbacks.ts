import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Feedbacks extends BaseSchema {
  protected tableName = 'feedbacks'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('student_id').unsigned().references('id').inTable('students')
      table.integer('rating', 2).unsigned()
      table.text('feedback')
      table.timestamps(false)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
