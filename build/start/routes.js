"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
const Application_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Application"));
const Helpers_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Helpers");
const upload_1 = global[Symbol.for('ioc.use')]("App/Helpers/upload");
Route_1.default.get('/', async () => {
    return { hello: 'world without build' };
});
Route_1.default.post('login', 'AuthController.login');
Route_1.default.post('forgot-password', 'AuthController.forgotPassword');
Route_1.default.post('reset-password', 'AuthController.resetPassword');
Route_1.default.post('update-password', 'AuthController.password').middleware('auth');
Route_1.default.get('prerequisite', 'ContactRequestController.prerequisite');
Route_1.default.get('study-areas', 'ContactRequestController.getStudyArea');
Route_1.default.get('study-sub-industries/:id', 'StudySubIndustryController.dropdown');
Route_1.default.post('contact-request', 'ContactRequestController.create');
Route_1.default.post('contact-request/home', 'ContactRequestController.contactRequest');
Route_1.default.post('additional-services', 'AdditionalServiceController.create');
Route_1.default.post('contact-us', 'ContactRequestController.contactus');
Route_1.default.get('page/:slug', 'PagesController.index');
Route_1.default.post('faqs/countries', 'FaqController.countryWiseFaqs');
Route_1.default.post('course/courseCart', 'CourseListController.courseCart');
Route_1.default.get('universities/city', 'UniversityController.city');
Route_1.default.group(() => {
    Route_1.default.post('logout', 'AuthController.logout');
    Route_1.default.patch('additional-services/status/:id', 'AdditionalServiceController.updateStatus').middleware('find:AdditionalService');
    Route_1.default.get('additional-services/statistics', 'AdditionalServiceController.statistics');
    Route_1.default.resource('additional-services', 'AdditionalServiceController')
        .middleware({
        show: ['find:AdditionalService'],
        update: ['find:AdditionalService'],
        destroy: ['find:AdditionalService'],
    })
        .apiOnly();
    Route_1.default.get('faqs/students', 'FaqController.countryWiseForStudent');
    Route_1.default.resource('faqs', 'FaqController')
        .middleware({
        update: ['find:Faq'],
        destroy: ['find:Faq'],
    })
        .apiOnly();
    Route_1.default.post('resources', 'ResourceController.create');
    Route_1.default.get('resources', 'ResourceController.index');
    Route_1.default.put('resources/:id', 'ResourceController.update').middleware(['find:Resource']);
    Route_1.default.delete('resources/:id', 'ResourceController.destroy').middleware(['find:Resource']);
    Route_1.default.delete('resources/sub/:id', 'ResourceController.fileDestroy').middleware(['find:Resource']);
    Route_1.default.get('resources/sub', 'ResourceController.subFileList');
    Route_1.default.post('resources/sub', 'ResourceController.fileCreate');
    Route_1.default.get('universities/dropdown', 'UniversityController.dropdown');
    Route_1.default.get('universities', 'UniversityController.index');
    Route_1.default.post('universities', 'UniversityController.store');
    Route_1.default.get('universities/:id', 'UniversityController.show').middleware(['find:University']);
    Route_1.default.put('universities/:id', 'UniversityController.update').middleware(['find:University']);
    Route_1.default.delete('universities/:id', 'UniversityController.destroy').middleware(['find:University']);
    Route_1.default.get('study_industries/dropdown', 'StudyIndustryController.dropdown');
    Route_1.default.resource('study_industries', 'StudyIndustryController')
        .middleware({
        show: ['find:StudyIndustry'],
        update: ['find:StudyIndustry'],
        destroy: ['find:StudyIndustry'],
    })
        .apiOnly();
    Route_1.default.get('study_sub_industries/dropdown/:id', 'StudySubIndustryController.dropdown');
    Route_1.default.resource('study_sub_industries', 'StudySubIndustryController')
        .middleware({
        show: ['find:StudySubIndustry'],
        update: ['find:StudySubIndustry'],
        destroy: ['find:StudySubIndustry'],
    })
        .apiOnly();
    Route_1.default.resource('study_areas', 'StudyAreaController')
        .middleware({
        show: ['find:StudyArea'],
        update: ['find:StudyArea'],
        destroy: ['find:StudyArea'],
    })
        .apiOnly();
    Route_1.default.get('contact-requests/statistics', 'ContactRequestController.statistics');
    Route_1.default.patch('contact-requests/status/:id', 'ContactRequestController.updateStatus').middleware([
        'find:ContactRequest',
    ]);
    Route_1.default.patch('contact-requests/update-status/:id', 'ContactRequestController.updateStatus').middleware('find:ContactRequest');
    Route_1.default.patch('contact-requests/reassign-lead/:id', 'ContactRequestController.reassignLeadRequest').middleware('find:ContactRequest');
    Route_1.default.patch('contact-requests/assign-lead/:id', 'ContactRequestController.assignLead').middleware('find:ContactRequest');
    Route_1.default.resource('contact-requests', 'ContactRequestController')
        .middleware({
        show: ['find:ContactRequest'],
        update: ['find:ContactRequest'],
        destroy: ['find:ContactRequest'],
    })
        .apiOnly();
    Route_1.default.resource('countries', 'CountryController').only(['index']);
    Route_1.default.resource('roles', 'RoleController')
        .middleware({
        show: ['find:Role'],
        update: ['find:Role'],
    })
        .only(['index', 'show', 'store', 'update', 'destroy']);
    Route_1.default.delete('users/payslips/:id', 'UserController.deleteUserPaySlip').middleware('find:UserPayslip');
    Route_1.default.put('users/profile/change-password', 'UserController.changePassword');
    Route_1.default.put('users/profile/update-profile', 'UserController.updateProfile');
    Route_1.default.get('users/profile/info', 'UserController.getAuthProfile');
    Route_1.default.post('users/payslips', 'UserController.addUserPaySlip');
    Route_1.default.post('users/kyc-documents', 'UserController.updateKYCDocuments');
    Route_1.default.get('users/logs/:id', 'UserController.getLogs').middleware('find:User');
    Route_1.default.put('users/update-kyc/:id', 'UserController.updateKYCStatus').middleware(['find:User']);
    Route_1.default.put('users/delete-kyc/:id', 'UserController.deleteKYCDocuments').middleware(['find:User']);
    Route_1.default.patch('users/update-status/:id', 'UserController.updateStatus');
    Route_1.default.put('users/update-policy-accept/:id', 'UserController.updatePolicyAccept').middleware([
        'find:User',
    ]);
    Route_1.default.get('users/roles', 'UserController.rolesDropdown');
    Route_1.default.get('users/dropdown', 'UserController.usersDropdown');
    Route_1.default.resource('users', 'UserController')
        .middleware({
        show: ['find:User'],
        update: ['find:User'],
        destroy: ['find:User'],
    })
        .apiOnly();
    Route_1.default.get('students/download-checklist/:id', 'StudentController.downloadCheckList');
    Route_1.default.put('students/update-check-list/:id', 'StudentController.updateCheckList');
    Route_1.default.put('students/update-university/:id', 'StudentController.updateUniversity').middleware([
        'find:Student',
    ]);
    Route_1.default.put('students/delete-university/:id', 'StudentController.deleteUniversity').middleware([
        'find:Student',
    ]);
    Route_1.default.put('students/update-financial-evidence/:id', 'StudentController.updateFinancialEvidence');
    Route_1.default.put('students/update-university-status/:id', 'StudentController.updateUniversityStatus').middleware(['find:StudentUniversity']);
    Route_1.default.get('students/prerequisite', 'StudentController.prerequisite');
    Route_1.default.get('students/statistics', 'StudentController.statistics');
    Route_1.default.get('students/view-info', 'StudentController.studentInfo');
    Route_1.default.post('students/update-info', 'StudentController.updateStudentInfo');
    Route_1.default.post('students/update-check-list-value', 'StudentController.updateCheckListValue');
    Route_1.default.put('students/update-details/:id', 'StudentController.updateStudent');
    Route_1.default.get('students/edit-view/:id', 'StudentController.editView');
    Route_1.default.patch('students/enrolled/:id', 'StudentController.makeAsEnrolled').middleware([
        'find:Student',
    ]);
    Route_1.default.patch('students/status/:id', 'StudentController.updateStatus').middleware(['find:Student']);
    Route_1.default.resource('students', 'StudentController')
        .middleware({
        show: ['find:Student'],
        update: ['find:Student'],
        destroy: ['find:Student'],
    })
        .apiOnly();
    Route_1.default.post('upload', async ({ request, response }) => {
        try {
            const uploadSchema = Validator_1.schema.create({
                file: Validator_1.schema.file({
                    size: '20mb',
                    extnames: ['jpg', 'png', 'jpeg', 'pdf', 'doc', '.docx'],
                }),
            });
            const payload = await request.validate({ schema: uploadSchema });
            const fileName = `${(0, Helpers_1.cuid)()}.${payload.file.extname}`;
            await payload.file.move(Application_1.default.tmpPath('uploads'), {
                name: fileName,
            });
            let finalData = await (0, upload_1.toS3)(Application_1.default.tmpPath('uploads') + '/' + fileName);
            return response.send({ status: true, data: finalData });
        }
        catch (exception) {
            response.internalServerError(exception.messages);
        }
    });
    Route_1.default.get('archives/explore', 'ArchiveController.leadsList');
    Route_1.default.post('archives/explore/restore', 'ArchiveController.restoreLead');
    Route_1.default.post('archives/explore/delete', 'ArchiveController.deleteLead');
    Route_1.default.get('archives/add-on', 'ArchiveController.addOnList');
    Route_1.default.post('archives/add-on/restore', 'ArchiveController.restoreAddOn');
    Route_1.default.post('archives/add-on/delete', 'ArchiveController.deleteAddOn');
    Route_1.default.get('archives/applications', 'ArchiveController.applicationList');
    Route_1.default.post('archives/applications/restore', 'ArchiveController.restoreApplication');
    Route_1.default.post('archives/applications/delete', 'ArchiveController.deleteApplication');
    Route_1.default.get('archives/users', 'ArchiveController.usersList');
    Route_1.default.post('archives/users/restore', 'ArchiveController.restoreUser');
    Route_1.default.post('archives/users/delete', 'ArchiveController.deleteUser');
    Route_1.default.get('archives/resources', 'ArchiveController.resourcesList');
    Route_1.default.post('archives/resources/restore', 'ArchiveController.restoreResource');
    Route_1.default.post('archives/resources/delete', 'ArchiveController.deleteResource');
    Route_1.default.get('feedbacks/check-feedback-status', 'FeedbackController.checkFeedBackStatus');
    Route_1.default.post('feedbacks/update-feedback', 'FeedbackController.createOrUpdateFeedback');
    Route_1.default.get('feedbacks', 'FeedbackController.index');
    Route_1.default.get('chats', 'ChatController.index');
    Route_1.default.post('chats', 'ChatController.store');
    Route_1.default.get('notifications', 'NotificationController.index');
    Route_1.default.post('notifications/mark_as_read', 'NotificationController.markAsReadNotifications');
    Route_1.default.post('notifications/clear_all', 'NotificationController.clearAllNotifications');
})
    .prefix('admin')
    .middleware('auth');
//# sourceMappingURL=routes.js.map