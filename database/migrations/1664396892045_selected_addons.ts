import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AdditionalServices extends BaseSchema {
  protected tableName = 'additional_services'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.string('selected_service')
      table.string('notes')
    })
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumns('selected_service', 'notes')
    })
  }
}
