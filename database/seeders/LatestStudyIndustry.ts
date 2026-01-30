import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import StudyIndustry from 'App/Models/StudyIndustry'

export default class LatestStudyIndustrySeeder extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await StudyIndustry.createMany([
      { name: 'Agriculture &Forestry' },
      { name: 'Arts, Design & Architecture' },
      { name: 'Applied Science & Professions' },
      { name: 'Business & Management' },
      { name: 'Computer Science & IT' },
      { name: 'Education & Training' },
      { name: 'Engineering & Technology' },
      { name: 'Environmental Studies & Earth Sciences' },
      { name: 'Hospitality, Leisure & Sports' },
      { name: 'Humanities, Journalism, Media & Law' },
      { name: 'Medicine & Health' },
      { name: 'Natural Sciences & Mathematics' },
      { name: 'Social Sciences' },
    ])
  }
}
