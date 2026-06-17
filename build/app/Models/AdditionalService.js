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
const Country_1 = __importDefault(require("./Country"));
const Model_1 = __importDefault(require("./Model"));
const moment_1 = __importDefault(require("moment"));
const Database_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Database"));
class AdditionalService extends Model_1.default {
    static listing(request) {
        const { page = 1, country_id = '', status = '', created_from = '', created_to = '', search_key = '', service = '', } = request.qs();
        const limit = 10;
        let query = this.query();
        if (created_from && created_to) {
            query = query
                .where('created_at', '>=', (0, moment_1.default)(created_from).startOf('day').format('YYYY-MM-DD HH:mm:ss'))
                .where('created_at', '<=', (0, moment_1.default)(created_to).endOf('day').format('YYYY-MM-DD HH:mm:ss'));
        }
        if (search_key) {
            query = query.where((query) => {
                query
                    .orWhere('first_name', 'LIKE', `%${search_key}%`)
                    .orWhere('last_name', 'LIKE', `%${search_key}%`)
                    .orWhere('phone', 'LIKE', `%${search_key}%`)
                    .orWhere('email', 'LIKE', `%${search_key}%`);
            });
        }
        if (service) {
            query = query.where((query) => {
                query.where('selected_service', 'LIKE', `%${service}%`);
            });
        }
        if (country_id) {
            query = query.where('country_id', '=', country_id);
        }
        if (status) {
            query = query.where('status', '=', status);
        }
        return query
            .select('id', 'first_name', 'last_name', 'phone', 'email', 'created_at', 'status', 'present_status', 'call_back_time', 'country_id', 'selected_service')
            .preload('country')
            .whereNull('deleted_at')
            .orderBy('id', 'desc')
            .paginate(page, limit);
    }
    static archiveListing(request) {
        const { page = 1, country_id = '', status = '', created_from = '', created_to = '', search_key = '', service = '', } = request.qs();
        const limit = 10;
        let query = this.query();
        if (created_from && created_to) {
            query = query
                .where('created_at', '>=', (0, moment_1.default)(created_from).startOf('day').format('YYYY-MM-DD HH:mm:ss'))
                .where('created_at', '<=', (0, moment_1.default)(created_to).endOf('day').format('YYYY-MM-DD HH:mm:ss'));
        }
        if (search_key) {
            query = query.where((query) => {
                query
                    .orWhere('first_name', 'LIKE', `%${search_key}%`)
                    .orWhere('last_name', 'LIKE', `%${search_key}%`)
                    .orWhere('phone', 'LIKE', `%${search_key}%`)
                    .orWhere('email', 'LIKE', `%${search_key}%`);
            });
        }
        if (service) {
            query = query.where((query) => {
                query.where('selected_service', 'LIKE', `%${service}%`);
            });
        }
        if (country_id) {
            query = query.where('country_id', '=', country_id);
        }
        if (status) {
            query = query.where('status', '=', status);
        }
        return query
            .select('id', 'first_name', 'last_name', 'phone', 'email', 'created_at', 'status', 'present_status', 'call_back_time', 'country_id', 'selected_service')
            .preload('country')
            .whereNotNull('deleted_at')
            .orderBy('id', 'desc')
            .paginate(page, limit);
    }
    static async stats(request) {
        let { from = '2022-01-01', to = new Date() } = request.qs();
        if (!from) {
            from = '2022-01-01';
        }
        if (!to) {
            to = new Date();
        }
        from = (0, moment_1.default)(new Date(from)).startOf('day').format('YYYY-MM-DD HH:mm:ss');
        to = (0, moment_1.default)(new Date(to)).endOf('day').format('YYYY-MM-DD HH:mm:ss');
        const [[stats]] = await Database_1.default.rawQuery(`
      SELECT
        (SELECT count(id) from additional_services where created_at >= '${from}' and created_at <= '${to}' and deleted_at IS NULL) as total_leads,
        (SELECT count(id) from additional_services where created_at >= '${from}' and created_at <= '${to}' and status IN ('IN_PROGRESS','CONTACTED','COMPLETED') and  deleted_at IS NULL) as contacted,
        (SELECT count(id) from additional_services where created_at >= '${from}' and created_at <= '${to}' and status IN ('NOT_CONTACTED') and deleted_at IS NULL) as not_contacted,
        (SELECT count(id) from additional_services where created_at >= '${from}' and created_at <= '${to}' and status IN ('IN_PROGRESS') and  deleted_at IS NULL) as in_progress,
        (SELECT count(id) from additional_services where created_at >= '${from}' and created_at <= '${to}' and status IN ('COMPLETED') and  deleted_at IS NULL) as completed
    `);
        return stats;
    }
}
__decorate([
    (0, Orm_1.column)({ isPrimary: true }),
    __metadata("design:type", Number)
], AdditionalService.prototype, "id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], AdditionalService.prototype, "last_name", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], AdditionalService.prototype, "phone", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], AdditionalService.prototype, "email", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], AdditionalService.prototype, "first_name", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], AdditionalService.prototype, "alternate_phone", void 0);
__decorate([
    (0, Orm_1.column)({
        prepare: (value) => Number(value).toString(),
        serialize: (value) => Boolean(value),
    }),
    __metadata("design:type", String)
], AdditionalService.prototype, "is_contacted", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], AdditionalService.prototype, "dob", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], AdditionalService.prototype, "gender", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], AdditionalService.prototype, "passport_no", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], AdditionalService.prototype, "present_status", void 0);
__decorate([
    (0, Orm_1.column)({
        prepare: (value) => JSON.stringify(value),
        serialize: (value) => {
            return value ? JSON.parse(value) : [];
        },
    }),
    __metadata("design:type", Object)
], AdditionalService.prototype, "images", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Object)
], AdditionalService.prototype, "deleted_at", void 0);
__decorate([
    (0, Orm_1.belongsTo)(() => Country_1.default, {
        foreignKey: 'country_id',
    }),
    __metadata("design:type", Object)
], AdditionalService.prototype, "country", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], AdditionalService.prototype, "country_id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], AdditionalService.prototype, "status", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], AdditionalService.prototype, "call_back_time", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], AdditionalService.prototype, "selected_service", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], AdditionalService.prototype, "notes", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true }),
    __metadata("design:type", luxon_1.DateTime)
], AdditionalService.prototype, "createdAt", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], AdditionalService.prototype, "updatedAt", void 0);
exports.default = AdditionalService;
//# sourceMappingURL=AdditionalService.js.map