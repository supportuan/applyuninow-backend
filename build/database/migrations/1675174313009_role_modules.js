"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class RoleModules extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'role_modules';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary();
            table.string('name', 50).notNullable();
            table.string('slug', 50).notNullable();
            table.integer('parent_id').unsigned().references('id').inTable('role_modules');
            table.timestamps();
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = RoleModules;
//# sourceMappingURL=1675174313009_role_modules.js.map