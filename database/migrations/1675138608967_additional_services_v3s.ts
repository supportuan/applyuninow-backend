import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AdditionalServices extends BaseSchema {
  protected tableName = 'additional_services'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.timestamp('call_back_time', { useTz: true }).nullable()
      table.string('status', 100).defaultTo('NOT_CONTACTED')
      table.timestamp('deleted_at', { useTz: true }).nullable()
      table.integer('country_id').unsigned().references('id').inTable('countries').nullable()
    })
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumns('call_back_time', 'status', 'deleted_at', 'country_id')
    })
  }
}
