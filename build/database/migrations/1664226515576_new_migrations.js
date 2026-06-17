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
            table
                .integer('industry_id')
                .unsigned()
                .references('id')
                .inTable('study_industries')
                .nullable();
            table.integer('study_area_id').unsigned().references('id').inTable('study_areas').nullable();
        });
    }
    async down() {
        this.schema.table(this.tableName, (table) => {
            table.dropColumns('industry_id', 'study_area_id');
        });
    }
}
exports.default = ContactRequests;
//# sourceMappingURL=1664226515576_new_migrations.js.map