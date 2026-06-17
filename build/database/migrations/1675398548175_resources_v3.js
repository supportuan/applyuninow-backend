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
            table.integer('parent_id').unsigned().references('id').inTable('resources').nullable();
            table.boolean('is_folder').defaultTo(false);
            table.string('url').alter().nullable();
        });
    }
    async down() {
        this.schema.table(this.tableName, (table) => {
            table.dropColumns('parent_id', 'deleted_at', 'is_folder', 'url');
        });
    }
}
exports.default = Resources;
//# sourceMappingURL=1675398548175_resources_v3.js.map