import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Pages extends BaseSchema {
  protected tableName = 'pages'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 200)
      table.string('title', 200)
      table.string('page_slug', 200)
      table.string('MetaTitle', 200)
      table.string('MetaKeywords', 200)
      table.string('MetaDescription', 200)
      table.string('page_content', 200)
      table.integer('status', 200)
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
