import ContactRequest from 'App/Models/ContactRequest'
import Country from 'App/Models/Country'
import Notification from 'App/Models/Notification'
import StudyArea from 'App/Models/StudyArea'
import StudyIndustry from 'App/Models/StudyIndustry'
import User from 'App/Models/User'
import { sendLeadConfirmationEmail } from 'App/Helpers/helpers'
import Logger from '@ioc:Adonis/Core/Logger'
import moment from 'moment'

const Validator = require('validatorjs')

export default class ContactRequestController {
  /**
   *  constants for
   * @param request
   * @param response
   */
  public async prerequisite({ response }) { 
    let countries = await Country.dropdown()
    let study_industry = await StudyIndustry.dropdown()
    let study_area = await StudyArea.dropdown()

    const data = {
      study_destination: countries,
      study_industry: study_industry,
      study_level: [
        {id:'UG', name:'Under Graduation'},
        {id:'PG', name:'Post Graduation'},
        {id:'Pathway Programs', name:'Pathway Programs'},
        {id:'English Language Program', name:'English Language Program'},
        {id:'PG Diploma / Certificate', name:'PG Diploma / Certificate'},
        {id:'UG + PG (Accelerated Degree)', name:'UG + PG (Accelerated Degree)'},
        {id:'Online Program / Distance Learning', name:'Online Program / Distance Learning'},
        {id:'Foundation', name:'Foundation'},
        {id:'PhD', name:'PhD'}
      ],
      intake_month: ["January", "February", "March", "April", "May", "June",
  			"July", "August", "September", "October", "November", "December"],
      intake_year: [
        new Date().getFullYear(),
        new Date().getFullYear() + 1,
        new Date().getFullYear() + 2,
        new Date().getFullYear() + 3,
      ],
      university_type: [
      	"Public",
      	"Private"
      ],
      english_test: [
        'PTE',
        'IELTS',
        'TOEFL',
        'DET',
      ],
      adaptive_test: [
        'GRE/ACT',
        'GMAT/SAT',
      ],
      study_area: study_area,
      type_of_degree: [
        'BSC - Bachelor of Science',
        'BA - Bachelor of Arts',
        'BL - Bachelor of Laws',
        'BE - Bachelor of Engineering',
        'BBA - Bachelor of Business Administration',
        'Associate Degree',
        'Academy Profession',
        'Advanced Diploma',
        'Joint Programs',
      ],
      study_durations: [
        'Undergraduation 3 Years',
        'Under Graduatuion 4 Years',
        'Under Graduation 4+ Years',
        'Diploma',
        'Post Graduation 1 Year',
        'Post Graduation 2 Year',
      ],
      years_of_experience: ['1 Year', '2 Years', '3 Years', '4 Years', '5 Years', '5+ Years'],
      type_of_degree_category: [
        {
          name: 'Post Graduation',
          options: [
            'MSc - Master of Science',
            'M.Ph - Master of Philosophy',
            'MBA - Masters of Business Administration',
            'PhD - Doctor of Philosophy',
            'Doctorate - Academics  General',
            'MA - Master of Arts',
            'Postgraduate certificate',
            'Graduate diploma',
            'M.Res - Master of Research',
            'M.Ed - Master of Education',
            'LLM - Master of Laws',
            'M.Arch - Master of Architecture',
            'Postgraduate Certificate in Education',
            'MEng- Master of Engineering',
            'MEM - Masters of Engineering Management',
            'MFA - Master of Fine Arts',
            'MSW - Master of Social Work',
            'Master of Business',
            'M.D. - Doctor of Medicine',
            'M.Fin/MiF/MFiN - Master of Finance',
          ],
        },
        {
          name: 'Under Graduation',
          options: [
            'BSC - Bachelor of Science',
	    'BA - Bachelor of Arts',
	    'BL - Bachelor of Laws',
	    'BE - Bachelor of Engineering',
	    'BBA - Bachelor of Business Administration',
	    'Associate Degree',
	    'Academy Profession',
	    'Advanced Diploma',
	    'Joint Programs',
          ],
        },
        {
          name: 'Summer Programs',
          options: [],
        },
        {
          name: 'Diploma',
          options: [],
        },
        {
          name: 'Pre Masters',
          options: [],
        },
        {
          name: 'DBA(Doctorate of Business Administration)',
          options: [],
        },
        {
          name: 'PhD(Doctor of Philosophy)',
          options: [],
        },
      ],
    }
    return response.json(data)
  }

