"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const StudyArea_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/StudyArea"));
let list = [
    {
        name: 'International Business with Tourism Management (1 Year Top-Up)',
    },
    {
        name: 'International Tourism Management with French',
    },
    {
        name: 'International Tourism Management with French (with Placement Year)',
    },
    {
        name: 'International Tourism Management with Spanish',
    },
    {
        name: 'International Tourism Management with Spanish (with Placement Year)',
    },
    {
        name: 'Languages with Tourism (French)',
    },
    {
        name: 'Languages with Tourism (French) (with Placement Year)',
    },
    {
        name: 'Languages with Tourism (French) with Foundation Year',
    },
    {
        name: 'Languages with Tourism (French) with Foundation Year (with Placement Year)',
    },
    {
        name: 'Languages with Tourism (Spanish)',
    },
    {
        name: 'Languages with Tourism (Spanish) (with Placement Year)',
    },
    {
        name: 'Languages with Tourism (Spanish) with Foundation Year',
    },
    {
        name: 'Languages with Tourism (Spanish) with Foundation Year (with Placement Year)',
    },
    {
        name: 'International Tourism Management',
    },
    {
        name: 'International Tourism Management (with Placement Year)',
    },
    {
        name: 'International Tourism Management (1 Year Top-Up)',
    },
    {
        name: 'International Tourism Management with Foundation Year',
    },
    {
        name: 'International Tourism Management with Foundation Year (with Placement Year)',
    },
    {
        name: 'International Tourism Management with Placement',
    },
    {
        name: 'Infection Prevention & Control',
    },
    {
        name: 'Business Management and Tourism',
    },
    {
        name: 'Computer Science and Tourism',
    },
    {
        name: 'Conservation Biology and Tourism',
    },
    {
        name: 'Contemporary Fashion Design and Tourism',
    },
    {
        name: 'Creative Writing and Tourism',
    },
    {
        name: 'Digital Creativity and Tourism',
    },
    {
        name: 'Drama and Tourism',
    },
    {
        name: 'Early Childhood and Tourism',
    },
    {
        name: 'Economics and Tourism',
    },
    {
        name: 'Education and Tourism',
    },
    {
        name: 'English Language and Tourism',
    },
    {
        name: 'Environmental Change & Tourism',
    },
    {
        name: 'Film & Visual Culture and Tourism',
    },
    {
        name: 'Human Biology and Tourism',
    },
    {
        name: 'Information Technology and Tourism',
    },
    {
        name: 'International Relations and Tourism',
    },
    {
        name: 'Law and Tourism',
    },
    {
        name: 'Mathematics and Tourism',
    },
    {
        name: 'Media & Communication and Tourism',
    },
    {
        name: 'Music and Tourism',
    },
    {
        name: 'Musical Theatre and Tourism',
    },
    {
        name: 'Nutrition and Tourism',
    },
    {
        name: 'Philosophy & Ethics and Tourism',
    },
    {
        name: 'Politics and Tourism',
    },
    {
        name: 'Psychology and Tourism',
    },
    {
        name: 'Social Care and Tourism',
    },
    {
        name: 'Social Policy and Tourism',
    },
    {
        name: 'Sociology and Tourism',
    },
    {
        name: 'Sport & Physical Education and Tourism',
    },
    {
        name: 'Theology and Tourism',
    },
    {
        name: 'Tourism',
    },
    {
        name: 'Tourism Management',
    },
    {
        name: 'Business Management and Tourism (with Foundation Year)',
    },
    {
        name: 'Computer Science and Tourism (with Foundation Year)',
    },
    {
        name: 'Conservation Biology and Tourism (with Foundation Year)',
    },
    {
        name: 'Contemporary Fashion Design and Tourism (with Foundation Year)',
    },
    {
        name: 'Creative Writing and Tourism (with Foundation Year)',
    },
    {
        name: 'Drama and Tourism (with Foundation Year)',
    },
    {
        name: 'Early Childhood and Tourism (with Foundation Year)',
    },
    {
        name: 'Education and Tourism (with Foundation Year)',
    },
    {
        name: 'English Language and Tourism (with Foundation Year)',
    },
    {
        name: 'Environmental Change & Tourism (with Foundation Year)',
    },
    {
        name: 'Film & Visual Culture and Tourism (with Foundation Year)',
    },
    {
        name: 'Human Biology and Tourism (with Foundation Year)',
    },
    {
        name: 'Information Technology and Tourism (with Foundation Year)',
    },
    {
        name: 'International Relations and Tourism (with Foundation Year)',
    },
    {
        name: 'Mathematics and Tourism (with Foundation Year)',
    },
    {
        name: 'Media & Communication and Tourism (with Foundation Year)',
    },
    {
        name: 'Music and Tourism (with Foundation Year)',
    },
    {
        name: 'Musical Theatre and Tourism (with Foundation Year)',
    },
    {
        name: 'Nutrition and Tourism (with Foundation Year)',
    },
    {
        name: 'Politics and Tourism (with Foundation Year)',
    },
    {
        name: 'Psychology and Tourism (with Foundation Year)',
    },
    {
        name: 'Social Care and Tourism (with Foundation Year)',
    },
    {
        name: 'Social Policy and Tourism (with Foundation Year)',
    },
    {
        name: 'Sociology and Tourism (with Foundation Year)',
    },
    {
        name: 'Sport & Physical Education and Tourism (with Foundation Year)',
    },
    {
        name: 'Theology and Tourism (with Foundation Year)',
    },
    {
        name: 'Tourism Management (with Foundation Year)',
    },
    {
        name: 'Business and Tourism',
    },
    {
        name: 'International Tourism Management with German',
    },
    {
        name: 'International Tourism Management with Japanese',
    },
    {
        name: 'International Tourism Management with Mandarin',
    },
    {
        name: 'International Tourism Management with Placement Year',
    },
    {
        name: 'Tourism Management with French',
    },
    {
        name: 'Tourism Management with German',
    },
    {
        name: 'Tourism Management with Japanese',
    },
    {
        name: 'Tourism Management with Mandarin',
    },
    {
        name: 'Tourism Management with Spanish',
    },
    {
        name: 'Events Management and International Tourism Management',
    },
    {
        name: 'International Tourism Management (Combined)',
    },
    {
        name: 'International Tourism Management (with Foundation Year)',
    },
    {
        name: 'International Tourism Management and Business Management',
    },
    {
        name: 'International Tourism Management and Marketing Management',
    },
    {
        name: 'International Tourism Management with a Language (French or Spanish)',
    },
    {
        name: 'International Tourism Management with a Language (French or Spanish) (with Placement Year)',
    },
    {
        name: 'International Tourism Management with International Foundation Year',
    },
    {
        name: 'International Tourism Management with Marketing',
    },
    {
        name: 'International Tourism Management with Marketing with Foundation Year',
    },
    {
        name: 'Business and Tourism Management',
    },
    {
        name: 'Business and Tourism Management with Foundation Year',
    },
    {
        name: 'Business and Tourism Management with Sandwich Placement',
    },
    {
        name: 'Tourism and Marketing Management with Foundation Year',
    },
    {
        name: 'Tourism and Marketing Management with Sandwich Placement',
    },
    {
        name: 'Tourism Management with Foundation Year',
    },
    {
        name: 'Tourism Management with Sandwich Placement',
    },
    {
        name: 'International Tourism Management (Foundation Entry)',
    },
    {
        name: 'Management in Tourism',
    },
    {
        name: 'International Tourism & Airline Management',
    },
    {
        name: 'International Tourism & Marketing Management',
    },
    {
        name: 'Events and Conventions Management',
    },
    {
        name: 'Innovation and Entrepreneurship in Tourism (Post-Baccalaureate)',
    },
    {
        name: 'Managing Festivals and Events (Post-Baccalaureate)',
    },
    {
        name: 'Tourism Destination Development (Post-Baccalaureate)',
    },
    {
        name: 'Tourism Experience Management (Post-Baccalaureate)',
    },
    {
        name: 'Tourism Management (2 Years)',
    },
    {
        name: 'Tourism Studies',
    },
    {
        name: 'Events Management (Extended)',
    },
    {
        name: 'Tourism Management (Extended)',
    },
    {
        name: 'Tourism Management with Language',
    },
    {
        name: 'Events Management (Foundation Year)',
    },
    {
        name: 'International Tourism Management (Foundation Year)',
    },
    {
        name: 'Business Administration (Events Management)',
    },
    {
        name: 'Business Administration (International Tourism Management)',
    },
    {
        name: 'Marketing with International Tourism Management',
    },
    {
        name: 'Travel, Aviation and Tourism Management',
    },
    {
        name: 'Events Management (with Placement)',
    },
    {
        name: 'Events Management (Top-Up)',
    },
    {
        name: 'International Tourism Management (Top-Up)',
    },
    {
        name: 'Events & Experience Management',
    },
    {
        name: 'Tourism & Cultural Policy',
    },
    {
        name: 'International Events Management',
    },
    {
        name: 'International Events Management (Work Experience Route)',
    },
    {
        name: 'International Tourism and Aviation Management',
    },
    {
        name: 'Events & Experience Management (Goldsmiths, University of London)',
    },
    {
        name: 'Tourism & Cultural Policy (Goldsmiths, University of London)',
    },
    {
        name: 'Sustainable Tourism (University of Sunderland)',
    },
    {
        name: 'Tourism and Aviation (University of Sunderland)',
    },
    {
        name: 'Tourism and Events (University of Sunderland)',
    },
    {
        name: 'Infection Prevention and Control',
    },
    {
        name: 'International Tourism and Aviation Management with Internship',
    },
    {
        name: 'International Tourism and Aviation Management (Extended Masters)',
    },
    {
        name: 'International Tourism and Aviation Management (Enhanced Extended)',
    },
    {
        name: 'Responsible Tourism Management',
    },
    {
        name: 'Responsible Tourism Management (1 Year)',
    },
    {
        name: 'Tourism Marketing Management',
    },
    {
        name: 'International Hotel and Tourism Management',
    },
    {
        name: 'Sustainable Tourism',
    },
    {
        name: 'Tourism and Aviation',
    },
    {
        name: 'Events and Experience Management',
    },
    {
        name: 'Events and Experience Management (with Professional Experience)',
    },
    {
        name: 'MBA (Sustainable Tourism)',
    },
    {
        name: 'Management & Sustainable Tourism',
    },
    {
        name: 'Sustainable Tourism & Global Challenges (Dumfries Campus)',
    },
    {
        name: 'Tourism Development & Culture (Erasmus Mundus Joint Master) (Dumfries Campus)',
    },
    {
        name: 'Sustainable Tourism Development & Management',
    },
    {
        name: 'Events & Experience Management',
    },
    {
        name: 'Tourism & Cultural Policy',
    },
    {
        name: 'International Tourism Management',
    },
    {
        name: 'International Tourism and Aviation Management',
    },
    {
        name: 'Events & Experience Management (Goldsmiths, University of London)',
    },
    {
        name: 'Tourism & Cultural Policy (Goldsmiths, University of London)',
    },
    {
        name: 'Sustainable Tourism (University of Sunderland)',
    },
    {
        name: 'Tourism and Aviation (University of Sunderland)',
    },
    {
        name: 'Tourism and Events (University of Sunderland)',
    },
    {
        name: 'Tourism and Hospitality (University of Sunderland)',
    },
    {
        name: 'International Hospitality and Tourism Management (University of Central Lancashire)',
    },
    {
        name: 'Internship in International Tourism, Hospitality and Event Management (University of Central Lancashire)',
    },
    {
        name: 'Infection Prevention and Control',
    },
    {
        name: 'International Tourism and Aviation Management with Internship',
    },
    {
        name: 'International Tourism and Aviation Management (Extended Masters)',
    },
    {
        name: 'Luxury Hospitality Management with Internship',
    },
    {
        name: 'Luxury Hospitality Management (Extended Masters)',
    },
    {
        name: 'International Tourism and Aviation Management (Enhanced Extended)',
    },
    {
        name: 'Responsible Tourism Management',
    },
    {
        name: 'Responsible Tourism Management (1 Year)',
    },
    {
        name: 'Hospitality with Tourism Management',
    },
    {
        name: 'Hospitality with Tourism Management with Placement',
    },
    {
        name: 'International Hospitality Management with Placement',
    },
    {
        name: 'International Tourism Management with Placement',
    },
    {
        name: 'Marketing Management for Events, Hospitality and Tourism',
    },
    {
        name: 'Marketing Management for Events, Hospitality and Tourism with Placement',
    },
    {
        name: 'International Tourism and Hospitality Management',
    },
    {
        name: 'International Tourism and Hospitality Management (Belfast Campus)',
    },
    {
        name: 'International Tourism and Hospitality Management (with Advanced Practice)',
    },
    {
        name: 'Business with Hospitality and Tourism Management (1 Year)',
    },
    {
        name: 'Business with Hospitality and Tourism Management (with Advanced Practice in Second Year)',
    },
    {
        name: 'Business with Hospitality and Tourism Management (with Study Abroad in Second Year)',
    },
    {
        name: 'Business with Hospitality and Tourism Management',
    },
    {
        name: 'Tourism Management',
    },
    {
        name: 'Tourism Marketing Management',
    },
    {
        name: 'Tourism Management (2 Years)',
    },
    {
        name: 'International Hospitality, Events and Tourism Management',
    },
    {
        name: 'International Hotel and Tourism Management',
    },
    {
        name: 'International Business with Tourism and Hospitality',
    },
    {
        name: 'International Business with Tourism and Hospitality (Professional Practice)',
    },
    {
        name: 'Management with Tourism and Hospitality',
    },
    {
        name: 'Management with Tourism and Hospitality (Professional Practice)',
    },
    {
        name: 'Sustainable Tourism',
    },
    {
        name: 'Tourism and Aviation',
    },
    {
        name: 'Tourism and Events',
    },
    {
        name: 'Tourism and Hospitality',
    },
    {
        name: 'Events and Experience Management',
    },
    {
        name: 'Events and Experience Management (with Professional Experience)',
    },
    {
        name: 'International Hospitality and Tourism Management',
    },
    {
        name: 'MBA (Sustainable Tourism)',
    },
    {
        name: 'Management & Sustainable Tourism',
    },
    {
        name: 'Sustainable Tourism & Global Challenges (Dumfries Campus)',
    },
    {
        name: 'Tourism Development & Culture (Erasmus Mundus Joint Master) (Dumfries Campus)',
    },
    {
        name: 'Events and Hospitality Leadership',
    },
    {
        name: 'Innovation and Sustainable Hospitality',
    },
    {
        name: 'Sustainable Tourism Development & Management',
    },
    {
        name: 'International Tourism, Hospitality and Event Management',
    },
    {
        name: 'International Tourism, Hospitality and Event Management with Placement Year',
    },
    {
        name: 'International Hospitality Management with Digital Innovation',
    },
    {
        name: 'International Hospitality and Event Management',
    },
    {
        name: 'Internship in International Tourism, Hospitality and Event Management',
    },
];
class NewStudyAreaSeeder extends Seeder_1.default {
    async run() {
        let rows = list.map((x) => {
            x['industry_id'] = 9;
            x['sub_industry_id'] = 37;
            return x;
        });
        await StudyArea_1.default.createMany(rows);
    }
}
exports.default = NewStudyAreaSeeder;
//# sourceMappingURL=NewStudyArea.js.map