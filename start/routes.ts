import Route from '@ioc:Adonis/Core/Route'
import { schema } from '@ioc:Adonis/Core/Validator'
import Application from '@ioc:Adonis/Core/Application'
import { cuid } from '@ioc:Adonis/Core/Helpers'
import { toS3 } from 'App/Helpers/upload'

Route.get('/', async () => {
  return { hello: 'world without build' }
})

Route.post('login', 'AuthController.login')
Route.post('forgot-password', 'AuthController.forgotPassword')
Route.post('reset-password', 'AuthController.resetPassword')
Route.post('update-password', 'AuthController.password').middleware('auth')

Route.get('prerequisite', 'ContactRequestController.prerequisite')
Route.get('study-areas', 'ContactRequestController.getStudyArea')
Route.get('study-sub-industries/:id', 'StudySubIndustryController.dropdown')

Route.post('contact-request', 'ContactRequestController.create')
Route.post('contact-request/home', 'ContactRequestController.contactRequest')
Route.post('additional-services', 'AdditionalServiceController.create')
Route.post('contact-us', 'ContactRequestController.contactus')

Route.get('page/:slug', 'PagesController.index') // added by sanjiv 
Route.post('faqs/countries', 'FaqController.countryWiseFaqs') // added by sanjiv 

Route.post('course/courseCart', 'CourseListController.courseCart') // added by sanjiv 
Route.get('universities/city', 'UniversityController.city')