  /**
   *  constants for
   * @param request
   * @param response
   */
  public async getStudyArea({ request, response }) {
    let industry_id = request.qs().industry_id
    let sub_industry_id = request.qs().sub_industry_id
    let search_key = request.qs().search_key

    let query = StudyArea.query()

    if (sub_industry_id) {
      query = query.where('sub_industry_id', sub_industry_id)
    }

    if (search_key) {
      query = query.where('name', 'LIKE', `%${search_key}%`)
    }
    let list = await query.
    where('industry_id', industry_id)
    .whereNull('deleted_at').orderBy('name', 'asc')
    return response.json(list)
  }


  async contactRequest({ request, response }) {
    try {
      const rules = {
        email: 'required|max:150|email',
        first_name: 'required|max:100',
        last_name: 'required|max:100',
        phone: 'required|max:10|min:10',
        level: 'required|max:200',
        country_id: 'required|max:200',
        industry_id: 'required|max:200',
        intake_month: 'required|max:200',
        intake_year: 'required|max:200',
      }

      const validation = new Validator(request.all(), rules)
      if (validation.fails()) {
        return response.badRequest(validation.errors.errors)
      }

      const payload = request.body()
      await ContactRequest.create({
        email: payload.email,
        name: payload.first_name + ' ' + payload.last_name,
        first_name: payload.first_name,
        last_name: payload.last_name,
        phone: payload.phone,
        level: payload.level,
        country_id: payload.country_id,
        industry: payload.industry,
        intake_month: payload.intake_month,
        intake_year: payload.intake_year,
        industry_id: payload.industry_id || '',
        education_details: [
          {
            passing_year: '',
            medium: '',
            grade: '',
            type: 'SSC',
            label: 'Secondary school Certificate / 10th',
          },
          {
            passing_year: '',
            medium: '',
            grade: '',
            type: 'HSC',
            label: 'Higher Secondary school Certificate / 12th',
          },
          {
            passing_year: '',
            medium: "'",
            start_year: '',
            end_year: '',
            grade: '',
            type: 'UG',
            label: 'Under Graduation',
            ug_type: '',
            backlogs: '',
          },
          {
            passing_year: '',
            medium: '',
            start_year: '',
            end_year: '',
            grade: '',
            type: 'PG',
            label: 'Post Graduation',
            ug_type: '',
            backlogs: '',
          },
        ],
        asst_exam_sections: [],
        status: 'UN_ASSIGNED',
        source: 'website',
      })
      sendLeadConfirmationEmail({
        email: payload.email,
        name: payload.first_name + ' ' + payload.last_name,
        first_name: payload.first_name,
      })
      return response.json({ message: 'Contact request submitted Successfully' })
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }
  /**
   *
   * @param request
   * @param response
   */
  async create({ request, response }) {
    try {
      const rules = {
        email: 'required|max:150|email',
        first_name: 'required|max:100',
        last_name: 'required|max:100',
        phone: 'required|max:10|min:10',
        level: 'required|max:200',
        country_id: 'required|max:200',
        industry_id: 'required|max:200',
        intake_month: 'required|max:200',
        intake_year: 'required|max:200',
        rec_grade_achived: 'max:200',
        rec_level_academic: 'max:200',
        pre_study_loc: 'max:200',
        study_mode: 'max:200',
        study_duration: 'max:200',
        study_budget: 'max:200',
      }

      const validation = new Validator(request.all(), rules)
      if (validation.fails()) {
        return response.badRequest(validation.errors.errors)
      }

      const payload = request.body()
      await ContactRequest.create({
        email: payload.email,
        name: payload.first_name + ' ' + payload.last_name,
        first_name: payload.first_name,
        last_name: payload.last_name,
        phone: payload.phone,
        level: payload.level,
        country_id: payload.country_id,
        industry: payload.industry,
        intake_month: payload.intake_month,
        intake_year: payload.intake_year,
        rec_grade_achived: payload.rec_grade_achived || '',
        rec_level_academic: payload.rec_level_academic || '',
        pre_study_loc: payload.pre_study_loc || '',
        study_mode: payload.study_mode || '',
        study_duration: payload.study_duration || '',
        study_budget: payload.study_budget || '',
        industry_id: payload.industry_id || '',
        study_area_id: payload.study_area_id ? payload.study_area_id : null,
        type_of_degree: payload.type_of_degree || '',
        study_attendance_type: payload.study_attendance_type || '',
        work_experince: payload.work_experince || '',
        enable_email_notification: payload.enable_email_notification || '',
        education_details: payload.education_details ?? [],
        asst_exam_sections: payload.asst_exam_sections ?? [],
        status: 'UN_ASSIGNED',
        source: 'website',
      })
      sendLeadConfirmationEmail({
        email: payload.email,
        name: payload.first_name + ' ' + payload.last_name,
        first_name: payload.first_name,
      })
      return response.json({ message: 'Contact request submitted Successfully' })
    } catch (exception) {
      Logger.error('contact-request create failed: %o', {
        message: exception?.message,
        code: exception?.code,
        sqlMessage: exception?.sqlMessage,
        sqlState: exception?.sqlState,
        stack: exception?.stack,
      })
      return response.internalServerError({
        message: exception?.message || exception?.code || 'Contact request failed',
      })
    }
  }

  /**
   *
   * @param request
   * @param response
   */
  async store({ request, response, auth }) {
    try {
      const rules = {
        email: 'required|max:150|email',
        first_name: 'required|max:100',
        last_name: 'required|max:100',
        phone: 'required|max:10|min:10',
        level: 'required|max:200',
        country_id: 'required|max:200',
        industry_id: 'required|max:200',
        intake_month: 'required',
        intake_year: 'required',
        study_mode: 'max:200',
        study_duration: 'max:200',
        study_budget: 'max:200',
        enable_email_notification: 'required',
      }

      const validation = new Validator(request.all(), rules)
      if (validation.fails()) {
        return response.badRequest(validation.errors.errors)
      }

    
      const payload = request.body()

      let user = await User.query()
      .where('id', auth.user.id)
      .preload('role')
      .first()
      .then((x) => x?.serialize())

      if (user && user.role.slug !== 'admin') {
        payload.assigned_to = user.id
      }
      let lead = await ContactRequest.create({
        email: payload.email,
        name: payload.first_name + ' ' + payload.last_name,
        first_name: payload.first_name,
        last_name: payload.last_name,
        phone: payload.phone,
        level: payload.level,
        country_id: payload.country_id,
        industry: payload.industry,
        intake_month: payload.intake_month,
        intake_year: payload.intake_year,
        study_mode: payload.study_mode || '',
        study_duration: payload.study_duration || '',
        study_budget: payload.study_budget || '',
        industry_id: payload.industry_id || '',
        type_of_degree: payload.type_of_degree || '',
        study_attendance_type: payload.study_attendance_type || '',
        work_experince: payload.work_experince || '',
        enable_email_notification: payload.enable_email_notification || '',
        education_details: payload.education_details,
        asst_exam_sections: payload.asst_exam_sections,
        study_area_id: payload.study_area_id ? payload.study_area_id : null,
        status: payload.assigned_to ? 'ASSIGNED' : 'UN_ASSIGNED',
        source: payload.source || 'others',
        assigned_to: payload.assigned_to || null,
        assigned_on: payload.assigned_to
          ? moment().utcOffset('+05:30').format('YYYY-MM-DD HH:mm:ss')
          : null,
      })

      if (payload.assigned_to && auth && payload.assigned_to != auth.user.id) {
        await Notification.create({
          navigation_id: String(lead.id),
          receiver_id: payload.assigned_to,
          message: `${auth.user.name}  has assigned you the Lead #${lead.id}`,
          category: '1',
          read: false,
          active: true,
        })
      }
      return response.json({ message: 'Contact request submitted Successfully' })
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }

  /**
   * @param request
   * @param response
   */
  async index({ request, response, auth }) {
    try {
      let user: any = await User.query().where('id', auth.user.id).preload('role').first()
      const companies = await ContactRequest.listing(request, user)
      return response.json(companies)
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }

  /**
   * @param auth
   * @param request
   * @param response
   */
  async update({ request, response, auth }) {
    try {
      const { contactrequest } = request
      const payload = request.body()
      ;(contactrequest.email = payload.email),
        (contactrequest.name = payload.first_name + ' ' + payload.last_name),
        (contactrequest.first_name = payload.first_name),
        (contactrequest.last_name = payload.last_name),
        (contactrequest.phone = payload.phone),
        (contactrequest.level = payload.level),
        (contactrequest.country_id = payload.country_id),
        (contactrequest.industry = payload.industry),
        (contactrequest.intake_month = payload.intake_month),
        (contactrequest.intake_year = payload.intake_year),
        (contactrequest.rec_grade_achived = payload.rec_grade_achived || ''),
        (contactrequest.rec_level_academic = payload.rec_level_academic || ''),
        (contactrequest.pre_study_loc = payload.pre_study_loc || ''),
        (contactrequest.study_mode = payload.study_mode || ''),
        (contactrequest.study_duration = payload.study_duration || ''),
        (contactrequest.study_budget = payload.study_budget || ''),
        (contactrequest.industry_id = payload.industry_id || ''),
        (contactrequest.type_of_degree = payload.type_of_degree || ''),
        (contactrequest.study_area_id = payload.study_area_id
          ? payload.study_area_id
          : contactrequest.study_area_id),
        (contactrequest.study_attendance_type = payload.study_attendance_type || ''),
        (contactrequest.work_experince = payload.work_experince || ''),
        (contactrequest.enable_email_notification = payload.enable_email_notification || ''),
        (contactrequest.education_details = payload.education_details),
        (contactrequest.asst_exam_sections = payload.asst_exam_sections),
        (contactrequest.source = payload.source || 'others'),
        await contactrequest.save()

      await contactrequest.log(auth.user, {
        message: `${auth.user.name} updated status the lead`,
        type: 'ACTION',
      })

      return response.json({ message: 'Lead updated Successfully' })
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }

  /**
   * @param auth
   * @param request
   * @param response
   */
  async notesUpdate({ auth, request, response }) {
    try {
      const rules: any = {
        notes: 'required|string|max:1000',
      }
      const validation = new Validator(request.all(), rules)
      if (validation.fails()) {
        return response.badRequest(validation.errors.errors)
      }

      const { contactrequest } = request
      let payload: any = request.body()
      await contactrequest.log(auth.user, { message: payload.notes, type: 'NOTE' })

      return response.json({ message: 'Notes updated Successfully' })
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }

  /**
   * @param auth
   * @param request
   * @param response
   */
  async show({ request, response }) {
    try {
      let contactrequest: any = await ContactRequest.query()
        .preload('country', (query) => {
          query.select('name')
        })
        .preload('user', (query) => {
          query.select('name')
        })
        .preload('assignedBy', (query) => {
          query.select('name')
        })
        .preload('lead_study_area', (query) => {
          query.preload('sub_industry', (q) => q.select('name')).select('name', 'sub_industry_id')
        })
        .preload('study_industry', (query) => {
          query.select('name')
        })
        .where('id', request.param('id'))
        .first()

      contactrequest.logs = await contactrequest.getLogs()
      return response.json(contactrequest)
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }

  /**
   * @param request
   * @param response
   */
  async destroy({ request, response }) {
    try {
      const { contactrequest } = request
      contactrequest['deleted_at'] = moment().utcOffset('+05:30').format('YYYY-MM-DD HH:mm:ss')
      await contactrequest.save()
      return response.json({ message: 'deleted Successfully' })
    } catch (exception) {
      console.log(exception)
      return response.internalServerError({ message: exception.message })
    }
  }

  /**
   * @param request
   * @param response
   */
  async statistics({ request, response, auth }) {
    try {
      let user: any = await User.query().where('id', auth.user.id).preload('role').first()

      const stats = await ContactRequest.stats(request, user)
      return response.send({
        status: true,
        message: 'Stats information',
        data: {
          total_contacts: stats.total_contacts || 0,
          contacted: stats.contacted || 0,
          not_contacted: stats.not_contacted || 0,
          assigned: (user.role_slug === 'admin' && stats.assigned) || 0,
          not_assigned: (user.role_slug === 'admin' && stats.not_assigned) || 0,
        },
      })
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }

  /**
   * @param ctx
   */
  public async updateStatus({ request, response, auth }) {
    try {
      const contactrequest = request.contactrequest as ContactRequest
      const data = request.only(['status', 'callback_time', 'notes'])

      const rules: any = {
        status: 'required',
        notes: 'required|max:500',
      }

      if (data.status === 'CALL_BACK') {
        rules['callback_time'] = 'required|date'
      }

      const validation = new Validator(data, rules)
      if (validation.fails()) {
        return response.badRequest(validation.errors.errors)
      }

      contactrequest.status = data.status

      if (data.status === 'CALL_BACK') {
        contactrequest.is_contacted = true
        contactrequest.callback_time = moment(data.callback_time)
          .utcOffset('+05:30')
          .format('YYYY-MM-DD HH:mm:ss')
      }

      await contactrequest.save()
      await Promise.all([
        contactrequest.log(auth.user, { message: data.notes, type: 'NOTE' }),
        contactrequest.log(auth.user, {
          message: `<strong>${auth.user.name}</strong> modified the status to <span>${data.status}</span>`,
          type: 'STATUS',
        }),
      ])

      return response.json({ message: `Status changed to ${contactrequest.status}` })
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }

  public async reassignLeadRequest({ request, response, auth }) {
    try {
      const contactrequest = request.contactrequest as ContactRequest
      const rules: any = {
        notes: 'required|max:500',
      }
      const data = request.only(['notes'])

      const validation = new Validator(data, rules)
      if (validation.fails()) {
        return response.badRequest(validation.errors.errors)
      }

      contactrequest.is_reassign_req = true
      contactrequest.status = 'EXE_CANCELLED'
      contactrequest.re_assign_notes = data.notes
      contactrequest.reassign_req_id = contactrequest.assigned_to
      contactrequest.assigned_to = null
      contactrequest.re_assign_date = moment().utcOffset('+05:30').format('YYYY-MM-DD HH:mm:ss')

      await contactrequest.save()

      await contactrequest.log(auth.user, { message: `request for lead re-assign`, type: 'ACTION' })
      await contactrequest.log(auth.user, { message: data.notes, type: 'NOTE' })

      response.json({ message: 'Re-assign requested is created!' })
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }

  public async assignLead({ request, response, auth }) {
    try {
      const contactrequest = request.contactrequest as ContactRequest
      const data = request.only(['assigned_to'])
      const rules = {
        assigned_to: 'required|numeric',
      }

      const validation = new Validator(data, rules)
      if (validation.fails()) {
        return response.badRequest(validation.errors.errors)
      }

      let user = await User.find(request.body().assigned_to)
      if (!user) {
        return response.badRequest({ message: 'Sales Executive Doesnt exists' })
      }
      contactrequest.assigned_to = request.body().assigned_to
      contactrequest.assigned_on = moment().utcOffset(-330).format('YYYY-MM-DD HH:mm:ss')
      contactrequest.assigned_by = auth.user.id
      contactrequest.is_reassign_req = false
      contactrequest.status = 'ASSIGNED'
      contactrequest.re_assign_notes = ''
      contactrequest.re_assign_date = null

      await contactrequest.save()

      if (request.body().assigned_to && auth && request.body().assigned_to != auth.user.id) {
        await Notification.create({
          navigation_id: String(contactrequest.id),
          receiver_id: request.body().assigned_to,
          message: `${auth.user.name}  has assigned you the Lead #${contactrequest.id}`,
          category: '1',
          read: false,
          active: true,
        })
      }

      await contactrequest.log(auth.user, {
        message: `assigned to ${user.name}`,
        type: 'ACTION',
      })

      response.json({ message: `Lead is assigned to ${user.name}.` })
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }
  
  
  
  /*****************************/
  async contactus({ request, response }) {
    try {
      const rules = {
        email: 'required|max:150|email',
        name: 'required|max:150',
        phone: 'required|max:10|min:10',
        country_id: 'max:200',
      }

      const validation = new Validator(request.all(), rules)
      if (validation.fails()) {
        return response.badRequest(validation.errors.errors)
      }

      const payload = request.body()
      const custName: ['',''] = payload.name.split(' ')
      const sourceType: string = payload.sourceType || ''
      await ContactRequest.create({
        email: payload.email,
        name: payload.name,
        first_name: custName[0],
        last_name: custName[payload.name.length - 1],
        phone: payload.phone,
        country_id: payload.country_id || '',
        education_details: [
          {
            passing_year: '',
            medium: '',
            grade: '',
            type: 'SSC',
            label: 'Secondary school Certificate / 10th',
          },
          {
            passing_year: '',
            medium: '',
            grade: '',
            type: 'HSC',
            label: 'Higher Secondary school Certificate / 12th',
          },
          {
            passing_year: '',
            medium: "'",
            start_year: '',
            end_year: '',
            grade: '',
            type: 'UG',
            label: 'Under Graduation',
            ug_type: '',
            backlogs: '',
          },
          {
            passing_year: '',
            medium: '',
            start_year: '',
            end_year: '',
            grade: '',
            type: 'PG',
            label: 'Post Graduation',
            ug_type: '',
            backlogs: '',
          },
        ],
        asst_exam_sections: [],
        status: 'UN_ASSIGNED',
        source: 'website-'+sourceType,
      })
      sendLeadConfirmationEmail({
        email: payload.email,
        name: payload.name,
        first_name: custName[0],
      })
      return response.json({ message: 'Contact request submitted Successfully' })
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }
  
  
  
  
  
 // class closed 
}
