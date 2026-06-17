"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Users extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'users';
    }
    async up() {
        this.schema.table(this.tableName, (table) => {
            table.boolean('active').defaultTo(1);
            table.boolean('is_super_admin').defaultTo(0);
            table.boolean('first_time').defaultTo(0);
            table.integer('role_id').unsigned().references('id').inTable('roles').nullable();
            table.string('token', 1000).nullable();
        });
    }
    async down() {
        this.schema.table(this.tableName, (table) => {
            table.dropColumns('status', 'is_super_admin', 'first_time', 'role_id', 'token');
        });
    }
}
exports.default = Users;
//# sourceMappingURL=1651651308374_users_role_first_times.js.map