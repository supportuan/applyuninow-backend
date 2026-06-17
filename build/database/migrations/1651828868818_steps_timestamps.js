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
            table.json('steps_timestamp').nullable();
            table.integer('lead_id').unsigned().references('id').inTable('contact_requests').nullable();
        });
    }
    async down() {
        this.schema.table(this.tableName, (table) => {
            table.dropColumns('steps_timestamp', 'lead_id');
        });
    }
}
exports.default = Students;
//# sourceMappingURL=1651828868818_steps_timestamps.js.map