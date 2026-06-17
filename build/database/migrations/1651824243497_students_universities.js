"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class StudentsUniversities extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'student_universities';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.integer('student_id').unsigned().references('id').inTable('students');
            table.integer('university_id').unsigned().references('id').inTable('universities');
            table.string('value', 500);
            table.timestamp('updated_at', { useTz: true }).nullable();
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = StudentsUniversities;
//# sourceMappingURL=1651824243497_students_universities.js.map