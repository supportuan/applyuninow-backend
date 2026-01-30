import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Country from 'App/Models/Country'

export default class NewCountrySeeder extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await Country.createMany([
      {
        name: 'AUSTRALIA',
      },
      {
        name: 'IRELAND',
      },
      {
        name: 'GERMANY',
      },
      {
        name: 'SWITZERLAND',
      },
      {
        name: 'SINGAPORE',
      },
      {
        name: 'NEW ZEALAND',
      },
      {
        name: 'UAE',
      },
    ])
  }
}
