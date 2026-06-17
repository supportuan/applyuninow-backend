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
            table.string('study_attendance_type', 100).nullable();
            table.string('type_of_degree', 100).nullable();
            table.string('work_experince', 100).nullable();
            table.string('rec_level_academic', 100).nullable();
            table.string('pre_study_loc', 100).nullable();
            table.json('education_details').nullable();
            table.json('asst_exam_sections').nullable();
            table.string('rec_grade_achived').nullable();
            table.string('study_mode').nullable();
            table.string('study_duration').nullable();
            table.string('study_budget').nullable();
            table.integer('assigned_by').unsigned().references('id').inTable('users').nullable();
            table.timestamp('assigned_on', { useTz: true }).nullable();
            table.string('status', 100).nullable().defaultTo('CURRENT');
            table.integer('created_by').unsigned().references('id').inTable('users').nullable();
        });
    }
    async down() {
        this.schema.table(this.tableName, (table) => {
            table.dropColumns('status', 'created_by', 'assigned_by', 'assigned_on', 'asst_exam_sections', 'study_attendance_type', 'type_of_degree', 'work_experince', 'education_details', 'rec_grade_achived', 'rec_level_academic', 'pre_study_loc', 'study_duration', 'study_budget', 'study_mode');
        });
    }
}
exports.default = Students;
//# sourceMappingURL=1675887864842_students_v3.js.map