"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class CountryChecklists extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'country_checklists';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.integer('country_id').unsigned().references('id').inTable('countries').nullable();
            table.integer('check_list_id').unsigned().references('id').inTable('check_lists').nullable();
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = CountryChecklists;
//# sourceMappingURL=1651740552160_countries_checklists.js.map