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
            table.integer('reassign_req_id').unsigned().references('id').inTable('users').nullable();
        });
    }
    async down() {
        this.schema.table(this.tableName, (table) => {
            table.dropColumn('reassign_req_id');
        });
    }
}
exports.default = ContactRequests;
//# sourceMappingURL=1677498482366_contact_requests1.js.map