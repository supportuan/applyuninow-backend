import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class StudentUniversities extends BaseSchema {
  protected tableName = 'student_universities'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.increments('id')
      table.boolean('is_selected').defaultTo(0)
      table.string('status', 1000).defaultTo('Application Processing')
    })
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumns('is_selected', 'status', 'id')
    })
  }
}
