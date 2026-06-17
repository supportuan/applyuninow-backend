"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const Country_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Country"));
class CountryListSeeder extends Seeder_1.default {
    async run() {
        await Country_1.default.createMany([
            {
                name: 'GERMANY',
            },
            {
                name: 'ITALY',
            },
            {
                name: 'NETHERLANDS',
            },
            {
                name: 'NEW ZEALAND',
            },
            {
                name: 'IRELAND',
            },
            {
                name: 'SINGAPORE',
            },
            {
                name: 'AUSTRALIA',
            },
            {
                name: 'FRANCE',
            },
            {
                name: 'SPAIN',
            },
        ]);
    }
}
exports.default = CountryListSeeder;
//# sourceMappingURL=CountryList.js.map