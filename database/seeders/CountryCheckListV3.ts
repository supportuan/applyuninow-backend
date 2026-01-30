import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import CountryChecklist from 'App/Models/CountryChecklist'

export default class CountryCheckListV3Seeder extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await CountryChecklist.createMany([
      {
        country_id: 2,
        check_list_id: 65,
      },
      {
        country_id: 2,
        check_list_id: 66,
      },
      {
        country_id: 2,
        check_list_id: 67,
      },
      {
        country_id: 2,
        check_list_id: 68,
      },
      {
        country_id: 2,
        check_list_id: 69,
      },
      {
        country_id: 2,
        check_list_id: 70,
      },
      {
        country_id: 2,
        check_list_id: 71,
      },
      {
        country_id: 2,
        check_list_id: 79,
      },
      {
        country_id: 2,
        check_list_id: 80,
      },
      {
        country_id: 2,
        check_list_id: 81,
      },
      {
        country_id: 2,
        check_list_id: 82,
      },
      {
        country_id: 2,
        check_list_id: 72,
      },
      {
        country_id: 2,
        check_list_id: 73,
      },
      {
        country_id: 2,
        check_list_id: 75,
      },
      {
        country_id: 1,
        check_list_id: 83,
      },
      {
        country_id: 1,
        check_list_id: 84,
      },
      {
        country_id: 1,
        check_list_id: 85,
      },
      {
        country_id: 1,
        check_list_id: 86,
      },
      {
        country_id: 1,
        check_list_id: 87,
      },
      {
        country_id: 1,
        check_list_id: 88,
      },
      {
        country_id: 1,
        check_list_id: 79,
      },
      {
        country_id: 1,
        check_list_id: 80,
      },
      {
        country_id: 1,
        check_list_id: 81,
      },
      {
        country_id: 1,
        check_list_id: 82,
      },

      {
        country_id: 1,
        check_list_id: 75,
      },

      {
        country_id: 1,
        check_list_id: 74,
      },

      {
        country_id: 1,
        check_list_id: 76,
      },

      {
        country_id: 3,
        check_list_id: 93,
      },
      {
        country_id: 3,
        check_list_id: 94,
      },
      {
        country_id: 3,
        check_list_id: 95,
      },
      {
        country_id: 3,
        check_list_id: 96,
      },
      {
        country_id: 3,
        check_list_id: 97,
      },
      {
        country_id: 3,
        check_list_id: 98,
      },
      {
        country_id: 3,
        check_list_id: 99,
      },
      {
        country_id: 3,
        check_list_id: 100,
      },

      {
        country_id: 3,
        check_list_id: 89,
      },
      {
        country_id: 3,
        check_list_id: 90,
      },
      {
        country_id: 3,
        check_list_id: 91,
      },
      {
        country_id: 3,
        check_list_id: 92,
      },

      {
        country_id: 3,
        check_list_id: 79,
      },

      {
        country_id: 3,
        check_list_id: 80,
      },

      {
        country_id: 3,
        check_list_id: 81,
      },
      {
        country_id: 3,
        check_list_id: 82,
      },

      {
        country_id: 3,
        check_list_id: 75,
      },

      {
        country_id: 3,
        check_list_id: 77,
      },

      {
        country_id: 3,
        check_list_id: 78,
      },
    ])
  }
}
