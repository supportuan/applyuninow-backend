import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Country from 'App/Models/Country'

export default class CountryListSeeder extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await Country.createMany([
      {
        name: 'GERMANY',
      },
      {
        name: 'ITALY',
      },
      {
        name: 'NETHERLANDS',
      },
      {
        name: 'NEW ZEALAND',
      },
      {
        name: 'IRELAND',
      },
      {
        name: 'SINGAPORE',
      },
      {
        name: 'AUSTRALIA',
      },
      {
        name: 'FRANCE',
      },
      {
        name: 'SPAIN',
      },
    ])
  }
}
