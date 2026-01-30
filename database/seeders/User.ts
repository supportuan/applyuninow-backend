import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public static developmentOnly = true
  public async run() {
    // Write your database queries inside the run method
    await User.createMany([
      {
        name: 'Sandeep',
        email: 'test@scube.me',
        password: 'admin123',
        role_id: 1,
        active: '1',
        is_super_admin: '1',
        first_time: '0',
      },
    ])
  }
}
