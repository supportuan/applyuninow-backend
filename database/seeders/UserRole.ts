import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Role from 'App/Models/Role'

export default class UserRoleSeeder extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await Role.createMany([
      {
        name: 'Counsellor',
        slug: 'counsellor',
      },
      {
        name: 'Manager',
        slug: 'manager',
      },
      {
        name: 'Referral',
        slug: 'referral',
      },
      {
        name: 'Freelancer',
        slug: 'freelancer',
      },
    ])
  }
}