Route.group(() => {
  Route.post('logout', 'AuthController.logout')

  // ADDITIONAL SERVICES
  Route.patch(
    'additional-services/status/:id',
    'AdditionalServiceController.updateStatus'
  ).middleware('find:AdditionalService')
  Route.get('additional-services/statistics', 'AdditionalServiceController.statistics')
  Route.resource('additional-services', 'AdditionalServiceController')
    .middleware({
      show: ['find:AdditionalService'],
      update: ['find:AdditionalService'],
      destroy: ['find:AdditionalService'],
    })
    .apiOnly()

  Route.get('faqs/students', 'FaqController.countryWiseForStudent')
  Route.resource('faqs', 'FaqController')
    .middleware({
      update: ['find:Faq'],
      destroy: ['find:Faq'],
    })
    .apiOnly()

  Route.post('resources', 'ResourceController.create')
  Route.get('resources', 'ResourceController.index')
  Route.put('resources/:id', 'ResourceController.update').middleware(['find:Resource'])
  Route.delete('resources/:id', 'ResourceController.destroy').middleware(['find:Resource'])

  // SUB RESOURCES
  Route.delete('resources/sub/:id', 'ResourceController.fileDestroy').middleware(['find:Resource'])
  Route.get('resources/sub', 'ResourceController.subFileList')
  Route.post('resources/sub', 'ResourceController.fileCreate')

  Route.get('universities/dropdown', 'UniversityController.dropdown')
  Route.get('universities', 'UniversityController.index')
  Route.post('universities', 'UniversityController.store')
  Route.get('universities/:id', 'UniversityController.show').middleware(['find:University'])
  Route.put('universities/:id', 'UniversityController.update').middleware(['find:University'])
  Route.delete('universities/:id', 'UniversityController.destroy').middleware(['find:University'])

  Route.get('study_industries/dropdown', 'StudyIndustryController.dropdown')
  Route.resource('study_industries', 'StudyIndustryController')
    .middleware({
      show: ['find:StudyIndustry'],
      update: ['find:StudyIndustry'],
      destroy: ['find:StudyIndustry'],
    })
    .apiOnly()

  Route.get('study_sub_industries/dropdown/:id', 'StudySubIndustryController.dropdown')
  Route.resource('study_sub_industries', 'StudySubIndustryController')
    .middleware({
      show: ['find:StudySubIndustry'],
      update: ['find:StudySubIndustry'],
      destroy: ['find:StudySubIndustry'],
    })
    .apiOnly()

  Route.resource('study_areas', 'StudyAreaController')
    .middleware({
      show: ['find:StudyArea'],
      update: ['find:StudyArea'],
      destroy: ['find:StudyArea'],
    })
    .apiOnly()

  Route.get('contact-requests/statistics', 'ContactRequestController.statistics')
  Route.patch('contact-requests/status/:id', 'ContactRequestController.updateStatus').middleware([
    'find:ContactRequest',
  ])

  Route.patch(
    'contact-requests/update-status/:id',
    'ContactRequestController.updateStatus'
  ).middleware('find:ContactRequest')
  Route.patch(
    'contact-requests/reassign-lead/:id',
    'ContactRequestController.reassignLeadRequest'
  ).middleware('find:ContactRequest')
  Route.patch('contact-requests/assign-lead/:id', 'ContactRequestController.assignLead').middleware(
    'find:ContactRequest'
  )
  Route.resource('contact-requests', 'ContactRequestController')
    .middleware({
      show: ['find:ContactRequest'],
      update: ['find:ContactRequest'],
      destroy: ['find:ContactRequest'],
    })
    .apiOnly()

  Route.resource('countries', 'CountryController').only(['index'])

  Route.resource('roles', 'RoleController')
    .middleware({
      show: ['find:Role'],
      update: ['find:Role'],
    })
    .only(['index', 'show', 'store', 'update', 'destroy'])

  Route.delete('users/payslips/:id', 'UserController.deleteUserPaySlip').middleware(
    'find:UserPayslip'
  )
  Route.put('users/profile/change-password', 'UserController.changePassword')
  Route.put('users/profile/update-profile', 'UserController.updateProfile')
  Route.get('users/profile/info', 'UserController.getAuthProfile')
  Route.post('users/payslips', 'UserController.addUserPaySlip')
  Route.post('users/kyc-documents', 'UserController.updateKYCDocuments')
  Route.get('users/logs/:id', 'UserController.getLogs').middleware('find:User')
  Route.put('users/update-kyc/:id', 'UserController.updateKYCStatus').middleware(['find:User'])
  Route.put('users/delete-kyc/:id', 'UserController.deleteKYCDocuments').middleware(['find:User'])
  Route.patch('users/update-status/:id', 'UserController.updateStatus')
  Route.put('users/update-policy-accept/:id', 'UserController.updatePolicyAccept').middleware([
    'find:User',
  ])
  Route.get('users/roles', 'UserController.rolesDropdown')
  Route.get('users/dropdown', 'UserController.usersDropdown')
  Route.resource('users', 'UserController')
    .middleware({
      show: ['find:User'],
      update: ['find:User'],
      destroy: ['find:User'],
    })
    .apiOnly()

  Route.get('students/download-checklist/:id', 'StudentController.downloadCheckList')
  Route.put('students/update-check-list/:id', 'StudentController.updateCheckList')
  Route.put('students/update-university/:id', 'StudentController.updateUniversity').middleware([
    'find:Student',
  ])
  Route.put('students/delete-university/:id', 'StudentController.deleteUniversity').middleware([
    'find:Student',
  ])
  Route.put('students/update-financial-evidence/:id', 'StudentController.updateFinancialEvidence')
  Route.put(
    'students/update-university-status/:id',
    'StudentController.updateUniversityStatus'
  ).middleware(['find:StudentUniversity'])
  Route.get('students/prerequisite', 'StudentController.prerequisite')
  Route.get('students/statistics', 'StudentController.statistics')
  Route.get('students/view-info', 'StudentController.studentInfo')
  Route.post('students/update-info', 'StudentController.updateStudentInfo')
  Route.post('students/update-check-list-value', 'StudentController.updateCheckListValue')
  Route.put('students/update-details/:id', 'StudentController.updateStudent')
  Route.get('students/edit-view/:id', 'StudentController.editView')
  Route.patch('students/enrolled/:id', 'StudentController.makeAsEnrolled').middleware([
    'find:Student',
  ])
  Route.patch('students/status/:id', 'StudentController.updateStatus').middleware(['find:Student'])
  Route.resource('students', 'StudentController')
    .middleware({
      show: ['find:Student'],
      update: ['find:Student'],
      destroy: ['find:Student'],
    })
    .apiOnly()

  Route.post('upload', async ({ request, response }) => {
    try {
      const uploadSchema = schema.create({
        file: schema.file({
          size: '20mb',
          extnames: ['jpg', 'png', 'jpeg', 'pdf','doc','.docx'],
        }),
      })
      const payload = await request.validate({ schema: uploadSchema })

      const fileName = `${cuid()}.${payload.file.extname}`
      await payload.file.move(Application.tmpPath('uploads'), {
        name: fileName,
      })
      let finalData = await toS3(Application.tmpPath('uploads') + '/' + fileName)
      return response.send({ status: true, data: finalData })
    } catch (exception) {
      // Error logged by AdonisJS error handler
      response.internalServerError(exception.messages)
    }
  })
  Route.get('archives/explore', 'ArchiveController.leadsList')
  Route.post('archives/explore/restore', 'ArchiveController.restoreLead')
  Route.post('archives/explore/delete', 'ArchiveController.deleteLead')

  Route.get('archives/add-on', 'ArchiveController.addOnList')
  Route.post('archives/add-on/restore', 'ArchiveController.restoreAddOn')
  Route.post('archives/add-on/delete', 'ArchiveController.deleteAddOn')

  Route.get('archives/applications', 'ArchiveController.applicationList')
  Route.post('archives/applications/restore', 'ArchiveController.restoreApplication')
  Route.post('archives/applications/delete', 'ArchiveController.deleteApplication')

  Route.get('archives/users', 'ArchiveController.usersList')
  Route.post('archives/users/restore', 'ArchiveController.restoreUser')
  Route.post('archives/users/delete', 'ArchiveController.deleteUser')

  Route.get('archives/resources', 'ArchiveController.resourcesList')
  Route.post('archives/resources/restore', 'ArchiveController.restoreResource')
  Route.post('archives/resources/delete', 'ArchiveController.deleteResource')

  Route.get('feedbacks/check-feedback-status', 'FeedbackController.checkFeedBackStatus')
  Route.post('feedbacks/update-feedback', 'FeedbackController.createOrUpdateFeedback')

  Route.get('feedbacks', 'FeedbackController.index')
  Route.get('chats', 'ChatController.index')
  Route.post('chats', 'ChatController.store')
  Route.get('notifications', 'NotificationController.index')
  Route.post('notifications/mark_as_read', 'NotificationController.markAsReadNotifications')
  Route.post('notifications/clear_all', 'NotificationController.clearAllNotifications')

  
  
})
  .prefix('admin')
  .middleware('auth')
