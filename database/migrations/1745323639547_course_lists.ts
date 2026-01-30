import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CourseLists extends BaseSchema {
  protected tableName = 'course_lists'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('INDUSTRY_ID').unsigned().references('id').inTable('study_industries').nullable()
      table.integer('SUBJECT_AREA_ID').unsigned().references('id').inTable('study_areas').nullable()
      table.integer('universityId').unsigned().references('id').inTable('universities').nullable()
      table.string('COURSE_NAME', 300)
      table.string('INTAKES', 100)
      table.string('APPLICATION_FEE', 100)
      table.string('TUITION_FEE', 100)
      table.string('DURATION', 100)
      table.string('PTE', 100)
      table.string('IELTS', 100)
      table.string('TOEFL', 100)
      table.string('DET', 100)
      table.string('GRE_ACT', 100)
      table.string('GMAT_SAT', 100)
      table.string('COURSE_LEVEL', 100)
      table.timestamp('deleted_at', { useTz: true }).nullable()
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
