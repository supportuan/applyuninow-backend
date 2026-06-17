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
const luxon_1 = require("luxon");
const University_1 = __importDefault(require("./University"));
class StudentUniversity extends Orm_1.BaseModel {
}
__decorate([
    (0, Orm_1.column)({ isPrimary: true }),
    __metadata("design:type", Number)
], StudentUniversity.prototype, "id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], StudentUniversity.prototype, "student_id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], StudentUniversity.prototype, "university_id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], StudentUniversity.prototype, "value", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], StudentUniversity.prototype, "applied_intake", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], StudentUniversity.prototype, "offer_intake", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], StudentUniversity.prototype, "course_link", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], StudentUniversity.prototype, "defer", void 0);
__decorate([
    Orm_1.column.dateTime(),
    __metadata("design:type", luxon_1.DateTime)
], StudentUniversity.prototype, "updated_at", void 0);
__decorate([
    (0, Orm_1.column)({
        prepare: (value) => Number(value).toString(),
        serialize: (value) => Boolean(value),
    }),
    __metadata("design:type", String)
], StudentUniversity.prototype, "is_selected", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], StudentUniversity.prototype, "status", void 0);
__decorate([
    (0, Orm_1.belongsTo)(() => University_1.default, {
        foreignKey: 'university_id',
    }),
    __metadata("design:type", Object)
], StudentUniversity.prototype, "university", void 0);
exports.default = StudentUniversity;
//# sourceMappingURL=StudentUniversity.js.map