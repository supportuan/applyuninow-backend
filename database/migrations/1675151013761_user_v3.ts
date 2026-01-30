import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.string('emg_contact_name', 100).nullable()
      table.string('emg_contact_phone', 15).nullable()
      table.string('emg_contact_email', 225).nullable()
      table.string('address', 500).nullable()
      table.string('city', 50).nullable()
      table.string('state', 50).nullable()
      table.string('image', 255).nullable()
      table.string('offer_letter', 255).nullable()
      table.string('document_status', 50).defaultTo('PENDING')
      table.json('kyc_documents').nullable()
      table.enum('user_type', [1, 2, 3]).defaultTo(1) // 1 INTERNAL USERS, 2 EXTERNAL USERS, 3 STUDENTS
    })
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumns(
        'emg_contact_name',
        'emg_contact_phone',
        'emg_contact_email',
        'address',
        'city',
        'state',
        'image',
        'offer_letter',
        'document_status',
        'kyc_documents',
        'user_type'
      )
    })
  }
}
