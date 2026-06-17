"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class StudentChecklists extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'student_checklists';
    }
    async up() {
        this.schema.table(this.tableName, (table) => {
            table.string('link_url', 1000).nullable();
        });
    }
    async down() {
        this.schema.table(this.tableName, (table) => {
            table.dropColumn('link_url');
        });
    }
}
exports.default = StudentChecklists;
//# sourceMappingURL=1652782513655_links.js.map