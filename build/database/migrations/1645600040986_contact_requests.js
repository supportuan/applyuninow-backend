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
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('name', 100);
            table.string('email', 225);
            table.string('phone', 20);
            table.boolean('is_contacted').defaultTo(false);
            table.string('destination', 100);
            table.string('level', 100);
            table.string('industry', 100);
            table.string('intake', 100);
            table.timestamps(false);
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = ContactRequests;
//# sourceMappingURL=1645600040986_contact_requests.js.map