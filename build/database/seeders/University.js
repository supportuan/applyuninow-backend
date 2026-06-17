"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const University_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/University"));
class UniversitySeeder extends Seeder_1.default {
    async run() {
        await University_1.default.createMany([
            {
                name: 'London University',
                country_id: 3,
            },
            {
                name: 'Imperial college of London',
                country_id: 3,
            },
            {
                name: 'London Metropolitan University',
                country_id: 3,
            },
            {
                name: 'University of Greenwich',
                country_id: 3,
            },
            {
                name: 'USA University',
                country_id: 1,
            },
        ]);
    }
}
exports.default = UniversitySeeder;
//# sourceMappingURL=University.js.map