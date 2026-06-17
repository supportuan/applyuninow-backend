"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Notifications extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'notifications';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.integer('receiver_id').unsigned().references('id').inTable('users');
            table.string('message', 100);
            table.boolean('read').defaultTo(false);
            table.boolean('active').defaultTo(true);
            table.enu('category', [1, 2, 3]).defaultTo(1);
            table.timestamps(false);
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Notifications;
//# sourceMappingURL=1675667327468_notifications.js.map