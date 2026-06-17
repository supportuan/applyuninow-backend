"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class StudySubIndustries extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'study_sub_industries';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('name', 100);
            table
                .integer('industry_id')
                .unsigned()
                .references('id')
                .inTable('study_industries')
                .nullable();
            table.timestamp('deleted_at', { useTz: true }).nullable();
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = StudySubIndustries;
//# sourceMappingURL=1665512589220_study_sub_industries.js.map