"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Pages extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'pages';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('name', 200);
            table.string('title', 200);
            table.string('page_slug', 200);
            table.string('MetaTitle', 200);
            table.string('MetaKeywords', 200);
            table.string('MetaDescription', 200);
            table.string('page_content', 200);
            table.integer('status', 200);
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Pages;
//# sourceMappingURL=1743505614000_pages.js.map