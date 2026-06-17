"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class StudentsChecklists extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'student_checklists';
    }
    async up() {
        this.schema.table(this.tableName, (table) => {
            table.timestamp('updated_at', { useTz: true }).nullable();
        });
    }
    async down() {
        this.schema.table(this.tableName, (table) => {
            table.dropColumn('updated_at');
        });
    }
}
exports.default = StudentsChecklists;
//# sourceMappingURL=1651824572407_students_checklists_updated_ats.js.map