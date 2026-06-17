"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class StudyAreas extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'study_areas';
    }
    async up() {
        this.schema.table(this.tableName, (table) => {
            table
                .integer('sub_industry_id')
                .unsigned()
                .references('id')
                .inTable('study_sub_industries')
                .nullable();
        });
    }
    async down() {
        this.schema.table(this.tableName, (table) => {
            table.dropColumn('sub_industry_id');
        });
    }
}
exports.default = StudyAreas;
//# sourceMappingURL=1665512819110_sub_industry_study_areas.js.map