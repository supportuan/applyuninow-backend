import { DateTime } from 'luxon'
import {
  BelongsTo,
  belongsTo,
  column
} from '@ioc:Adonis/Lucid/Orm'
import Model from './Model'
//import Country from './Country'
import University from './University'
import StudyIndustry from './StudyIndustry'
import StudyArea from './StudyArea'
//import Database from '@ioc:Adonis/Lucid/Database'
//import moment from 'moment'

export default class CourseList extends Model {
  @column({ isPrimary: true })
  public ID: number

  @column()
  public COURSE_NAME: string

  @column()
  public INTAKES: string
  
  @column()
  public APPLICATION_FEE: string

  @column()
  public TUITION_FEE: string

  @column()
  public DURATION: string

  @column()
  public PTE: string

  @column()
  public IELTS: string

  @column()
  public TOEFL: number

  @column()
  public DET: number

  @column()
  public  GRE_ACT: string

  @column()
  public GMAT_SAT: number

  @column()
  public COURSE_LEVEL: number

  @column({ consume: value => value ?? null })
  public INDUSTRY_ID: number | null

  @column({ consume: value => value ?? null })
  public SUBJECT_AREA_ID: number | null

  @column({ columnName: 'university_id' })
  public universityId: number | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public deleted_at: string | null

  @belongsTo(() => University, {
    foreignKey: 'universityId',
  })
  public university: BelongsTo<typeof University>
  
  @belongsTo(() => StudyIndustry, {
    foreignKey: 'INDUSTRY_ID',
  })
  public study_industry: BelongsTo<typeof StudyIndustry>

