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
            table.boolean('is_enrolled').defaultTo(false);
        });
    }
    async down() {
        this.schema.table(this.tableName, (table) => {
            table.dropColumn('is_enrolled');
        });
    }
}
exports.default = Students;
//# sourceMappingURL=1652950974515_enrolleds.js.map