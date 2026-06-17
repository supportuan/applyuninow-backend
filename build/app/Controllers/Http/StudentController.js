"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = global[Symbol.for('ioc.use')]("App/Helpers/helpers");
const Country_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Country"));
const Student_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Student"));
const StudentChecklist_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/StudentChecklist"));
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
const moment_1 = __importDefault(require("moment"));
const Validator = require('validatorjs');
const Application_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Application"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const ContactRequest_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/ContactRequest"));
const CheckList_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/CheckList"));
const Notification_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Notification"));
class StudentController {
    async index({ request, response, auth }) {
        try {
            let user = await User_1.default.query()
                .where('id', auth.user.id)
                .preload('role')
                .first()
                .then((x) => x?.serialize());
            const users = await Student_1.default.listing(request, user);
            return response.json(users);
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async store(ctx) {
        return this.save(ctx);
    }
    async update(ctx) {
        const { student } = ctx.request;
        return this.save(ctx, student);
    }
    async save({ request, response, auth }, record = null) {
        let loggedUser = await User_1.default.query()
            .where('id', auth.user.id)
            .preload('role')
            .first()
            .then((x) => x?.serialize());
        let payload = request.body();
        const data = request.only([
            'email',
            'phone',
            'country_id',
            'level',
            'contact_id',
            'lead_id',
            'intake_month',
            'intake_year',
            'first_name',
            'last_name',
            'study_mode',
            'study_duration',
            'study_budget',
            'type_of_degree',
            'study_attendance_type',
            'work_experince',
            'industry_id',
            'study_area_id',
            'education_details',
            'asst_exam_sections',
        ]);
        if (loggedUser && loggedUser.role && loggedUser.role.slug != 'admin') {
            payload['contact_id'] = loggedUser.id;
        }
        else {
            data.contact_id = payload.contact_id;
        }
        const rules = {
            email: 'required|max:150|email',
            phone: 'required|max:20',
            level: 'required|max:200',
            intake_month: 'required',
            intake_year: 'required',
            country_id: 'required',
            contact_id: 'required',
            first_name: 'required|max:100',
            last_name: 'required|max:100',
        };
        const validation = new Validator(payload, rules);
        if (validation.fails()) {
            return response.badRequest(validation.errors.errors);
        }
        if (record && record['is_enrolled']) {
            return response.badRequest({ message: 'Application Cannot be update once its enrolled' });
        }
        let country = await Country_1.default.query().where('id', data.country_id).preload('checklist').first();
        if (country) {
            if (!country.checklist.length) {
                return response.badRequest({ message: 'Application not processed of selected destination' });
            }
            data['total_check_list'] = country.checklist.filter((x) => x.type === 'Gathering Checklist').length;
        }
        const existingUserByEmail = await User_1.default.query()
            .where('email', data.email)
            .whereNull('deleted_at')
            .first();
        let user = '';
        let student = record;
        let password = (0, helpers_1.generatePassword)();
        if (record === null) {
            user = new User_1.default();
            user.password = password;
            user.email = data.email;
            user.name = data.first_name + ' ' + data.last_name;
            user.user_type = 3;
            user.role_id = 4;
            user.phone = data.phone;
            user.first_time = true;
            student = new Student_1.default();
            (student.stage = 'Gathering Checklist'), (student.total_check_list = data.total_check_list);
            student.lead_id = data.lead_id;
        }
        if (existingUserByEmail && existingUserByEmail.id !== student.user_id) {
            if (existingUserByEmail.email.toLowerCase() === data.email.toLowerCase()) {
                return response.badRequest({ message: 'User already exists for given email address.' });
            }
        }
        if (record === null) {
            await user.save();
            (0, helpers_1.sendPasswordEmail)(user, password);
            student.user_id = user.id;
        }
        if (data.lead_id) {
            await ContactRequest_1.default.query().where('id', data.lead_id).update({ is_student: 1, status: 'CONVERTED' });
        }
        if (record && record['country_id'] != data.country_id) {
            await student.related('checklist').detach();
            await student.related('universities').detach();
            student.steps_timestamp = null;
            student.total_check_list = null;
            student.completed_check_list = null;
        }
        for (let [key, value] of Object.entries(data)) {
            student[key] = value;
        }
        ;
        (student.name = data.first_name + ' ' + data.last_name),
            (student.education_details = data.education_details),
            (student.asst_exam_sections = data.asst_exam_sections),
            await student.save();
        if (!record) {
            if (data.contact_id && data.contact_id != auth.user.id) {
                await Notification_1.default.create({
                    navigation_id: student.id,
                    receiver_id: data.contact_id,
                    message: `${auth.user.name}  has assigned you the Application #${student.id}`,
                    category: '2',
                    read: false,
                    active: true,
                });
            }
        }
        if (record) {
            await student.log(auth.user, {
                message: `updated the Application ID# ${student.id}`,
                type: 'ACTION',
            });
        }
        return response.json({ message: `Student  ${record ? 'Updated' : 'Created'} Successfully` });
    }
    async show({ request, response }) {
        try {
            let student = await Student_1.default.query()
                .preload('selected_checklist')
                .preload('selected_universities', (query) => {
                query.preload('university', (query) => {
                    query.select('name');
                });
            })
                .preload('primaryContact', (query) => {
                query.select('name', 'phone');
            })
                .preload('country', (query) => {
                query.select('name', 'symbol', 'currency');
            })
                .preload('study_industry', (query) => {
                query.select('name');
            })
                .preload('study_area', (query) => {
                query.preload('sub_industry', (q) => q.select('name')).select('name', 'sub_industry_id');
            })
                .where('id', request.param('id'))
                .first();
            if (!student) {
                return response.notFound({ message: `student not found.` });
            }
            student.logs = await student.getLogs();
            student = student.serialize();
            let country = await Country_1.default.query()
                .where('id', student.country_id)
                .preload('checklist')
                .first();
            if (country) {
                let checkList = country.checklist.map((x) => x.serialize());
                if (student.selected_checklist.length) {
                    checkList = checkList.map((x) => {
                        let item = student.selected_checklist.find((y) => y.check_list_id == x.id);
                        x = JSON.parse(JSON.stringify(x));
                        x['checked'] = item ? true : false;
                        (x['value'] = item ? item.value : ''), (x['updated_at'] = item ? item.updated_at : '');
                        x['link_url'] = item ? item.link_url : '';
                        return x;
                    });
                }
                else {
                    checkList = checkList.map((x) => {
                        x['checked'] = false;
                        (x['value'] = ''), (x['updated_at'] = '');
                        x['link_url'] = '';
                        return x;
                    });
                }
                student['check_list'] = checkList;
            }
            student['check_list'] = student['check_list'].reduce(function (r, a) {
                r[a.type] = r[a.type] || [];
                r[a.type].push(a);
                return r;
            }, Object.create(null));
            student['check_list']['Gathering Checklist'] = (0, helpers_1.sortCheckList)(student['check_list']['Gathering Checklist']);
            student['check_list']['University Application'] = student.universities;
            student.selected_universities = JSON.parse(JSON.stringify(student.selected_universities));
            return response.json(student);
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async studentInfo({ response, auth }) {
        try {
            let user = auth.user;
            let student = await Student_1.default.query()
                .preload('selected_checklist')
                .preload('selected_universities', (query) => {
                query.preload('university', (query) => {
                    query.select('name');
                });
            })
                .preload('primaryContact', (query) => {
                query.select('name', 'phone', 'email');
            })
                .preload('country', (query) => {
                query.select('name', 'symbol', 'currency');
            })
                .preload('study_industry', (query) => {
                query.select('name');
            })
                .preload('study_area', (query) => {
                query.preload('sub_industry', (q) => q.select('name')).select('name', 'sub_industry_id');
            })
                .where('user_id', user.id)
                .first()
                .then((serialize) => serialize?.toJSON());
            if (!student) {
                return response.notFound({ message: `student not found.` });
            }
            let country = await Country_1.default.query()
                .where('id', student.country_id)
                .preload('checklist')
                .first();
            if (country) {
                let checkList = country.checklist.map((x) => x.serialize());
                if (student.selected_checklist.length) {
                    checkList = checkList.map((x) => {
                        let item = student.selected_checklist.find((y) => y.check_list_id == x.id);
                        x = JSON.parse(JSON.stringify(x));
                        x['checked'] = item ? true : false;
                        (x['value'] = item ? item.value : ''), (x['updated_at'] = item ? item.updated_at : '');
                        x['link_url'] = item ? item.link_url : '';
                        return x;
                    });
                }
                else {
                    checkList = checkList.map((x) => {
                        x['checked'] = false;
                        (x['value'] = ''), (x['updated_at'] = '');
                        x['link_url'] = '';
                        return x;
                    });
                }
                student['check_list'] = checkList;
            }
            student['check_list'] = student['check_list'].reduce(function (r, a) {
                r[a.type] = r[a.type] || [];
                r[a.type].push(a);
                return r;
            }, Object.create(null));
            student['check_list']['University Application'] = student.universities;
            return response.json(student);
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async updateStudentInfo({ request, response, auth }) {
        try {
            let user = auth.user;
            let student = await Student_1.default.query().where('user_id', user.id).first();
            if (!student) {
                return response.notFound({ message: `student not found.` });
            }
            if (student.is_enrolled) {
                return response.notFound({ message: `Update not avalibale for completed application` });
            }
            const payload = request.body();
            (student.name = payload.first_name + ' ' + payload.last_name),
                (student.first_name = payload.first_name),
                (student.last_name = payload.last_name),
                (student.phone = payload.phone),
                (student.level = payload.level),
                (student.industry = payload.industry),
                (student.intake_month = payload.intake_month),
                (student.intake_year = payload.intake_year),
                (student.study_mode = payload.study_mode || ''),
                (student.study_duration = payload.study_duration || ''),
                (student.study_budget = payload.study_budget || ''),
                (student.industry_id = payload.industry_id || ''),
                (student.study_area_id = payload.study_area_id || ''),
                (student.type_of_degree = payload.type_of_degree || ''),
                (student.study_attendance_type = payload.study_attendance_type || ''),
                (student.work_experince = payload.work_experince || ''),
                (student.enable_email_notification = payload.enable_email_notification || ''),
                (student.education_details = payload.education_details),
                (student.asst_exam_sections = payload.asst_exam_sections),
                await student.save();
            await student.log(auth.user, {
                message: `updated the Application ID# ${student.id}`,
                type: 'ACTION',
            });
            return response.json({ message: 'updated successfully' });
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async updateCheckList({ request, response, auth }) {
        try {
            const rules = {
                type: 'required|max:150',
                checklist: 'required|array',
            };
            const validation = new Validator(request.all(), rules);
            if (validation.fails()) {
                return response.badRequest(validation.errors.errors);
            }
            let { checklist, type } = request.body();
            let student = await Student_1.default.query()
                .preload('selected_checklist')
                .where('id', request.param('id'))
                .first();
            if (!student) {
                return response.notFound({ message: `Student not found.` });
            }
            let steps_timestamp = student.steps_timestamp ? JSON.parse(student.steps_timestamp) : {};
            switch (type) {
                case 'Gathering Checklist':
                    if (!steps_timestamp['check_list_started_on']) {
                        steps_timestamp['check_list_started_on'] = (0, moment_1.default)().format('DD/MM/YYYY h:mm:ss');
                    }
                    break;
                case 'Pre-CAS Process':
                    if (!steps_timestamp['pre_cas_started_on']) {
                        steps_timestamp['pre_cas_started_on'] = (0, moment_1.default)().format('DD/MM/YYYY h:mm:ss');
                    }
                    break;
                case 'Financial Evidence':
                    if (!steps_timestamp['financial_evidence_started_on']) {
                        steps_timestamp['financial_evidence_started_on'] = (0, moment_1.default)().format('DD/MM/YYYY h:mm:ss');
                    }
                    break;
                case 'Visa Application':
                    if (!steps_timestamp['visa_app_started_on']) {
                        steps_timestamp['visa_app_started_on'] = (0, moment_1.default)().format('DD/MM/YYYY h:mm:ss');
                    }
                    break;
                case 'Pre Requisite':
                    if (!steps_timestamp['pre_requisite_started_on']) {
                        steps_timestamp['pre_requisite_started_on'] = (0, moment_1.default)().format('DD/MM/YYYY h:mm:ss');
                    }
                    break;
                case 'After I-20':
                    if (!steps_timestamp['after_i20_started_on']) {
                        steps_timestamp['after_i20_started_on'] = (0, moment_1.default)().format('DD/MM/YYYY h:mm:ss');
                    }
                    break;
                case 'Pre-Departure':
                    if (!steps_timestamp['pre_departure_started_on']) {
                        steps_timestamp['pre_departure_started_on'] = (0, moment_1.default)().format('DD/MM/YYYY h:mm:ss');
                    }
                    break;
                case 'On-Arrival':
                    if (!steps_timestamp['on_arrival_started_on']) {
                        steps_timestamp['on_arrival_started_on'] = (0, moment_1.default)().format('DD/MM/YYYY h:mm:ss');
                    }
                    break;
                default:
                    break;
            }
            let country = await Country_1.default.query().where('id', student.country_id).preload('checklist').first();
            let list = country?.checklist?.filter(x => x.type === type)?.map(x => x.id) || [];
            student.steps_timestamp = steps_timestamp;
            await student.save();
            let old_check_list_id = student.selected_checklist
                .map((x) => x.check_list_id)
                .filter(x => !list.includes(x));
            checklist = [...old_check_list_id, ...checklist];
            await student.related('checklist').sync(checklist);
            this.updatecheckListStatus(student.id, auth, `Update the ${type} checklist`);
            return response.json(student);
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async updateCheckListValue({ request, response, auth }) {
        try {
            const rules = {
                student_id: 'required',
                check_list_id: 'required',
            };
            const validation = new Validator(request.all(), rules);
            if (validation.fails()) {
                return response.badRequest(validation.errors.errors);
            }
            const payload = request.body();
            let studentCheckList = await StudentChecklist_1.default.query()
                .where('student_id', payload.student_id)
                .where('check_list_id', payload.check_list_id)
                .first();
            if (!studentCheckList) {
                return response.notFound({ message: `studentCheckList not found.` });
            }
            let data;
            if (payload.type === 'add') {
                data = { value: payload.value, updated_at: new Date() };
            }
            else {
                data = { value: '', updated_at: null };
            }
            if (payload.link) {
                data.link_url = payload.link;
                data.value = studentCheckList.value;
            }
            await await StudentChecklist_1.default.query()
                .where('student_id', payload.student_id)
                .where('check_list_id', payload.check_list_id)
                .update(data)
                .first();
            let checklist = await CheckList_1.default.findBy('id', payload.check_list_id);
            this.updatecheckListStatus(payload.student_id, auth, `Updated the ${checklist?.name || 'Checklist '} attachment`);
            return response.json({ message: `Value Updated Successfully` });
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async updateUniversity({ request, response, auth }) {
        try {
            const rules = {
                university_id: 'required',
            };
            const validation = new Validator(request.all(), rules);
            if (validation.fails()) {
                return response.badRequest(validation.errors.errors);
            }
            let student = await Student_1.default.query()
                .preload('selected_universities')
                .where('id', request.param('id'))
                .first();
            let list = student.selected_universities.map((x) => x.university_id);
            list = [...list, ...[request.body().university_id]];
            await student.related('universities').sync(list);
            this.updatecheckListStatus(student.id, auth, 'Add the univerisy to');
            return response.json({ message: `University Updated Successfully` });
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async deleteUniversity({ request, response, auth }) {
        try {
            const rules = {
                university_id: 'required',
            };
            const validation = new Validator(request.all(), rules);
            if (validation.fails()) {
                return response.badRequest(validation.errors.errors);
            }
            let student = await Student_1.default.query()
                .preload('selected_universities')
                .where('id', request.param('id'))
                .first();
            let list = student.selected_universities.map((x) => x.university_id);
            let index = list.findIndex(x => x == request.body().university_id);
            if (index != -1) {
                list.splice(index, 1);
            }
            await student.related('universities').sync(list);
            this.updatecheckListStatus(student.id, auth, 'Removed Selected University ');
            return response.json({ message: `University Updated Successfully` });
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async updateFinancialEvidence({ request, response, auth }) {
        try {
            const rules = {
                student_id: 'required',
                check_list: 'required|array',
            };
            const validation = new Validator(request.all(), rules);
            if (validation.fails()) {
                return response.badRequest(validation.errors.errors);
            }
            const payload = request.body();
            let student = await Student_1.default.query()
                .where('id', payload.student_id)
                .first();
            await student.related('checklist').attach(payload.check_list.map((x) => x.id));
            let steps_timestamp = student.steps_timestamp ? JSON.parse(student.steps_timestamp) : {};
            steps_timestamp['financial_evidence_started_on'] = (0, moment_1.default)().format('DD/MM/YYYY h:mm:ss');
            student.steps_timestamp = steps_timestamp;
            await student.save();
            for (let checklist of payload.check_list) {
                await await StudentChecklist_1.default.query()
                    .where('student_id', payload.student_id)
                    .where('check_list_id', checklist.id)
                    .update({ value: checklist.value, updated_at: new Date() })
                    .first();
            }
            this.updatecheckListStatus(payload.student_id, auth, 'update the Financial Evidence value');
            return response.json({ message: `Value Updated Successfully` });
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async updateUniversityStatus({ request, response, auth }) {
        try {
            const rules = {
                value: 'url',
                status: 'string',
                is_selected: 'boolean',
            };
            const validation = new Validator(request.all(), rules);
            if (validation.fails()) {
                return response.badRequest(validation.errors.errors);
            }
            let { studentuniversity } = request;
            const { value, status, is_selected, type } = request.body();
            if (type === 'delete') {
                studentuniversity.value = '';
                studentuniversity.status = 'Admission granted';
            }
            let obj = ['defer', 'offer_intake', 'course_link'];
            for (let key of obj) {
                if (request.body()[key]) {
                    studentuniversity[key] = request.body()[key];
                }
            }
            if (value) {
                studentuniversity.value = value;
                studentuniversity.status = 'Admission granted';
            }
            if (status) {
                studentuniversity.status = status;
            }
            if (is_selected) {
                studentuniversity.is_selected = is_selected;
            }
            await studentuniversity.save();
            this.updatecheckListStatus(studentuniversity.student_id, auth, 'Updated the university Status');
            return response.json({ message: `University Updated Successfully` });
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async prerequisite({ response }) {
        const data = {
            stages: [
                'Gathering Checklist',
                'University Application',
                'Pre-CAS Process',
                'Financial Evidence',
                'Visa Application',
                'Pre Requisite',
                'After I-20',
            ],
        };
        return response.json(data);
    }
    async statistics({ request, response, auth }) {
        try {
            let user = await User_1.default.query()
                .where('id', auth.user.id)
                .preload('role')
                .first()
                .then((x) => x?.serialize());
            const stats = await Student_1.default.stats(request, user);
            return response.send({
                status: true,
                message: 'Stats information',
                data: {
                    total_students: stats.total_students || 0,
                    in_progress: stats.in_progress || 0,
                    enrolled: stats.enrolled || 0,
                    defer: stats.defer || 0,
                    hold: stats.hold || 0,
                },
            });
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async editView({ request, response }) {
        try {
            let student = await Student_1.default.query()
                .preload('primaryContact', (query) => {
                query.select('name', 'phone');
            })
                .preload('country', (query) => {
                query.select('name', 'symbol', 'currency');
            })
                .preload('study_industry', (query) => {
                query.select('name');
            })
                .preload('study_area', (query) => {
                query.preload('sub_industry', (q) => q.select('name')).select('name', 'sub_industry_id');
            })
                .where('id', request.param('id'))
                .first()
                .then((serialize) => serialize?.toJSON());
            if (!student) {
                return response.notFound({ message: `student not found.` });
            }
            return response.json(student);
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async updateStudent({ request, response }) {
        try {
            let student = await Student_1.default.query().where('id', request.param('id')).first();
            if (!student) {
                return response.notFound({ message: `student not found.` });
            }
            const data = request.only(['name', 'email', 'phone', 'contact_id']);
            const rules = {
                email: 'required|max:150|email',
                name: 'required|max:200',
                phone: 'required|max:20',
                contact_id: 'required|max:200',
            };
            const validation = new Validator(request.all(), rules);
            if (validation.fails()) {
                return response.badRequest(validation.errors.errors);
            }
            student.name = data.name;
            student.phone = data.phone;
            student.contact_id = data.contact_id;
            student.email = data.email;
            await student.save();
            return response.json({ message: 'Updated Successfully' });
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async updatecheckListStatus(id, auth, msg) {
        let student = await Student_1.default.query()
            .preload('selected_checklist')
            .preload('selected_universities', (query) => {
            query.preload('university', (query) => {
                query.select('name');
            });
        })
            .where('id', id)
            .first();
        let country = await Country_1.default.query().where('id', student.country_id).preload('checklist').first();
        if (country) {
            let checkList = country.checklist.map((x) => x.serialize());
            if (student.selected_checklist.length) {
                checkList = checkList.map((x) => {
                    let item = student.selected_checklist.find((y) => y.check_list_id == x.id);
                    x = JSON.parse(JSON.stringify(x));
                    x['checked'] = item ? true : false;
                    (x['value'] = item ? item.value : ''), (x['updated_at'] = item ? item.updated_at : '');
                    x['link_url'] = item ? item.link_url : '';
                    return x;
                });
            }
            else {
                checkList = checkList.map((x) => {
                    x['checked'] = false;
                    (x['value'] = ''), (x['updated_at'] = '');
                    x['link_url'] = '';
                    return x;
                });
            }
            student['check_list'] = checkList;
        }
        student['check_list'] = student['check_list'].reduce(function (r, a) {
            r[a.type] = r[a.type] || [];
            r[a.type].push(a);
            return r;
        }, Object.create(null));
        for (let step of helpers_1.APPLICATION_PROCESS_LIST) {
            if (step.config === 'COMMON') {
                let list = student.check_list[step.slug];
                if (list && list.filter((x) => x.checked).length) {
                    student.stage = step.name;
                    student.stage_total_task = list?.filter((x) => x.checked).length || 0;
                    student.stage_completed_task = list?.filter((x) => x.value).length || 0;
                }
            }
            else if (step.slug === 'University Application') {
                let list = student.selected_universities;
                if (list && list.length) {
                    student.stage = step.name;
                    student.stage_total_task = list?.length || 0;
                    student.stage_completed_task = list?.filter((x) => x.value).length || 0;
                }
            }
            else if (step.slug === 'Financial Evidence') {
                let list = student.check_list[step.slug];
                if (list && list.filter((x) => x.value).length) {
                    student.stage = step.name;
                    student.stage_total_task = list.length;
                    student.stage_completed_task = list.filter((x) => x.value).length;
                }
            }
        }
        await student.save();
        await student.log(auth.user, {
            message: `${msg} of  Application ID# ${student.id}`,
            type: 'ACTION',
        });
    }
    async destroy({ request, response }) {
        try {
            const { student } = request;
            student['deleted_at'] = (0, moment_1.default)().utcOffset('+05:30').format('YYYY-MM-DD HH:mm:ss');
            await student.save();
            await User_1.default.query()
                .where('id', student.user_id)
                .update({
                active: false,
                deleted_at: (0, moment_1.default)().utcOffset('+05:30').format('YYYY-MM-DD HH:mm:ss'),
            });
            return response.json({ message: 'deleted Successfully' });
        }
        catch (exception) {
            console.log(exception);
            return response.internalServerError({ message: exception.message });
        }
    }
    async updateStatus({ auth, request, response }) {
        try {
            const { student } = request;
            const data = request.only(['status', 'notes']);
            const rules = {
                status: 'required',
                notes: 'required|max:500',
            };
            const validation = new Validator(data, rules);
            if (validation.fails()) {
                return response.badRequest(validation.errors.errors);
            }
            student.status = data.status;
            await student.save();
            await Promise.all([
                student.log(auth.user, { message: data.notes, type: 'NOTE' }),
                student.log(auth.user, {
                    message: `<strong>${auth.user.name}</strong> modified the status to <span>${data.status}</span>`,
                    type: 'STATUS',
                }),
            ]);
            return response.json({ message: 'Status updated Successfully' });
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async makeAsEnrolled({ auth, request, response }) {
        try {
            const { student } = request;
            student.is_enrolled = true;
            student.status = 'ENROLLED';
            await student.save();
            await Promise.all([
                student.log(auth.user, {
                    message: `<strong>${auth.user.name}</strong> modified the status to <span> ENROLLED</span>`,
                    type: 'STATUS',
                }),
            ]);
            return response.json({ message: 'Status updated Successfully' });
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async downloadCheckList({ request, response, auth }) {
        try {
            let student = await Student_1.default.query()
                .preload('selected_checklist')
                .preload('country', (query) => {
                query.select('name', 'symbol', 'currency');
            })
                .where('id', request.param('id'))
                .first();
            if (!student) {
                return response.notFound({ message: `Student not found.` });
            }
            let checkListType = request.qs().type;
            let country = await Country_1.default.query()
                .where('id', student.country_id)
                .preload('checklist')
                .first();
            if (country) {
                let checkList = country.checklist.map((x) => x.serialize());
                if (student.selected_checklist.length) {
                    checkList = checkList.map((x) => {
                        let item = student.selected_checklist.find((y) => y.check_list_id == x.id);
                        x = JSON.parse(JSON.stringify(x));
                        x['checked'] = item ? true : false;
                        (x['value'] = item ? item.value : ''), (x['updated_at'] = item ? item.updated_at : '');
                        x['link_url'] = item ? item.link_url : '';
                        return x;
                    });
                }
                else {
                    checkList = checkList.map((x) => {
                        x['checked'] = false;
                        (x['value'] = ''), (x['updated_at'] = '');
                        x['link_url'] = '';
                        return x;
                    });
                }
                student['check_list'] = checkList;
            }
            student['check_list'] = student['check_list'].reduce(function (r, a) {
                r[a.type] = r[a.type] || [];
                r[a.type].push(a);
                return r;
            }, Object.create(null));
            if (student['check_list'][checkListType] && !student['check_list'][checkListType].length) {
                return response.notFound({ message: `Please Update check list attachments` });
            }
            const URLS = student['check_list'][checkListType]
                .filter((x) => x.value)
                .map((x) => {
                return {
                    name: x.name,
                    url: x.value,
                };
            });
            if (URLS.length) {
                let folderPath = Application_1.default.tmpPath('uploads') +
                    '/' +
                    student.name.replace(/\s/g, '-').replace(/\//g, '-') +
                    student.id;
                if (!fs_1.default.existsSync(folderPath)) {
                    fs_1.default.mkdirSync(folderPath);
                }
                for (let item of URLS) {
                    const name = item.url.substring(item.url.lastIndexOf('/') + 1);
                    const lastDot = name.lastIndexOf('.');
                    const ext = name.substring(lastDot + 1);
                    await (0, helpers_1.getFilesToLocal)(item.url, folderPath + '/' + item.name.replace(/\s/g, '-').replace(/\//g, '-') + '.' + ext);
                }
                const outPath = Application_1.default.tmpPath('uploads') +
                    '/' +
                    student.name.replace(/\s/g, '-').replace(/\//g, '-') +
                    student.id +
                    '.zip';
                await (0, helpers_1.zipDirectory)(folderPath, outPath);
                let base64String = '';
                if (fs_1.default.statSync(outPath).isFile()) {
                    base64String = await (0, helpers_1.base64ToNode)(fs_1.default.readFileSync(path_1.default.resolve(outPath)).toString('base64'));
                }
                if (fs_1.default.existsSync(outPath))
                    fs_1.default.unlinkSync(outPath);
                (0, helpers_1.rmdir)(folderPath);
                return response.send({ base64String: base64String });
            }
            await student.log(auth.user, {
                message: `download the ${checkListType} checklist Zip of Application ID# ${student.id}`,
                type: 'ACTION',
            });
            return response.json({ message: 'No Attachments found.' });
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
}
exports.default = StudentController;
//# sourceMappingURL=StudentController.js.map