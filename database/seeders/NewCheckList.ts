import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import CountryChecklist from 'App/Models/CountryChecklist'

export default class NewCheckListSeeder extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await CountryChecklist.createMany([
      {
        country_id: 1,
        check_list_id: 47,
      },
      {
        country_id: 2,
        check_list_id: 47,
      },
      {
        country_id: 2,
        check_list_id: 7,
      },
      {
        country_id: 3,
        check_list_id: 7,
      },
      {
        country_id: 2,
        check_list_id: 8,
      },
      {
        country_id: 3,
        check_list_id: 47,
      },
      {
        country_id: 1,
        check_list_id: 6,
      },
      {
        country_id: 1,
        check_list_id: 9,
      },
      {
        country_id: 1,
        check_list_id: 54,
      },
      {
        country_id: 1,
        check_list_id: 55,
      },
      {
        country_id: 1,
        check_list_id: 56,
      },
      {
        country_id: 1,
        check_list_id: 57,
      },
      {
        country_id: 1,
        check_list_id: 48,
      },
      {
        country_id: 1,
        check_list_id: 49,
      },
      {
        country_id: 1,
        check_list_id: 50,
      },
      {
        country_id: 1,
        check_list_id: 51,
      },
      {
        country_id: 2,
        check_list_id: 48,
      },
      {
        country_id: 2,
        check_list_id: 49,
      },
      {
        country_id: 2,
        check_list_id: 50,
      },
      {
        country_id: 2,
        check_list_id: 51,
      },
      {
        country_id: 3,
        check_list_id: 48,
      },
      {
        country_id: 3,
        check_list_id: 49,
      },
      {
        country_id: 3,
        check_list_id: 50,
      },
      {
        country_id: 3,
        check_list_id: 51,
      },
    ])
  }
}
