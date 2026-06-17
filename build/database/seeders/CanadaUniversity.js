"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const University_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/University"));
class CanadaUniversitySeeder extends Seeder_1.default {
    async run() {
        await University_1.default.createMany([
            {
                name: 'Adler University',
            },
            {
                name: 'Algonquin College',
            },
            {
                name: 'Acadia University',
            },
            {
                name: 'Algoma University',
            },
            {
                name: 'Aviron Technical Institute',
            },
            {
                name: 'Avalon College',
            },
            {
                name: "Bishop's University",
            },
            {
                name: 'Brescia University College',
            },
            {
                name: 'British Columbia Institute of Technology',
            },
            {
                name: 'Brock University',
            },
            {
                name: 'Canada College',
            },
            {
                name: 'Canadian College',
            },
            {
                name: 'Cape Breton University',
            },
            {
                name: 'Camosun College',
            },
            {
                name: 'Capilano University',
            },
            {
                name: 'College of Rockies',
            },
            {
                name: 'College of New Caledonia',
            },
            {
                name: 'Canadian Institute of Management and Technology[CMIT]',
            },
            {
                name: 'College CDI',
            },
            {
                name: 'Conestoga College',
            },
            {
                name: 'Cambrian College ',
            },
            {
                name: 'Canadore College',
            },
            {
                name: 'Coquitlam College',
            },
            {
                name: 'Codecore College',
            },
            {
                name: 'CEGEP Gaspe College',
            },
            {
                name: 'CEGEP - Marie Victorin College ',
            },
            {
                name: 'CDE College',
            },
            {
                name: 'CCSQ College',
            },
            {
                name: 'College M',
            },
            {
                name: 'College St Michel',
            },
            {
                name: 'College CGH Milestone',
            },
            {
                name: 'Georgian college',
            },
            {
                name: 'Herzing College',
            },
            {
                name: 'Fairleigh Dickinson University',
            },
            {
                name: 'Fanshawe College',
            },
            {
                name: 'Flair college of Management and Technology',
            },
            {
                name: 'ITD College',
            },
            {
                name: 'ISI College',
            },
            {
                name: 'Kwantlen Polytechnic University',
            },
            {
                name: 'Kensley College',
            },
            {
                name: "King's University College",
            },
            {
                name: 'Loyalist College',
            },
            {
                name: 'Lambton College',
            },
            {
                name: 'Laurentian University',
            },
            {
                name: 'Lasalle College',
            },
            {
                name: 'Lakehead University',
            },
            {
                name: 'Lakeland College',
            },
            {
                name: 'Medicine Hat College',
            },
            {
                name: 'Manitoba Institute of Trades and Technology',
            },
            {
                name: 'Mount Allison University',
            },
            {
                name: 'Mount Saint Vincent University',
            },
            {
                name: 'Montreal College of Information and Technology',
            },
            {
                name: 'Matrix College',
            },
            {
                name: 'Multihexa College',
            },
            {
                name: 'North Island College',
            },
            {
                name: 'New York Institute of Technology',
            },
            {
                name: 'Niagara College',
            },
            {
                name: 'New Brunswick Community College ',
            },
            {
                name: 'NorQuest College',
            },
            {
                name: 'Northern College ',
            },
            {
                name: 'Northern Lights College',
            },
            {
                name: 'Pacific Link College',
            },
            {
                name: 'Pacific Coast Community College',
            },
            {
                name: 'Parkland College',
            },
            {
                name: 'Royal Roads University ',
            },
            {
                name: 'Red River College',
            },
            {
                name: 'St.Clair College ',
            },
            {
                name: 'St.Francis Xavier University ',
            },
            {
                name: 'Sheridan College ',
            },
            {
                name: 'St. Lawrence College',
            },
            {
                name: 'Seneca College',
            },
            {
                name: 'Selkirk College ',
            },
            {
                name: 'Sault College',
            },
            {
                name: 'Trinity Western University ',
            },
            {
                name: 'Toronto Film School',
            },
            {
                name: 'Trent University',
            },
            {
                name: 'Toronto Institute of Pharmaceutical Technology',
            },
            {
                name: 'University of Guelph',
            },
            {
                name: 'University of Lethbridge',
            },
            {
                name: 'University of Northern British Columbia',
            },
            {
                name: 'University of Saskatchewan',
            },
            {
                name: 'University of Windsor',
            },
            {
                name: 'University of the Fraser Valley',
            },
            {
                name: 'University Canada West',
            },
            {
                name: 'Universal College',
            },
            {
                name: 'University of Prince Edward Island',
            },
            {
                name: 'University of Regina',
            },
            {
                name: 'Vancouver Institute of Media Arts',
            },
            {
                name: 'Vancouver Community College',
            },
            {
                name: 'Vancouver Island University',
            },
            {
                name: 'Wilfrid Laurier University',
            },
            {
                name: 'Yorkville University ',
            },
            {
                name: 'Yukon College',
            },
        ].map((x) => {
            x['country_id'] = 3;
            return x;
        }));
    }
}
exports.default = CanadaUniversitySeeder;
//# sourceMappingURL=CanadaUniversity.js.map