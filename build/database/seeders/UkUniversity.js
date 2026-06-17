"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const University_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/University"));
class UkUniversitySeeder extends Seeder_1.default {
    async run() {
        await University_1.default.createMany([
            {
                name: 'Abertay University',
            },
            {
                name: 'Aberystwyth University',
            },
            {
                name: 'Arts Bournemouth University',
            },
            {
                name: 'Anglia Ruskin University',
            },
            {
                name: 'Aston University',
            },
            {
                name: 'Bangor University',
            },
            {
                name: 'Bath Spa University',
            },
            {
                name: 'Birmingham City University',
            },
            {
                name: 'Brunel University London',
            },
            {
                name: 'Canterbury Christ Church University',
            },
            {
                name: 'Cardiff Metropolitan University',
            },
            {
                name: 'City University london',
            },
            {
                name: 'Crainfield University',
            },
            {
                name: 'Coventry University',
            },
            {
                name: 'De Montfort University',
            },
            {
                name: 'Edinburgh Napier University',
            },
            {
                name: 'Edge Hill University',
            },
            {
                name: 'Glasgow Caledonian',
            },
            {
                name: 'Goldsmith University',
            },
            {
                name: 'Heriot Watt University',
            },
            {
                name: 'Kings College London',
            },
            {
                name: 'Kingston University',
            },
            {
                name: 'Leeds Becket University',
            },
            {
                name: 'Liverpool John Moores',
            },
            {
                name: 'London Metropolitan University',
            },
            {
                name: 'Manchester Metropolitan University',
            },
            {
                name: 'Middlesex University',
            },
            {
                name: 'Newcastle',
            },
            {
                name: 'Northumbria Newcastle',
            },
            {
                name: 'Northumbria University London Campus',
            },
            {
                name: 'Nottingham Trent University',
            },
            {
                name: 'Plymouth University',
            },
            {
                name: 'Queen Mary University London',
            },
            {
                name: 'Queens University Belfast',
            },
            {
                name: 'Ravensbourne University London',
            },
            {
                name: 'Regent University',
            },
            {
                name: 'Shefield Hallam University',
            },
            {
                name: 'Solent University',
            },
            {
                name: 'St. Mary University (London)',
            },
            {
                name: 'Swansea University',
            },
            {
                name: 'Teesside University',
            },
            {
                name: 'UCLAN',
            },
            {
                name: 'Ulster University(LONDON & BIRMINGHAM)',
            },
            {
                name: 'University College Birmingham',
            },
            {
                name: 'University Of Aberdeen',
            },
            {
                name: 'University of Bedforshire',
            },
            {
                name: 'University of Bristol',
            },
            {
                name: 'University of Bradford',
            },
            {
                name: 'University of Brighton',
            },
            {
                name: 'University of Chester',
            },
            {
                name: 'University of Creative Arts',
            },
            {
                name: 'University of Derby',
            },
            {
                name: 'University of Durham',
            },
            {
                name: 'University of Dundee',
            },
            {
                name: 'University of East Anglia',
            },
            {
                name: 'University of East London',
            },
            {
                name: 'University of Essex',
            },
            {
                name: 'University of Greenwich',
            },
            {
                name: 'University of Hertfordshire',
            },
            {
                name: 'University of Law',
            },
            {
                name: 'University of Leeds',
            },
            {
                name: 'University of Leicester',
            },
            {
                name: 'University Of Liverpool',
            },
            {
                name: 'University of Northampton',
            },
            {
                name: 'University of Portsmouth',
            },
            {
                name: 'Royal Holloway University london',
            },
            {
                name: 'University of Salford',
            },
            {
                name: 'University of Strathclyde',
            },
            {
                name: 'University of South Wales',
            },
            {
                name: 'University of Stirling',
            },
            {
                name: 'University of Sunderland',
            },
            {
                name: 'University of Surrey',
            },
            {
                name: 'University of Sheffield',
            },
            {
                name: 'University Of Sussex',
            },
            {
                name: 'University OF West England',
            },
            {
                name: 'University OF West London',
            },
            {
                name: 'University of West of Scotland',
            },
            {
                name: 'University of Westminster',
            },
            {
                name: 'University of Worcester',
            },
            {
                name: 'Wrexham Glyndwr University',
            },
        ].map((x) => {
            x['country_id'] = 2;
            return x;
        }));
    }
}
exports.default = UkUniversitySeeder;
//# sourceMappingURL=UkUniversity.js.map