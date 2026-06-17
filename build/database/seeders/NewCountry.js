"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const Country_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Country"));
class NewCountrySeeder extends Seeder_1.default {
    async run() {
        await Country_1.default.createMany([
            {
                name: 'AUSTRALIA',
            },
            {
                name: 'IRELAND',
            },
            {
                name: 'GERMANY',
            },
            {
                name: 'SWITZERLAND',
            },
            {
                name: 'SINGAPORE',
            },
            {
                name: 'NEW ZEALAND',
            },
            {
                name: 'UAE',
            },
        ]);
    }
}
exports.default = NewCountrySeeder;
//# sourceMappingURL=NewCountry.js.map