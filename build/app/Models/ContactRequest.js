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
const Database_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Database"));
const moment_1 = __importDefault(require("moment"));
const Country_1 = __importDefault(require("./Country"));
const Model_1 = __importDefault(require("./Model"));
const User_1 = __importDefault(require("./User"));
const StudyArea_1 = __importDefault(require("./StudyArea"));
const StudyIndustry_1 = __importDefault(require("./StudyIndustry"));
class ContactRequest extends Model_1.default {
    static async listing(request, user) {
        const { page = 1, search = '', status = '', from = '', to = '', intake_month = '', intake_year = '', assigned_to = '', source = '', country_id = '', } = request.qs();
        const limit = 10;
        let query = this.query();
        if (user.role.slug != 'admin' && user.role.slug != 'manager') {
            query.where((query) => {
                query.where('assigned_to', '=', user.id).where('is_reassign_req', 0);
            });
        }
        if (country_id) {
            query = query.where('country_id', country_id);
        }
        if (source) {
            query = query.where('source', source);
        }
        if (assigned_to) {
            query = query.where('assigned_to', assigned_to);
        }
        if (from && to) {
            query = query
                .where('created_at', '>=', (0, moment_1.default)(from).startOf('day').format('YYYY-MM-DD HH:mm:ss'))
                .where('created_at', '<=', (0, moment_1.default)(to).endOf('day').format('YYYY-MM-DD HH:mm:ss'));
        }
        if (search) {
            query = query.where((query) => {
                query
                    .orWhere('name', 'LIKE', `%${search}%`)
                    .orWhere('phone', 'LIKE', `%${search}%`)
                    .orWhere('email', 'LIKE', `%${search}%`);
            });
        }
        if (status) {
            query = query.where('status', status);
        }
        if (intake_month) {
            query = query.where('intake_month', intake_month);
        }
        if (intake_year) {
            query = query.where('intake_year', intake_year);
        }
        return query
            .preload('country', (query) => {
            query.select('name');
        })
            .preload('user', (query) => {
            query.select('name');
        })
            .preload('re_assign_user', (query) => {
            query.select('name');
        })
            .select('name', 'id', 'country_id', 'phone', 'email', 'source', 'assigned_to', 'status', 'intake_year', 'intake_month', 'first_name', 'last_name', 'is_reassign_req', 're_assign_notes', 're_assign_date', 'callback_time', 'reassign_req_id', 'created_at')
            .whereNull('deleted_at')
            .where('is_student', 0)
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
        from = (0, moment_1.default)(new Date(from)).startOf('day').format('YYYY-MM-DD HH:mm:ss');
        to = (0, moment_1.default)(new Date(to)).endOf('day').format('YYYY-MM-DD HH:mm:ss');
        let assignCondition = user.role.slug !== 'admin' ? `and assigned_to = ${user.id}` : ``;
        const [[stats]] = await Database_1.default.rawQuery(`
    SELECT
      (SELECT count(id) from contact_requests where created_at >= '${from}' and created_at <= '${to}' and deleted_at IS NULL and is_student = 0 ${assignCondition}) as total_contacts,
      (SELECT count(id) from contact_requests where created_at >= '${from}' and created_at <= '${to}' and is_contacted = 1 and  deleted_at IS NULL and is_student = 0 ${assignCondition}) as contacted,
      (SELECT count(id) from contact_requests where created_at >= '${from}' and created_at <= '${to}' and is_contacted = 0 and  deleted_at IS NULL  and is_student = 0 ${assignCondition}) as not_contacted,
      (SELECT count(id) from contact_requests where created_at >= '${from}' and created_at <= '${to}' and assigned_to IS NOT NULL and  deleted_at IS NULL and is_student = 0) as assigned,
      (SELECT count(id) from contact_requests where created_at >= '${from}' and created_at <= '${to}' and assigned_to IS NULL and  deleted_at IS NULL and is_student = 0) as not_assigned
  `);
        return stats;
    }
    static async archiveListing(request) {
        const { page = 1, search = '', status = '', from = '', to = '', intake_month = '', intake_year = '', country_id = '', source = '', assigned_to = '' } = request.qs();
        const limit = 10;
        let query = this.query();
        if (country_id) {
            query = query.where('country_id', country_id);
        }
        if (source) {
            query = query.where('source', source);
        }
        if (assigned_to) {
            query = query.where('assigned_to', assigned_to);
        }
        if (from && to) {
            query = query
                .where('created_at', '>=', (0, moment_1.default)(from).startOf('day').format('YYYY-MM-DD HH:mm:ss'))
                .where('created_at', '<=', (0, moment_1.default)(to).endOf('day').format('YYYY-MM-DD HH:mm:ss'));
        }
        if (search) {
            query = query.where((query) => {
                query
                    .orWhere('name', 'LIKE', `%${search}%`)
                    .orWhere('phone', 'LIKE', `%${search}%`)
                    .orWhere('email', 'LIKE', `%${search}%`);
            });
        }
        if (status) {
            query = query.where('status', status);
        }
        if (intake_month) {
            query = query.where('intake_month', intake_month);
        }
        if (intake_year) {
            query = query.where('intake_year', intake_year);
        }
        return query
            .preload('country', (query) => {
            query.select('name');
        })
            .preload('user', (query) => {
            query.select('name');
        })
            .whereNotNull('deleted_at')
            .select('name', 'id', 'country_id', 'phone', 'email', 'source', 'assigned_to', 'status', 'intake_year', 'intake_month', 'first_name', 'last_name')
            .orderBy('id', 'desc')
            .paginate(page, limit);
    }
}
__decorate([
    (0, Orm_1.column)({ isPrimary: true }),
    __metadata("design:type", Number)
], ContactRequest.prototype, "id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], ContactRequest.prototype, "name", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], ContactRequest.prototype, "email", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], ContactRequest.prototype, "study_area_id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], ContactRequest.prototype, "industry_id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], ContactRequest.prototype, "study_area", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], ContactRequest.prototype, "phone", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], ContactRequest.prototype, "destination", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], ContactRequest.prototype, "level", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], ContactRequest.prototype, "industry", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], ContactRequest.prototype, "intake", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], ContactRequest.prototype, "study_budget", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], ContactRequest.prototype, "study_mode", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], ContactRequest.prototype, "rec_grade_achived", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], ContactRequest.prototype, "rec_level_academic", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], ContactRequest.prototype, "pre_study_loc", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], ContactRequest.prototype, "last_name", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], ContactRequest.prototype, "study_duration", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], ContactRequest.prototype, "intake_year", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], ContactRequest.prototype, "intake_month", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], ContactRequest.prototype, "first_name", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Object)
], ContactRequest.prototype, "deleted_at", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], ContactRequest.prototype, "type_of_degree", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], ContactRequest.prototype, "study_attendance_type", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], ContactRequest.prototype, "work_experince", void 0);
__decorate([
    (0, Orm_1.column)({
        prepare: (value) => Number(value).toString(),
        serialize: (value) => Boolean(value),
    }),
    __metadata("design:type", Boolean)
], ContactRequest.prototype, "enable_email_notification", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], ContactRequest.prototype, "asst_eng_prof_test", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], ContactRequest.prototype, "source_page", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], ContactRequest.prototype, "assigned_by", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Object)
], ContactRequest.prototype, "assigned_to", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Object)
], ContactRequest.prototype, "assigned_on", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], ContactRequest.prototype, "status", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], ContactRequest.prototype, "source", void 0);
__decorate([
    (0, Orm_1.column)({
        prepare: (value) => Number(value).toString(),
        serialize: (value) => Boolean(value),
    }),
    __metadata("design:type", Boolean)
], ContactRequest.prototype, "is_reassign_req", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], ContactRequest.prototype, "callback_time", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], ContactRequest.prototype, "created_by", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], ContactRequest.prototype, "re_assign_notes", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Object)
], ContactRequest.prototype, "re_assign_date", void 0);
__decorate([
    (0, Orm_1.column)({
        prepare: (value) => JSON.stringify(value),
        serialize: (value) => {
            return value ? JSON.parse(value) : [];
        },
    }),
    __metadata("design:type", Object)
], ContactRequest.prototype, "education_details", void 0);
__decorate([
    (0, Orm_1.column)({
        prepare: (value) => JSON.stringify(value),
        serialize: (value) => {
            return value ? JSON.parse(value) : [];
        },
    }),
    __metadata("design:type", Object)
], ContactRequest.prototype, "asst_exam_sections", void 0);
__decorate([
    (0, Orm_1.column)({
        prepare: (value) => Number(value).toString(),
        serialize: (value) => Boolean(value),
    }),
    __metadata("design:type", Boolean)
], ContactRequest.prototype, "is_contacted", void 0);
__decorate([
    (0, Orm_1.column)({
        prepare: (value) => Number(value).toString(),
        serialize: (value) => Boolean(value),
    }),
    __metadata("design:type", String)
], ContactRequest.prototype, "is_student", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true }),
    __metadata("design:type", luxon_1.DateTime)
], ContactRequest.prototype, "createdAt", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], ContactRequest.prototype, "updatedAt", void 0);
__decorate([
    (0, Orm_1.belongsTo)(() => Country_1.default, {
        foreignKey: 'country_id',
    }),
    __metadata("design:type", Object)
], ContactRequest.prototype, "country", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], ContactRequest.prototype, "country_id", void 0);
__decorate([
    (0, Orm_1.belongsTo)(() => User_1.default, {
        foreignKey: 'assigned_to',
    }),
    __metadata("design:type", Object)
], ContactRequest.prototype, "user", void 0);
__decorate([
    (0, Orm_1.belongsTo)(() => User_1.default, {
        foreignKey: 'assigned_by',
    }),
    __metadata("design:type", Object)
], ContactRequest.prototype, "assignedBy", void 0);
__decorate([
    (0, Orm_1.belongsTo)(() => StudyArea_1.default, {
        foreignKey: 'study_area_id',
    }),
    __metadata("design:type", Object)
], ContactRequest.prototype, "lead_study_area", void 0);
__decorate([
    (0, Orm_1.belongsTo)(() => StudyIndustry_1.default, {
        foreignKey: 'industry_id',
    }),
    __metadata("design:type", Object)
], ContactRequest.prototype, "study_industry", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Object)
], ContactRequest.prototype, "reassign_req_id", void 0);
__decorate([
    (0, Orm_1.belongsTo)(() => User_1.default, {
        foreignKey: 'reassign_req_id',
    }),
    __metadata("design:type", Object)
], ContactRequest.prototype, "re_assign_user", void 0);
exports.default = ContactRequest;
//# sourceMappingURL=ContactRequest.js.map