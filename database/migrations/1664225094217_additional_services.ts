import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AdditionalServices extends BaseSchema {
  protected tableName = 'additional_services'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('first_name', 100)
      table.string('last_name', 100)
      table.string('email', 225)
      table.string('phone', 20)
      table.string('alternate_phone', 20)
      table.boolean('is_contacted').defaultTo(false)
      table.string('dob', 100)
      table.string('gender', 10)
      table.string('passport_no', 100)
      table.string('present_status', 100)
      table.json('images')
      table.timestamps(false)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
