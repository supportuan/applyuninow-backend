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
const Log_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Log"));
class Model extends Orm_1.BaseModel {
    async getLogs() {
        return Log_1.default.query()
            .preload('user', (query) => {
            query.select('id', 'name');
        })
            .where('model_id', this.id)
            .where('model', this.constructor.name)
            .orderBy('id', 'desc');
    }
    async log(user, { message = '', type = 'ACTION' }) {
        const model = this;
        if (message === null) {
            message = ` ${model.created_by === model.updated_by ? 'created' : 'updated'} `;
        }
        await Log_1.default.create({
            model_id: model.id,
            model: model.constructor.name,
            user_id: user.id,
            message,
            type,
        });
    }
}
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Model.prototype, "id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Model.prototype, "created_by", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Model.prototype, "updated_by", void 0);
__decorate([
    (0, Orm_1.computed)(),
    __metadata("design:type", Object)
], Model.prototype, "logs", void 0);
exports.default = Model;
//# sourceMappingURL=Model.js.map