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
class StudySubIndustry extends Orm_1.BaseModel {
    static dropdown(industry_id) {
        return this.query()
            .where('industry_id', industry_id)
            .whereNull('deleted_at')
            .preload('industry', (query) => {
            query.select('name');
        })
            .select('name', 'id', 'industry_id');
    }
    static listing(request) {
        const { page = 1, search_key = '', industry_id = '' } = request.qs();
        const limit = 10;
        let query = this.query();
        if (search_key) {
            query = query.where('name', 'LIKE', `%${search_key}%`);
        }
        if (industry_id) {
            query = query.where('industry_id', '=', industry_id);
        }
        return query
            .whereNull('deleted_at')
            .preload('industry', (query) => {
            query.select('name');
        })
            .select('id', 'name', 'industry_id')
            .orderBy('id', 'desc')
            .paginate(page, limit);
    }
}
__decorate([
    (0, Orm_1.column)({ isPrimary: true }),
    __metadata("design:type", Number)
], StudySubIndustry.prototype, "id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], StudySubIndustry.prototype, "name", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], StudySubIndustry.prototype, "deleted_at", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], StudySubIndustry.prototype, "industry_id", void 0);
__decorate([
    (0, Orm_1.belongsTo)(() => StudyIndustry_1.default, {
        foreignKey: 'industry_id',
    }),
    __metadata("design:type", Object)
], StudySubIndustry.prototype, "industry", void 0);
exports.default = StudySubIndustry;
//# sourceMappingURL=StudySubIndustry.js.map