"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class ContactRequests extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'contact_requests';
    }
    async up() {
        this.schema.table(this.tableName, (table) => {
            table.string('intake_month', 10);
            table.string('intake_year', 4);
            table.string('first_name', 100);
            table.string('last_name', 100);
            table.string('rec_grade_achived');
            table.string('rec_level_academic');
            table.string('pre_study_loc');
            table.string('study_mode');
            table.string('study_duration');
            table.string('study_budget');
        });
    }
    async down() {
        this.schema.table(this.tableName, (table) => {
            table.dropColumns('intake_month', 'intake_year', 'first_name', 'last_name', 'rec_grade_achived', 'rec_level_academic', 'pre_study_loc', 'study_duration', 'study_budget', 'study_mode');
        });
    }
}
exports.default = ContactRequests;
//# sourceMappingURL=1664032123321_explore_leads.js.map