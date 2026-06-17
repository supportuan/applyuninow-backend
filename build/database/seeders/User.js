"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
class UserSeeder extends Seeder_1.default {
    async run() {
        await User_1.default.createMany([
            {
                name: 'Sandeep',
                email: 'test@scube.me',
                password: 'admin123',
                role_id: 1,
                active: '1',
                is_super_admin: '1',
                first_time: '0',
            },
        ]);
    }
}
exports.default = UserSeeder;
UserSeeder.developmentOnly = true;
//# sourceMappingURL=User.js.map