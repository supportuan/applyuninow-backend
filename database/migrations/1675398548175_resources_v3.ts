import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Resources extends BaseSchema {
  protected tableName = 'resources'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.integer('parent_id').unsigned().references('id').inTable('resources').nullable()
      table.boolean('is_folder').defaultTo(false)
      table.string('url').alter().nullable()
    })
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumns('parent_id', 'deleted_at', 'is_folder', 'url')
    })
  }
}
