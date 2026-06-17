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
            table.timestamp('call_back_time', { useTz: true }).nullable();
            table.string('status', 100).defaultTo('NOT_CONTACTED');
            table.timestamp('deleted_at', { useTz: true }).nullable();
            table.integer('country_id').unsigned().references('id').inTable('countries').nullable();
        });
    }
    async down() {
        this.schema.table(this.tableName, (table) => {
            table.dropColumns('call_back_time', 'status', 'deleted_at', 'country_id');
        });
    }
}
exports.default = AdditionalServices;
//# sourceMappingURL=1675138608967_additional_services_v3s.js.map