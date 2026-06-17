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
        this.schema.createTable(this.tableName, (table) => {
            table.integer('student_id').unsigned().references('id').inTable('students');
            table.integer('check_list_id').unsigned().references('id').inTable('check_lists');
            table.string('value', 500);
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = StudentsChecklists;
//# sourceMappingURL=1651740579778_students_checklists.js.map