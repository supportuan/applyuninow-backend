import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Universities extends BaseSchema {
  protected tableName = 'universities'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.string('logo', 255).nullable()
    })
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('logo')
    })
  }
}
