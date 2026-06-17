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
        this.schema.table(this.tableName, (table) => {
            table.string('navigation_id', 100);
        });
    }
    async down() {
        this.schema.table(this.tableName, (table) => {
            table.dropColumn('navigation_id');
        });
    }
}
exports.default = Notifications;
//# sourceMappingURL=1677498459091_notifications_v1.js.map