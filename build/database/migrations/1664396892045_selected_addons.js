"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class AdditionalServices extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'additional_services';
    }
    async up() {
        this.schema.table(this.tableName, (table) => {
            table.string('selected_service');
            table.string('notes');
        });
    }
    async down() {
        this.schema.table(this.tableName, (table) => {
            table.dropColumns('selected_service', 'notes');
        });
    }
}
exports.default = AdditionalServices;
//# sourceMappingURL=1664396892045_selected_addons.js.map