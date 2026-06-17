"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Feedbacks extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'feedbacks';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.integer('student_id').unsigned().references('id').inTable('students');
            table.integer('rating', 2).unsigned();
            table.text('feedback');
            table.timestamps(false);
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Feedbacks;
//# sourceMappingURL=1676006187476_feedbacks.js.map