"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Countries extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'countries';
    }
    async up() {
        this.schema.table(this.tableName, (table) => {
            table.string('symbol', 5);
            table.string('currency', 10);
        });
    }
    async down() {
        this.schema.table(this.tableName, (table) => {
            table.dropColumns('symbol', 'currency');
        });
    }
}
exports.default = Countries;
//# sourceMappingURL=1652951070397_countries_currencies.js.map