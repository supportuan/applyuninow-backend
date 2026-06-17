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
const Hash_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Hash"));
const Orm_1 = global[Symbol.for('ioc.use')]("Adonis/Lucid/Orm");
const Role_1 = __importDefault(require("./Role"));
const UserPayslip_1 = __importDefault(require("./UserPayslip"));
class User extends Orm_1.BaseModel {
    static async hashPassword(user) {
        if (user.$dirty.password) {
            user.password = await Hash_1.default.make(user.password);
        }
    }
    static listing(request) {
        const { page = 1, search_key = '', role_id = '', user_type = '1', document_status = '', } = request.qs();
        const limit = 10;
        let query = this.query();
        if (document_status) {
            query = query.where('document_status', '=', document_status);
        }
        if (role_id) {
            query.whereHas('role', (query) => {
                query.where('id', role_id).select('name');
            });
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
            .preload('role', (query) => {
            query.select('name');
        })
            .where('user_type', '=', user_type)
            .where('is_super_admin', 0)
            .whereNull('deleted_at')
            .select('id', 'name', 'created_at', 'email', 'phone', 'active', 'role_id', 'document_status', 'user_type')
            .orderBy('active', 'desc')
            .orderBy('id', 'desc')
            .paginate(page, limit);
    }
    static dropdown() {
        return this.query()
            .whereHas('role', (query) => {
            query.whereNot('slug', 'student');
        })
            .where('active', 1)
            .where('user_type', '!=', 3)
            .whereNull('deleted_at')
            .select('id', 'name', 'phone', 'active', 'role_id')
            .orderBy('id', 'desc');
    }
    static archiveListing(request) {
        const { page = 1, search_key = '', role_id = '', user_type = '1', document_status = '', } = request.qs();
        const limit = 10;
        let query = this.query();
        if (document_status) {
            query = query.where('document_status', '=', document_status);
        }
        if (role_id) {
            query.whereHas('role', (query) => {
                query.where('id', role_id).select('name');
            });
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
            .preload('role', (query) => {
            query.select('name');
        })
            .where('user_type', '=', user_type)
            .whereNotNull('deleted_at')
            .select('id', 'name', 'created_at', 'email', 'phone', 'active', 'role_id', 'document_status', 'user_type')
            .orderBy('active', 'desc')
            .orderBy('id', 'desc')
            .paginate(page, limit);
    }
}
__decorate([
    (0, Orm_1.column)({ isPrimary: true }),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    (0, Orm_1.column)({ serializeAs: null }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], User.prototype, "rememberMeToken", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true }),
    __metadata("design:type", luxon_1.DateTime)
], User.prototype, "createdAt", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], User.prototype, "updatedAt", void 0);
__decorate([
    (0, Orm_1.column)({
        prepare: (value) => Number(value),
        serialize: (value) => Boolean(value),
    }),
    __metadata("design:type", String)
], User.prototype, "active", void 0);
__decorate([
    (0, Orm_1.column)({
        prepare: (value) => Number(value),
        serialize: (value) => Boolean(value),
    }),
    __metadata("design:type", String)
], User.prototype, "is_super_admin", void 0);
__decorate([
    (0, Orm_1.column)({
        prepare: (value) => Number(value),
        serialize: (value) => Boolean(value),
    }),
    __metadata("design:type", String)
], User.prototype, "first_time", void 0);
__decorate([
    (0, Orm_1.column)({
        prepare: (value) => Number(value),
        serialize: (value) => Boolean(value),
    }),
    __metadata("design:type", String)
], User.prototype, "is_agreed_policy", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], User.prototype, "role_id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], User.prototype, "token", void 0);
__decorate([
    (0, Orm_1.belongsTo)(() => Role_1.default, {
        foreignKey: 'role_id',
    }),
    __metadata("design:type", Object)
], User.prototype, "role", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Object)
], User.prototype, "deleted_at", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], User.prototype, "emg_contact_name", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], User.prototype, "emg_contact_phone", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], User.prototype, "emg_contact_email", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], User.prototype, "address", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], User.prototype, "city", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], User.prototype, "state", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], User.prototype, "image", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], User.prototype, "offer_letter", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], User.prototype, "user_type", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], User.prototype, "document_status", void 0);
__decorate([
    (0, Orm_1.column)({
        prepare: (value) => JSON.stringify(value),
        serialize: (value) => {
            return value ? JSON.parse(value) : [];
        },
    }),
    __metadata("design:type", String)
], User.prototype, "kyc_documents", void 0);
__decorate([
    (0, Orm_1.hasMany)(() => UserPayslip_1.default, {
        foreignKey: 'user_id',
    }),
    __metadata("design:type", Object)
], User.prototype, "payslips", void 0);
__decorate([
    (0, Orm_1.computed)(),
    __metadata("design:type", Object)
], User.prototype, "session", void 0);
__decorate([
    (0, Orm_1.beforeSave)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User]),
    __metadata("design:returntype", Promise)
], User, "hashPassword", null);
exports.default = User;
//# sourceMappingURL=User.js.map