"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Students extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'students';
    }
    async up() {
        this.schema.table(this.tableName, (table) => {
            table.string('intake_month', 10);
            table.string('intake_year', 4);
        });
    }
    async down() {
        this.schema.table(this.tableName, (table) => {
            table.dropColumns('intake_month', 'intake_year');
        });
    }
}
exports.default = Students;
//# sourceMappingURL=1664369350760_names.js.map