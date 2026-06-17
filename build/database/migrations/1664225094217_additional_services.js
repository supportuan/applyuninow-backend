"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class AdditionalServices extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'additional_services';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('first_name', 100);
            table.string('last_name', 100);
            table.string('email', 225);
            table.string('phone', 20);
            table.string('alternate_phone', 20);
            table.boolean('is_contacted').defaultTo(false);
            table.string('dob', 100);
            table.string('gender', 10);
            table.string('passport_no', 100);
            table.string('present_status', 100);
            table.json('images');
            table.timestamps(false);
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = AdditionalServices;
//# sourceMappingURL=1664225094217_additional_services.js.map