"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const CountryChecklist_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/CountryChecklist"));
class NewCheckListSeeder extends Seeder_1.default {
    async run() {
        await CountryChecklist_1.default.createMany([
            {
                country_id: 1,
                check_list_id: 47,
            },
            {
                country_id: 2,
                check_list_id: 47,
            },
            {
                country_id: 2,
                check_list_id: 7,
            },
            {
                country_id: 3,
                check_list_id: 7,
            },
            {
                country_id: 2,
                check_list_id: 8,
            },
            {
                country_id: 3,
                check_list_id: 47,
            },
            {
                country_id: 1,
                check_list_id: 6,
            },
            {
                country_id: 1,
                check_list_id: 9,
            },
            {
                country_id: 1,
                check_list_id: 54,
            },
            {
                country_id: 1,
                check_list_id: 55,
            },
            {
                country_id: 1,
                check_list_id: 56,
            },
            {
                country_id: 1,
                check_list_id: 57,
            },
            {
                country_id: 1,
                check_list_id: 48,
            },
            {
                country_id: 1,
                check_list_id: 49,
            },
            {
                country_id: 1,
                check_list_id: 50,
            },
            {
                country_id: 1,
                check_list_id: 51,
            },
            {
                country_id: 2,
                check_list_id: 48,
            },
            {
                country_id: 2,
                check_list_id: 49,
            },
            {
                country_id: 2,
                check_list_id: 50,
            },
            {
                country_id: 2,
                check_list_id: 51,
            },
            {
                country_id: 3,
                check_list_id: 48,
            },
            {
                country_id: 3,
                check_list_id: 49,
            },
            {
                country_id: 3,
                check_list_id: 50,
            },
            {
                country_id: 3,
                check_list_id: 51,
            },
        ]);
    }
}
exports.default = NewCheckListSeeder;
//# sourceMappingURL=NewCheckList.js.map