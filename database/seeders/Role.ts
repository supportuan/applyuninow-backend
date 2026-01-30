import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Role from 'App/Models/Role'

export default class RoleSeeder extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await Role.createMany([
      {
        name: 'Admin',
        slug: 'admin',
      },
      {
        name: 'Executive',
        slug: 'executive',
      },
      {
        name: 'Agent',
        slug: 'agent',
      },
      {
        name: 'Student',
        slug: 'student',
      },
    ])
  }
}
