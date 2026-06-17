"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class CourseLists extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'course_lists';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.integer('INDUSTRY_ID').unsigned().references('id').inTable('study_industries').nullable();
            table.integer('SUBJECT_AREA_ID').unsigned().references('id').inTable('study_areas').nullable();
            table.integer('universityId').unsigned().references('id').inTable('universities').nullable();
            table.string('COURSE_NAME', 300);
            table.string('INTAKES', 100);
            table.string('APPLICATION_FEE', 100);
            table.string('TUITION_FEE', 100);
            table.string('DURATION', 100);
            table.string('PTE', 100);
            table.string('IELTS', 100);
            table.string('TOEFL', 100);
            table.string('DET', 100);
            table.string('GRE_ACT', 100);
            table.string('GMAT_SAT', 100);
            table.string('COURSE_LEVEL', 100);
            table.timestamp('deleted_at', { useTz: true }).nullable();
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = CourseLists;
//# sourceMappingURL=1745323639547_course_lists.js.map