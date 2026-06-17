"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class CheckLists extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'check_lists';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('name', 100);
            table.enum('type', [
                'Gathering Checklist',
                'University Application',
                'Pre-CAS Process',
                'Financial Evidence',
                'Visa Application',
                'Pre Requisite',
                'After I-20',
            ]);
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = CheckLists;
//# sourceMappingURL=1651738319894_check_lists.js.map