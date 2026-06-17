"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Universities extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'universities';
    }
    async up() {
        this.schema.table(this.tableName, (table) => {
            table.timestamp('deleted_at', { useTz: true }).nullable();
        });
    }
    async down() {
        this.schema.table(this.tableName, (table) => {
            table.dropColumn('deleted_at');
        });
    }
}
exports.default = Universities;
//# sourceMappingURL=1663756562645_universities_deleteds.js.map