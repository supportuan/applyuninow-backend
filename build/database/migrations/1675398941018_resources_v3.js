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
            table.enum('user_type', [1, 2]).defaultTo(1);
            table.string('slug', 200).notNullable().unique();
            table.string('folder_image').nullable();
        });
    }
    async down() {
        this.schema.table(this.tableName, (table) => {
            table.dropColumns('user_type', 'slug');
        });
    }
}
exports.default = Resources;
//# sourceMappingURL=1675398941018_resources_v3.js.map