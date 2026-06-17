"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const Role_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Role"));
class RoleSeeder extends Seeder_1.default {
    async run() {
        await Role_1.default.createMany([
            {
                name: 'Admin',
                slug: 'admin',
            },
            {
                name: 'Executive',
                slug: 'executive',
            },
            {
                name: 'Agent',
                slug: 'agent',
            },
            {
                name: 'Student',
                slug: 'student',
            },
        ]);
    }
}
exports.default = RoleSeeder;
//# sourceMappingURL=Role.js.map