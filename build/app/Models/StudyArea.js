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
const Orm_1 = global[Symbol.for('ioc.use')]("Adonis/Lucid/Orm");
const StudyIndustry_1 = __importDefault(require("./StudyIndustry"));
const StudySubIndustry_1 = __importDefault(require("./StudySubIndustry"));
class StudyArea extends Orm_1.BaseModel {
    static dropdown() {
        return this.query().whereNull('deleted_at').where('industry_id', 1).select('name', 'id').orderBy('name', 'asc');
    }
    static listing(request) {
        const { page = 1, search_key = '', industry_id = '', sub_industry_id = '' } = request.qs();
        const limit = 10;
        let query = this.query();
        if (search_key) {
            query = query.where('name', 'LIKE', `%${search_key}%`);
        }
        if (industry_id) {
            query = query.where('industry_id', '=', industry_id);
        }
        if (sub_industry_id) {
            query = query.where('sub_industry_id', '=', sub_industry_id);
        }
        return query
            .whereNull('deleted_at')
            .select('id', 'name', 'industry_id', 'sub_industry_id')
            .preload('industry', (query) => {
            query.select('name');
        })
            .preload('sub_industry', (query) => {
            query.select('name');
        })
            .orderBy('id', 'desc')
            .paginate(page, limit);
    }
}
__decorate([
    (0, Orm_1.column)({ isPrimary: true }),
    __metadata("design:type", Number)
], StudyArea.prototype, "id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], StudyArea.prototype, "name", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], StudyArea.prototype, "industry_id", void 0);
__decorate([
    (0, Orm_1.belongsTo)(() => StudyIndustry_1.default, {
        foreignKey: 'industry_id',
    }),
    __metadata("design:type", Object)
], StudyArea.prototype, "industry", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], StudyArea.prototype, "sub_industry_id", void 0);
__decorate([
    (0, Orm_1.belongsTo)(() => StudySubIndustry_1.default, {
        foreignKey: 'sub_industry_id',
    }),
    __metadata("design:type", Object)
], StudyArea.prototype, "sub_industry", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], StudyArea.prototype, "deleted_at", void 0);
exports.default = StudyArea;
//# sourceMappingURL=StudyArea.js.map