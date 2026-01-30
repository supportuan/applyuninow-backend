import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CheckLists extends BaseSchema {
  protected tableName = 'check_lists'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 100)
      table.enum('type', [
        'Gathering Checklist',
        'University Application',
        'Pre-CAS Process',
        'Financial Evidence',
        'Visa Application',
        'Pre Requisite',
        'After I-20',
      ])
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
