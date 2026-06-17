"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const luxon_1 = require("luxon");
const Orm_1 = global[Symbol.for('ioc.use')]("Adonis/Lucid/Orm");
const Model_1 = __importDefault(require("./Model"));
const User_1 = __importDefault(require("./User"));
const Country_1 = __importDefault(require("./Country"));
const CheckList_1 = __importDefault(require("./CheckList"));
const University_1 = __importDefault(require("./University"));
const StudentChecklist_1 = __importDefault(require("./StudentChecklist"));
const StudentUniversity_1 = __importDefault(require("./StudentUniversity"));
const Database_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Database"));
const moment_1 = __importDefault(require("moment"));
const StudyIndustry_1 = __importDefault(require("./StudyIndustry"));
const StudyArea_1 = __importDefault(require("./StudyArea"));
class Student extends Model_1.default {
    static listing(request, user) {
        const { page = 1, search_key = '', created_from = '', created_to = '', country_id = '', stage = '', contact_id = '', status = '', } = request.qs();
        const limit = 10;
        let query = this.query();
        if (user.role.slug !== 'admin') {
            query = query.where('contact_id', '=', user.id);
        }
        if (created_from && created_to) {
            query = query.where('created_at', '>=', created_from).where('created_at', '<=', created_to);
        }
        if (country_id) {
            query = query.where('country_id', '=', country_id);
        }
        if (stage) {
            query = query.where('stage', '=', stage);
        }
        if (status) {
            query = query.where('status', '=', status);
        }
        if (contact_id) {
            query = query.where('contact_id', '=', contact_id);
        }
        if (search_key) {
            query = query.where((query) => {
                query
                    .orWhere('id', 'LIKE', `%${search_key}%`)
                    .orWhere('name', 'LIKE', `%${search_key}%`)
                    .orWhere('phone', 'LIKE', `%${search_key}%`)
                    .orWhere('email', 'LIKE', `%${search_key}%`);
            });
        }
        return query
            .preload('primaryContact', (query) => {
            query.select('name', 'phone');
        })
            .preload('country', (query) => {
            query.select('name');
        })
            .whereNull('deleted_at')
            .select('id', 'name', 'created_at', 'email', 'phone', 'contact_id', 'country_id', 'completed_check_list', 'total_check_list', 'stage_completed_task', 'stage', 'stage_total_task', 'stage_completed_task', 'status', 'first_name', 'last_name')
            .orderBy('id', 'desc')
            .paginate(page, limit);
    }
    static async stats(request, user) {
        let { from = '2022-01-01', to = new Date() } = request.qs();
        if (!from) {
            from = '2022-01-01';
        }
        if (!to) {
            to = new Date();
        }
        if (user.role)
            from = (0, moment_1.default)(new Date(from)).startOf('day').format('YYYY-MM-DD HH:mm:ss');
        to = (0, moment_1.default)(new Date(to)).endOf('day').format('YYYY-MM-DD HH:mm:ss');
        let assignCondition = user.role.slug !== 'admin' ? `and contact_id = ${user.id}` : ``;
        const [[stats]] = await Database_1.default.rawQuery(`
    SELECT
      (SELECT count(id) from  students where created_at >= '${from}' and created_at <= '${to}' and deleted_at IS NULL ${assignCondition}) as total_students,
      (SELECT count(id) from students where created_at >= '${from}' and created_at <= '${to}' and status IN('IN_PROGRESS') and  deleted_at IS NULL  ${assignCondition}) as in_progress,
      (SELECT count(id) from students where created_at >= '${from}' and created_at <= '${to}' and status IN('ENROLLED') and  deleted_at IS NULL  ${assignCondition}) as enrolled,
      (SELECT count(id) from students where created_at >= '${from}' and created_at <= '${to}' and status IN('DEFER') and  deleted_at IS NULL  ${assignCondition}) as defer,
      (SELECT count(id) from students where created_at >= '${from}' and created_at <= '${to}' and status IN('HOLD') and  deleted_at IS NULL  ${assignCondition}) as hold
  `);
        return stats;
    }
    static archiveListing(request, user) {
        const { page = 1, search_key = '', created_from = '', created_to = '', country_id = '', stage = '', contact_id = '', status = '' } = request.qs();
        const limit = 10;
        let query = this.query();
        if (user.role.slug !== 'admin') {
            query = query.where('contact_id', '=', user.id);
        }
        if (created_from && created_to) {
            query = query.where('created_at', '>=', created_from).where('created_at', '<=', created_to);
        }
        if (country_id) {
            query = query.where('country_id', '=', country_id);
        }
        if (stage) {
            query = query.where('stage', '=', stage);
        }
        if (contact_id) {
            query = query.where('contact_id', '=', contact_id);
        }
        if (status) {
            query = query.where('status', '=', status);
        }
        if (search_key) {
            query = query.where((query) => {
                query
                    .orWhere('name', 'LIKE', `%${search_key}%`)
                    .orWhere('phone', 'LIKE', `%${search_key}%`)
                    .orWhere('email', 'LIKE', `%${search_key}%`);
            });
        }
        return query
            .preload('primaryContact', (query) => {
            query.select('name', 'phone');
        })
            .preload('country', (query) => {
            query.select('name');
        })
            .whereNotNull('deleted_at')
            .select('id', 'name', 'created_at', 'email', 'phone', 'contact_id', 'country_id', 'completed_check_list', 'total_check_list', 'stage_completed_task', 'stage', 'stage_total_task', 'stage_completed_task', 'status')
            .orderBy('id', 'desc')
            .paginate(page, limit);
    }
}
__decorate([
    (0, Orm_1.column)({ isPrimary: true }),
    __metadata("design:type", Number)
], Student.prototype, "id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Student.prototype, "name", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Student.prototype, "email", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Student.prototype, "phone", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Student.prototype, "level", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Student.prototype, "industry", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Student.prototype, "intake", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Student.prototype, "total_check_list", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Student.prototype, "completed_check_list", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Student.prototype, "stage", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Student.prototype, "stage_total_task", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Student.prototype, "stage_completed_task", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Student.prototype, "country_id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Student.prototype, "contact_id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Student.prototype, "user_id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Student.prototype, "lead_id", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Student.prototype, "createdAt", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Student.prototype, "updatedAt", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Object)
], Student.prototype, "deleted_at", void 0);
__decorate([
    (0, Orm_1.belongsTo)(() => User_1.default, {
        foreignKey: 'contact_id',
    }),
    __metadata("design:type", Object)
], Student.prototype, "primaryContact", void 0);
__decorate([
    (0, Orm_1.belongsTo)(() => Country_1.default, {
        foreignKey: 'country_id',
    }),
    __metadata("design:type", Object)
], Student.prototype, "country", void 0);
__decorate([
    (0, Orm_1.belongsTo)(() => User_1.default, {
        foreignKey: 'lead_id',
    }),
    __metadata("design:type", Object)
], Student.prototype, "lead", void 0);
__decorate([
    (0, Orm_1.column)({
        prepare: (value) => JSON.stringify(value),
        serialize: (value) => {
            return value ? (typeof value === 'string' ? JSON.parse(value) : value) : {};
        },
    }),
    __metadata("design:type", Object)
], Student.prototype, "steps_timestamp", void 0);
__decorate([
    (0, Orm_1.column)({
        prepare: (value) => Number(value).toString(),
        serialize: (value) => Boolean(value),
    }),
    __metadata("design:type", String)
], Student.prototype, "is_enrolled", void 0);
__decorate([
    (0, Orm_1.manyToMany)(() => CheckList_1.default, {
        pivotTable: 'student_checklists',
    }),
    __metadata("design:type", Object)
], Student.prototype, "checklist", void 0);
__decorate([
    (0, Orm_1.hasMany)(() => StudentChecklist_1.default, {
        foreignKey: 'student_id',
    }),
    __metadata("design:type", Object)
], Student.prototype, "selected_checklist", void 0);
__decorate([
    (0, Orm_1.hasMany)(() => StudentUniversity_1.default, {
        foreignKey: 'student_id',
    }),
    __metadata("design:type", Object)
], Student.prototype, "selected_universities", void 0);
__decorate([
    (0, Orm_1.manyToMany)(() => University_1.default, {
        pivotTable: 'student_universities',
    }),
    __metadata("design:type", Object)
], Student.prototype, "universities", void 0);
__decorate([
    (0, Orm_1.belongsTo)(() => StudyIndustry_1.default, {
        foreignKey: 'industry_id',
    }),
    __metadata("design:type", Object)
], Student.prototype, "study_industry", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Student.prototype, "sub_industry_id", void 0);
__decorate([
    (0, Orm_1.belongsTo)(() => StudyArea_1.default, {
        foreignKey: 'study_area_id',
    }),
    __metadata("design:type", Object)
], Student.prototype, "study_area", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Student.prototype, "industry_id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Student.prototype, "study_area_id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Student.prototype, "last_name", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Student.prototype, "intake_year", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Student.prototype, "intake_month", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Student.prototype, "first_name", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Student.prototype, "study_budget", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Student.prototype, "study_mode", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Student.prototype, "rec_grade_achived", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Student.prototype, "rec_level_academic", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Student.prototype, "pre_study_loc", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Student.prototype, "study_duration", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Student.prototype, "type_of_degree", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Student.prototype, "study_attendance_type", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Student.prototype, "assigned_by", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Student.prototype, "assigned_on", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Student.prototype, "status", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Student.prototype, "work_experince", void 0);
__decorate([
    (0, Orm_1.column)({
        prepare: (value) => JSON.stringify(value),
        serialize: (value) => {
            return value ? JSON.parse(value) : [];
        },
    }),
    __metadata("design:type", Object)
], Student.prototype, "education_details", void 0);
__decorate([
    (0, Orm_1.column)({
        prepare: (value) => JSON.stringify(value),
        serialize: (value) => {
            return value ? JSON.parse(value) : [];
        },
    }),
    __metadata("design:type", Object)
], Student.prototype, "asst_exam_sections", void 0);
exports.default = Student;
//# sourceMappingURL=Student.js.map