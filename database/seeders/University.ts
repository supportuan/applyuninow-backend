import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import University from 'App/Models/University'

export default class UniversitySeeder extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await University.createMany([
      {
        name: 'London University',
        country_id: 3,
      },
      {
        name: 'Imperial college of London',
        country_id: 3,
      },
      {
        name: 'London Metropolitan University',
        country_id: 3,
      },
      {
        name: 'University of Greenwich',
        country_id: 3,
      },
      {
        name: 'USA University',
        country_id: 1,
      },
    ])
  }
}
