import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Universities extends BaseSchema {
  protected tableName = 'universities'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.string('city', 100).nullable()
      table.string('location', 100).nullable()
    })
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumns('city', 'location')
    })
  }
}
