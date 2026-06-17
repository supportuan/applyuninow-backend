"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Resources extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'resources';
    }
    async up() {
        this.schema.table(this.tableName, (table) => {
            table.timestamp('deleted_at', { useTz: true }).nullable();
            table.timestamps(false);
        });
    }
    async down() {
        this.schema.table(this.tableName, (table) => {
            table.dropColumn('deleted_at');
        });
    }
}
exports.default = Resources;
//# sourceMappingURL=1665046231676_resources_time_stamps.js.map