  @belongsTo(() => StudyArea, {
    foreignKey: 'SUBJECT_AREA_ID',
  })
  public study_area: BelongsTo<typeof StudyArea>

 
  static listing(request) {
    //console.log(request.qs())
    // filters
     const {
      page = 1,
      course_name = '',
      INTAKES = '',
      APPLICATION_FEE = '',
      TUITION_FEE = '',
      country_id = '',
      university_name='',
      INDUSTRY_ID='',
      SUBJECT_AREA_ID='',
      COURSE_LEVEL='',
      city='',
      university_type='',
      english_test = '',
      english_test_value = '',
      adaptive_test = '',
      adaptive_test_value = ''
      
    } = request.requestData.filters
    
    console.log(request.requestData)
    
    const limit = 10
    let query = this.query()
 
    if (course_name) {
      query = query.where('COURSE_NAME', 'LIKE', `%${course_name}%`)
    }

    if (INTAKES) {
      query = query.where('INTAKES', 'LIKE', `%${INTAKES}%`)
    }

    if (APPLICATION_FEE) {
      const rangeArrayA = APPLICATION_FEE.split("-").map(Number);
      //query = query.where('APPLICATION_FEE', 'LIKE', `%${APPLICATION_FEE}%`)
      query = query.whereRaw(
	    "CAST(REGEXP_REPLACE(APPLICATION_FEE, '[^0-9]', '') AS UNSIGNED) BETWEEN ? AND ?", rangeArrayA
	    ) // like [100, 500]
    }
    
    if (TUITION_FEE) {
    	const rangeArrayT = TUITION_FEE.split("-").map(Number);
        //query = query.where('TUITION_FEE', 'LIKE', `%${TUITION_FEE}%`)
        query = query.whereRaw(
    	  "CAST(REGEXP_REPLACE(TUITION_FEE, '[^0-9]', '') AS UNSIGNED) BETWEEN ? AND ?", rangeArrayT
       ) // like [100, 500]

    }
    
    if (INDUSTRY_ID && INDUSTRY_ID !== '' && INDUSTRY_ID !== '0') {
      const industryIdNum = parseInt(INDUSTRY_ID, 10);
      if (!isNaN(industryIdNum) && industryIdNum > 0) {
        query = query.where('INDUSTRY_ID', '=', industryIdNum)
      }
    }
    
    if (SUBJECT_AREA_ID && SUBJECT_AREA_ID !== '' && SUBJECT_AREA_ID !== '0') {
      const subjectAreaIdNum = parseInt(SUBJECT_AREA_ID, 10);
      if (!isNaN(subjectAreaIdNum) && subjectAreaIdNum > 0) {
        query = query.where('SUBJECT_AREA_ID', '=', subjectAreaIdNum)
      }
    }
    
    if (COURSE_LEVEL) {
      query = query.where('COURSE_LEVEL', '=', COURSE_LEVEL)
    }
    
    if (english_test && english_test_value) {
      query = query.where('english_test', 'LIKE', `%${english_test_value}%`)
    }
    
    if (adaptive_test && adaptive_test_value) {
      let adaptivetest1 = 'GMAT_SAT';
      if(adaptivetest1=='GRE_ACT') adaptivetest1 = 'GRE_ACT'; 
      query = query.where(adaptivetest1, 'LIKE', `%${adaptive_test_value}%`)
    }
    
    // university
    if (university_name) {
      const universityName = university_name
      query = query.whereHas('university', (subQuery) => {
        subQuery.where('name', 'LIKE', `%${universityName}%`)
      })
    }

    if (city) {
      const universitycity = city
      query = query.whereHas('university', (subQuery) => {
        subQuery.where('city', 'LIKE', `%${universitycity}%`)
      })
    }

    if (university_type) {
      const universityType = university_type
      query = query.whereHas('university', (subQuery) => {
        subQuery.where('university_type', 'LIKE', `%${universityType}%`)
      })
    }   
    
    if(country_id) {
      const countryID = country_id
      query = query.whereHas('university', (univQuery) => {
        univQuery.whereHas('country', (countryQuery) => {
          countryQuery.where('id', '=', countryID)
        })
      })
    }
    // end university

   // sorting
   const {
      University_Name_order = '',
      TUITION_FEE_ORDER = '',
      APPLICATION_FEE_ORDER = '',
    } = request.requestData.order
    
    const orderLength = Object.keys(request.requestData.order).length;

    if(orderLength>0){
	    if (University_Name_order) {     console.log('111')
	      query = query.orderBy('COURSE_NAME', University_Name_order)
	    }
	    if (TUITION_FEE_ORDER) {     console.log('22')
	      //query = query.orderBy('TUITION_FEE', TUITION_FEE_ORDER)
	      query = query.orderByRaw("CAST(REGEXP_REPLACE(TUITION_FEE, '[^0-9]', '') AS UNSIGNED) "+TUITION_FEE_ORDER);
	    }
	    if (APPLICATION_FEE_ORDER) {     console.log('33')
	      //query = query.orderBy('APPLICATION_FEE', APPLICATION_FEE_ORDER)
	      query = query.orderByRaw("CAST(REGEXP_REPLACE(APPLICATION_FEE, '[^0-9]', '') AS UNSIGNED) "+APPLICATION_FEE_ORDER);
	    }
    }else{
    	   query = query.orderBy('COURSE_NAME', 'asc')
    }
    
    
    return query
       
      
      .whereNull('deleted_at')
      .select(
        'COURSE_NAME','INTAKES','APPLICATION_FEE','TUITION_FEE','DURATION','PTE','IELTS','TOEFL',
        'DET','GRE_ACT','GMAT_SAT','COUNTRY','COURSE_LEVEL','INDUSTRY_ID', 'SUBJECT_AREA_ID', 'university_id'
      )
      .preload('study_industry', (query) => {
        query.select('id', 'name')
      })
      .preload('study_area', (query) => {
        query.select('id', 'name')
      })
      .preload('university', (query) => {
        query.preload('country', (subquery) => {
          subquery.select('id', 'name', 'currency')
        }).select('id','name','country_id','city','news_ranking','webometrics_national_ranking','webometrics_world_ranking','qs_ranking','percentage_of_international_students','acceptance_rate','university_type','logo')
      })
      .paginate(page, limit)
  }

}
