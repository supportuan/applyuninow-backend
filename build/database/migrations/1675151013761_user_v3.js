"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Users extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'users';
    }
    async up() {
        this.schema.table(this.tableName, (table) => {
            table.string('emg_contact_name', 100).nullable();
            table.string('emg_contact_phone', 15).nullable();
            table.string('emg_contact_email', 225).nullable();
            table.string('address', 500).nullable();
            table.string('city', 50).nullable();
            table.string('state', 50).nullable();
            table.string('image', 255).nullable();
            table.string('offer_letter', 255).nullable();
            table.string('document_status', 50).defaultTo('PENDING');
            table.json('kyc_documents').nullable();
            table.enum('user_type', [1, 2, 3]).defaultTo(1);
        });
    }
    async down() {
        this.schema.table(this.tableName, (table) => {
            table.dropColumns('emg_contact_name', 'emg_contact_phone', 'emg_contact_email', 'address', 'city', 'state', 'image', 'offer_letter', 'document_status', 'kyc_documents', 'user_type');
        });
    }
}
exports.default = Users;
//# sourceMappingURL=1675151013761_user_v3.js.map