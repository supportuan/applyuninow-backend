import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Country from 'App/Models/Country'

export default class CountrySeeder extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await Country.createMany([
      {
        name: 'UNITED STATES OF AMERICA',
      },
      {
        name: 'UNITED KINGDOM',
      },
      {
        name: 'CANADA',
      },
    ])
  }
}
