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
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('name', 100);
            table.string('email', 225);
            table.string('phone', 20);
            table.string('level', 100);
            table.string('industry', 100);
            table.string('intake', 100);
            table.specificType('total_check_list', 'tinyint(20)').unsigned().defaultTo(0);
            table.specificType('completed_check_list', 'tinyint(20)').unsigned().defaultTo(0);
            table.string('stage', 20);
            table.specificType('stage_total_task', 'tinyint(20)').unsigned().defaultTo(0);
            table.specificType('stage_completed_task', 'tinyint(20)').unsigned().defaultTo(0);
            table.integer('country_id').unsigned().references('id').inTable('countries').nullable();
            table.integer('contact_id').unsigned().references('id').inTable('users').nullable();
            table.integer('user_id').unsigned().references('id').inTable('users').nullable();
            table.timestamps(false);
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Students;
//# sourceMappingURL=1651740090109_students.js.map