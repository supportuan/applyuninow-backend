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
            table.boolean('is_student').defaultTo(0);
        });
    }
    async down() {
        this.schema.table(this.tableName, (table) => {
            table.dropColumn('is_student');
        });
    }
}
exports.default = ContactRequests;
//# sourceMappingURL=1651732052532_student_keys.js.map