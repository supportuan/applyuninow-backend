"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Universities extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'universities';
    }
    async up() {
        this.schema.table(this.tableName, (table) => {
            table.string('city', 100).nullable();
            table.string('location', 100).nullable();
        });
    }
    async down() {
        this.schema.table(this.tableName, (table) => {
            table.dropColumns('city', 'location');
        });
    }
}
exports.default = Universities;
//# sourceMappingURL=1663742904678_state_cities.js.map