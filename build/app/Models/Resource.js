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
Object.defineProperty(exports, "__esModule", { value: true });
const luxon_1 = require("luxon");
const Orm_1 = global[Symbol.for('ioc.use')]("Adonis/Lucid/Orm");
class Resource extends Orm_1.BaseModel {
    static listing(request) {
        const { page = 1, search_key = '', type = 1 } = request.qs();
        const limit = 10;
        let query = this.query();
        if (search_key) {
            query = query.where((query) => {
                query.orWhere('name', 'LIKE', `%${search_key}%`);
            });
        }
        return query
            .where('user_type', type)
            .where('is_folder', 1)
            .whereNull('deleted_at')
            .select('id', 'name', 'folder_image', 'slug')
            .paginate(page, limit);
    }
    static subFileList(request) {
        const { page = 1, search_key = '', parent_id = '' } = request.qs();
        const limit = 10;
        let query = this.query();
        if (search_key) {
            query = query.where((query) => {
                query.orWhere('name', 'LIKE', `%${search_key}%`);
            });
        }
        return query
            .where('parent_id', parent_id)
            .whereNull('deleted_at')
            .where('is_folder', 0)
            .select('id', 'name', 'url')
            .paginate(page, limit);
    }
    static deleteFiles(request) {
        const { page = 1, search_key = '' } = request.qs();
        const limit = 10;
        let query = this.query();
        if (search_key) {
            query = query.where((query) => {
                query.orWhere('name', 'LIKE', `%${search_key}%`);
            });
        }
        return query
            .whereNotNull('deleted_at')
            .where('is_folder', 0)
            .select('id', 'name', 'url')
            .orderBy('id', 'desc')
            .paginate(page, limit);
    }
}
__decorate([
    (0, Orm_1.column)({ isPrimary: true }),
    __metadata("design:type", Number)
], Resource.prototype, "id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Resource.prototype, "name", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Resource.prototype, "url", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Resource.prototype, "createdAt", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Resource.prototype, "updatedAt", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Object)
], Resource.prototype, "deleted_at", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Resource.prototype, "parent_id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Resource.prototype, "slug", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Resource.prototype, "user_type", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Resource.prototype, "folder_image", void 0);
__decorate([
    (0, Orm_1.column)({
        prepare: (value) => Number(value),
        serialize: (value) => Boolean(value),
    }),
    __metadata("design:type", Boolean)
], Resource.prototype, "is_folder", void 0);
exports.default = Resource;
//# sourceMappingURL=Resource.js.map