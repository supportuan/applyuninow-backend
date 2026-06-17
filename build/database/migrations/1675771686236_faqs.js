"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Faqs extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'faqs';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.integer('country_id').unsigned().references('id').inTable('countries').nullable();
            table.string('query', 200);
            table.string('solution', 500);
            table.timestamp('deleted_at', { useTz: true }).nullable();
            table.timestamps(false);
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Faqs;
//# sourceMappingURL=1675771686236_faqs.js.map