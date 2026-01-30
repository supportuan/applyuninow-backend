import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Resources extends BaseSchema {
  protected tableName = 'resources'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.enum('user_type', [1, 2]).defaultTo(1) // 1 INTERNAL USERS  2.STUDENTS
      table.string('slug', 200).notNullable().unique()
      table.string('folder_image').nullable()
    })
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumns('user_type', 'slug')
    })
  }
}
