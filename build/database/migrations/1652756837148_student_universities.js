"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class StudentUniversities extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'student_universities';
    }
    async up() {
        this.schema.table(this.tableName, (table) => {
            table.increments('id');
            table.boolean('is_selected').defaultTo(0);
            table.string('status', 1000).defaultTo('Application Processing');
        });
    }
    async down() {
        this.schema.table(this.tableName, (table) => {
            table.dropColumns('is_selected', 'status', 'id');
        });
    }
}
exports.default = StudentUniversities;
//# sourceMappingURL=1652756837148_student_universities.js.map