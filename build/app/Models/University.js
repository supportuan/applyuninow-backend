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
const Country_1 = __importDefault(require("./Country"));
class University extends Orm_1.BaseModel {
    static listing(request) {
        const { page = 1, country_id = '', search_key = '' } = request.qs();
        const limit = 10;
        let query = this.query();
        if (country_id) {
            query = query.where('country_id', '=', country_id);
        }
        if (search_key) {
            query = query.where('name', 'LIKE', `%${search_key}%`);
        }
        return query
            .whereNull('deleted_at')
            .select('id', 'name', 'country_id', 'location', 'city', 'logo')
            .preload('country')
            .orderBy('id', 'desc')
            .paginate(page, limit);
    }
    static dropdown(country_id) {
        return this.query()
            .where('country_id', '=', country_id)
            .whereNull('deleted_at')
            .select('id', 'name', 'country_id')
            .preload('country')
            .orderBy('id', 'desc');
    }
    static getCity(country_id) {
        return this.query()
            .where('country_id', '=', country_id)
            .whereNull('deleted_at')
            .distinct('city')
            .orderBy('city', 'asc');
    }
}
__decorate([
    (0, Orm_1.column)({ isPrimary: true }),
    __metadata("design:type", Number)
], University.prototype, "id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], University.prototype, "name", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], University.prototype, "country_id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], University.prototype, "city", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], University.prototype, "news_ranking", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], University.prototype, "webometrics_national_ranking", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], University.prototype, "webometrics_world_ranking", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], University.prototype, "qs_ranking", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], University.prototype, "percentage_of_international_students", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], University.prototype, "acceptance_rate", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], University.prototype, "university_type", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], University.prototype, "location", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], University.prototype, "deleted_at", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], University.prototype, "logo", void 0);
__decorate([
    (0, Orm_1.belongsTo)(() => Country_1.default, {
        foreignKey: 'country_id',
    }),
    __metadata("design:type", Object)
], University.prototype, "country", void 0);
exports.default = University;
//# sourceMappingURL=University.js.map