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
const University_1 = __importDefault(require("./University"));
const StudyIndustry_1 = __importDefault(require("./StudyIndustry"));
const StudyArea_1 = __importDefault(require("./StudyArea"));
class CourseList extends Model_1.default {
    static listing(request) {
        const { page = 1, course_name = '', INTAKES = '', APPLICATION_FEE = '', TUITION_FEE = '', country_id = '', university_name = '', INDUSTRY_ID = '', SUBJECT_AREA_ID = '', COURSE_LEVEL = '', city = '', university_type = '', english_test = '', english_test_value = '', adaptive_test = '', adaptive_test_value = '' } = request.requestData.filters;
        console.log(request.requestData);
        const limit = 10;
        let query = this.query();
        if (course_name) {
            query = query.where('COURSE_NAME', 'LIKE', `%${course_name}%`);
        }
        if (INTAKES) {
            query = query.where('INTAKES', 'LIKE', `%${INTAKES}%`);
        }
        if (APPLICATION_FEE) {
            const rangeArrayA = APPLICATION_FEE.split("-").map(Number);
            query = query.whereRaw("CAST(REGEXP_REPLACE(APPLICATION_FEE, '[^0-9]', '') AS UNSIGNED) BETWEEN ? AND ?", rangeArrayA);
        }
        if (TUITION_FEE) {
            const rangeArrayT = TUITION_FEE.split("-").map(Number);
            query = query.whereRaw("CAST(REGEXP_REPLACE(TUITION_FEE, '[^0-9]', '') AS UNSIGNED) BETWEEN ? AND ?", rangeArrayT);
        }
        if (INDUSTRY_ID && INDUSTRY_ID !== '' && INDUSTRY_ID !== '0') {
            const industryIdNum = parseInt(INDUSTRY_ID, 10);
            if (!isNaN(industryIdNum) && industryIdNum > 0) {
                query = query.where('INDUSTRY_ID', '=', industryIdNum);
            }
        }
        if (SUBJECT_AREA_ID && SUBJECT_AREA_ID !== '' && SUBJECT_AREA_ID !== '0') {
            const subjectAreaIdNum = parseInt(SUBJECT_AREA_ID, 10);
            if (!isNaN(subjectAreaIdNum) && subjectAreaIdNum > 0) {
                query = query.where('SUBJECT_AREA_ID', '=', subjectAreaIdNum);
            }
        }
        if (COURSE_LEVEL) {
            query = query.where('COURSE_LEVEL', '=', COURSE_LEVEL);
        }
        if (english_test && english_test_value) {
            query = query.where('english_test', 'LIKE', `%${english_test_value}%`);
        }
        if (adaptive_test && adaptive_test_value) {
            let adaptivetest1 = 'GMAT_SAT';
            if (adaptivetest1 == 'GRE_ACT')
                adaptivetest1 = 'GRE_ACT';
            query = query.where(adaptivetest1, 'LIKE', `%${adaptive_test_value}%`);
        }
        if (university_name) {
            const universityName = university_name;
            query = query.whereHas('university', (subQuery) => {
                subQuery.where('name', 'LIKE', `%${universityName}%`);
            });
        }
        if (city) {
            const universitycity = city;
            query = query.whereHas('university', (subQuery) => {
                subQuery.where('city', 'LIKE', `%${universitycity}%`);
            });
        }
        if (university_type) {
            const universityType = university_type;
            query = query.whereHas('university', (subQuery) => {
                subQuery.where('university_type', 'LIKE', `%${universityType}%`);
            });
        }
        if (country_id) {
            const countryID = country_id;
            query = query.whereHas('university', (univQuery) => {
                univQuery.whereHas('country', (countryQuery) => {
                    countryQuery.where('id', '=', countryID);
                });
            });
        }
        const { University_Name_order = '', TUITION_FEE_ORDER = '', APPLICATION_FEE_ORDER = '', } = request.requestData.order;
        const orderLength = Object.keys(request.requestData.order).length;
        if (orderLength > 0) {
            if (University_Name_order) {
                console.log('111');
                query = query.orderBy('COURSE_NAME', University_Name_order);
            }
            if (TUITION_FEE_ORDER) {
                console.log('22');
                query = query.orderByRaw("CAST(REGEXP_REPLACE(TUITION_FEE, '[^0-9]', '') AS UNSIGNED) " + TUITION_FEE_ORDER);
            }
            if (APPLICATION_FEE_ORDER) {
                console.log('33');
                query = query.orderByRaw("CAST(REGEXP_REPLACE(APPLICATION_FEE, '[^0-9]', '') AS UNSIGNED) " + APPLICATION_FEE_ORDER);
            }
        }
        else {
            query = query.orderBy('COURSE_NAME', 'asc');
        }
        return query
            .whereNull('deleted_at')
            .select('COURSE_NAME', 'INTAKES', 'APPLICATION_FEE', 'TUITION_FEE', 'DURATION', 'PTE', 'IELTS', 'TOEFL', 'DET', 'GRE_ACT', 'GMAT_SAT', 'COUNTRY', 'COURSE_LEVEL', 'INDUSTRY_ID', 'SUBJECT_AREA_ID', 'university_id')
            .preload('study_industry', (query) => {
            query.select('id', 'name');
        })
            .preload('study_area', (query) => {
            query.select('id', 'name');
        })
            .preload('university', (query) => {
            query.preload('country', (subquery) => {
                subquery.select('id', 'name', 'currency');
            }).select('id', 'name', 'country_id', 'city', 'news_ranking', 'webometrics_national_ranking', 'webometrics_world_ranking', 'qs_ranking', 'percentage_of_international_students', 'acceptance_rate', 'university_type', 'logo');
        })
            .paginate(page, limit);
    }
}
__decorate([
    (0, Orm_1.column)({ isPrimary: true }),
    __metadata("design:type", Number)
], CourseList.prototype, "ID", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], CourseList.prototype, "COURSE_NAME", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], CourseList.prototype, "INTAKES", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], CourseList.prototype, "APPLICATION_FEE", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], CourseList.prototype, "TUITION_FEE", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], CourseList.prototype, "DURATION", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], CourseList.prototype, "PTE", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], CourseList.prototype, "IELTS", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], CourseList.prototype, "TOEFL", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], CourseList.prototype, "DET", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], CourseList.prototype, "GRE_ACT", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], CourseList.prototype, "GMAT_SAT", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], CourseList.prototype, "COURSE_LEVEL", void 0);
__decorate([
    (0, Orm_1.column)({ consume: value => value ?? null }),
    __metadata("design:type", Object)
], CourseList.prototype, "INDUSTRY_ID", void 0);
__decorate([
    (0, Orm_1.column)({ consume: value => value ?? null }),
    __metadata("design:type", Object)
], CourseList.prototype, "SUBJECT_AREA_ID", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: 'university_id' }),
    __metadata("design:type", Object)
], CourseList.prototype, "universityId", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true }),
    __metadata("design:type", luxon_1.DateTime)
], CourseList.prototype, "createdAt", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], CourseList.prototype, "updatedAt", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Object)
], CourseList.prototype, "deleted_at", void 0);
__decorate([
    (0, Orm_1.belongsTo)(() => University_1.default, {
        foreignKey: 'universityId',
    }),
    __metadata("design:type", Object)
], CourseList.prototype, "university", void 0);
__decorate([
    (0, Orm_1.belongsTo)(() => StudyIndustry_1.default, {
        foreignKey: 'INDUSTRY_ID',
    }),
    __metadata("design:type", Object)
], CourseList.prototype, "study_industry", void 0);
__decorate([
    (0, Orm_1.belongsTo)(() => StudyArea_1.default, {
        foreignKey: 'SUBJECT_AREA_ID',
    }),
    __metadata("design:type", Object)
], CourseList.prototype, "study_area", void 0);
exports.default = CourseList;
//# sourceMappingURL=CourseList.js.map