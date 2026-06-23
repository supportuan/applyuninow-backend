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
const CheckList_1 = __importDefault(require("./CheckList"));
class Country extends Orm_1.BaseModel {
    static dropdown() {
        return this.query().where('status', '=', 1).select('name', 'id', 'currency').orderBy('name', 'asc');
    }
    static async resolveId(value) {
        if (value === null || value === undefined || value === '') {
            return null;
        }
        const raw = String(value).trim();
        if (/^\d+$/.test(raw)) {
            return Number(raw);
        }
        const slug = raw.replace(/^static-/, '').toLowerCase();
        const country = await this.query()
            .whereRaw("LOWER(REPLACE(name, ' ', '-')) = ?", [slug])
            .first();
        return country?.id ?? null;
    }
}
__decorate([
    (0, Orm_1.column)({ isPrimary: true }),
    __metadata("design:type", Number)
], Country.prototype, "id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Country.prototype, "name", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Country.prototype, "symbol", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Country.prototype, "currency", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Country.prototype, "status", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Country.prototype, "position", void 0);
__decorate([
    (0, Orm_1.manyToMany)(() => CheckList_1.default, {
        pivotTable: 'country_checklists',
    }),
    __metadata("design:type", Object)
], Country.prototype, "checklist", void 0);
exports.default = Country;
//# sourceMappingURL=Country.js.map