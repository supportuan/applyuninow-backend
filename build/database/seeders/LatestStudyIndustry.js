"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const StudyIndustry_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/StudyIndustry"));
class LatestStudyIndustrySeeder extends Seeder_1.default {
    async run() {
        await StudyIndustry_1.default.createMany([
            { name: 'Agriculture &Forestry' },
            { name: 'Arts, Design & Architecture' },
            { name: 'Applied Science & Professions' },
            { name: 'Business & Management' },
            { name: 'Computer Science & IT' },
            { name: 'Education & Training' },
            { name: 'Engineering & Technology' },
            { name: 'Environmental Studies & Earth Sciences' },
            { name: 'Hospitality, Leisure & Sports' },
            { name: 'Humanities, Journalism, Media & Law' },
            { name: 'Medicine & Health' },
            { name: 'Natural Sciences & Mathematics' },
            { name: 'Social Sciences' },
        ]);
    }
}
exports.default = LatestStudyIndustrySeeder;
//# sourceMappingURL=LatestStudyIndustry.js.map