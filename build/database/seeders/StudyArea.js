"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const StudyArea_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/StudyArea"));
class StudyAreaSeeder extends Seeder_1.default {
    async run() {
        await StudyArea_1.default.createMany([
            {
                "id": 16309,
                "name": "Geography with Year Abroad (4 Years)",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16310,
                "name": "Geology and Physical Geography (4 Years)",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16311,
                "name": "Geology and Physical Geography with an International Year",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16312,
                "name": "Global Environmental Change and Sustainability",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16313,
                "name": "Global Environmental Change and Sustainability (4 Years)",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16314,
                "name": "Global Environmental Change and Sustainability with Year Abroad",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16315,
                "name": "Environmental Conservation",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16316,
                "name": "Environmental Conservation (with Placement Year)",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16317,
                "name": "Environmental Science (with Placement Year) (4 Years)",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16318,
                "name": "Marine Environmental Studies",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16319,
                "name": "Marine Environmental Studies (with Placement Year)",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16320,
                "name": "Physical Geography and Oceanography",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16321,
                "name": "Physical Geography and Oceanography (with Placement Year)",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16322,
                "name": "Applied and Environmental Geology",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16323,
                "name": "Applied and Environmental Geology (with a Year Abroad or Year in Industry)",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16324,
                "name": "Applied and Environmental Geology (4-5 Years)",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16325,
                "name": "Applied and Environmental Geology (with a Year in Industry)",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16326,
                "name": "Environmental Science (with a Year Abroad or Year in Industry)",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16327,
                "name": "Geography (with a Year Abroad or Year in Industry)",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16328,
                "name": "Geography (with a Year Abroad or Year in Industry) (4 Years)",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16329,
                "name": "Human Geography (with a Year Abroad or Year in Industry)",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16330,
                "name": "Physical Geography and Geology",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16331,
                "name": "Physical Geography and Geology (with a Year Abroad or Year in Industry)",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16332,
                "name": "Chemical Engineering with Energy and Environment",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16333,
                "name": "Environmental Management with Professional Placement",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16334,
                "name": "Environmental Science with a Research Placement",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16335,
                "name": "Environmental Science with an Integrated Foundation Year",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16336,
                "name": "Environmental Science with Industrial Experience",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16337,
                "name": "Environmental Science with International Study",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16338,
                "name": "Geography with International Study",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16339,
                "name": "Geography with International Study (4 Years)",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16340,
                "name": "Geography with Professional Placement",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16341,
                "name": "Geography with Professional Placement (4 Years)",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16342,
                "name": "Environmental Management with Foundation",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16343,
                "name": "Environmental Management with Placement Year",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16344,
                "name": "Environmental Science with International Foundation Year",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16345,
                "name": "Environmental Science with Professional Experience",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16346,
                "name": "Geography and Economics (Regional Science)",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16347,
                "name": "Geography and Economics (Regional Science) with Professional Experience",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16348,
                "name": "Geography (Human and Physical)",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16349,
                "name": "Geography (Human and Physical) with Professional Experience",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16350,
                "name": "Geography (Human)",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16351,
                "name": "Geography (Human) with Professional Experience",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16352,
                "name": "Geography (Physical)",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16353,
                "name": "Geography (Physical) with Professional Experience",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16354,
                "name": "Energy and Environmental Technology and Economics",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16355,
                "name": "Architectural Engineering: Environmental Design",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16356,
                "name": "Civil and Environmental Engineering with Internship",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16357,
                "name": "Civil and Environmental Engineering (Extended Masters)",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16358,
                "name": "Interior Environment Design",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16359,
                "name": "Civil and Environmental Engineering (Enhanced Extended)",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16360,
                "name": "Environmental Monitoring, Research and Management",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16361,
                "name": "Environmental Law",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16362,
                "name": "Sustainability and Environmental Modelling",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16363,
                "name": "Applied Environmental Geology",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16364,
                "name": "Civil and Geoenvironmental Engineering",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16365,
                "name": "Environment and Development",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16366,
                "name": "Environmental Design of Buildings",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16367,
                "name": "Environmental Design of Buildings (Distance Learning)",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16368,
                "name": "Environmental Design of Buildings (Distance Learning) (2 Years)",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16369,
                "name": "Environmental Design of Buildings (Distance Learning) (3 Years)",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16370,
                "name": "Environmental Hazards",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16371,
                "name": "Social Science Research Methods (Environmental Planning)",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16372,
                "name": "Social Science Research Methods (Environmental Planning) (1 Year)",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16373,
                "name": "Sustainability Planning and Environmental Policy",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16374,
                "name": "Sustainable Energy and Environment",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16375,
                "name": "Data Science (Environmental Analytics)",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16376,
                "name": "Education for a Sustainable Environment",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16377,
                "name": "Environmental Governance",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16378,
                "name": "Environmental Impact Assessment & Management",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16379,
                "name": "Environmental Monitoring, Modelling and Reconstruction",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16380,
                "name": "International Development: Environment Climate Change and Development",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16381,
                "name": "Pollution & Environmental Control",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16382,
                "name": "Public Health (Environment and Public Health)",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16383,
                "name": "Research Methods with Human Geography",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16384,
                "name": "Research Methods with Planning and Environmental Management",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16385,
                "name": "Secondary Geography",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16386,
                "name": "Secondary School Direct (Geography)",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16387,
                "name": "Built Environment : Environmental Design and Engineering",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16388,
                "name": "Civil Engineering (with Environmental Systems)",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16389,
                "name": "Connected Environments",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16390,
                "name": "Education (Geography)",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16391,
                "name": "Environment and Sustainable Development",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16392,
                "name": "Environment, Politics and Society",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16393,
                "name": "Environmental Archaeology",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16394,
                "name": "Environmental Systems Engineering",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16395,
                "name": "Learning Environments",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16396,
                "name": "Materials for Energy and Environment",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16397,
                "name": "Smart Energy and the Built Environment",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16398,
                "name": "Applied Environmental Hydrogeology",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16399,
                "name": "Environment, Culture and Society",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16400,
                "name": "Environmental Protection and Management",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16401,
                "name": "Global Environment and Climate Change Law",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16402,
                "name": "Global Environment Challenges (Online Learning)",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16403,
                "name": "Global Environment, Politics and Society",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16404,
                "name": "Outdoor Environmental and Sustainability Education",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16405,
                "name": "Environment and Sustainability (1 Year)",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16406,
                "name": "Environmental Law, Policy and Governance",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16407,
                "name": "Geography (Certificate)",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16408,
                "name": "Geography (Diploma)",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16409,
                "name": "Global Environmental Politics and Policy",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16410,
                "name": "Management with Business Strategy and the Environment",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16411,
                "name": "Environmental and Business Management",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16412,
                "name": "Environmental Forestry",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16413,
                "name": "Forestry and Environmental Management",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16414,
                "name": "Marine Environmental Protection",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16415,
                "name": "MBA (Environmental Management)",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16416,
                "name": "Secondary Geography (English)",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16417,
                "name": "Secondary Geography (Welsh)",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16418,
                "name": "Environment, Development and Politics",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16419,
                "name": "Environmental Health",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16420,
                "name": "Environments and their Management",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16421,
                "name": "Health, Safety and Environment Management",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16422,
                "name": "Public and Environmental Health Sciences",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16423,
                "name": "Secondary Education (QTS) - Geography",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16424,
                "name": "Applied Data Science (Environment and Sustainability)",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16425,
                "name": "Cultures and Environments of Health",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16426,
                "name": "Environment and Human Health",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16427,
                "name": "Environmental Intelligence",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16428,
                "name": "Marine Environmental Management",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16429,
                "name": "Mining Environmental Management",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16430,
                "name": "Surveying and Land/Environmental Management",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16431,
                "name": "Earth Futures: Environments, Communities, Relationships",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16432,
                "name": "Environment & Sustainable Development",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16433,
                "name": "Environment, Culture & Communication (Dumfries Campus)",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16434,
                "name": "Environmental Futures: Sustainable Systems",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16435,
                "name": "Environmental Risk Management (Dumfries Campus)",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16436,
                "name": "Nuclear & Environmental Physics",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16437,
                "name": "Sustainable Water Environments",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16438,
                "name": "Energy Law and the Environment",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16439,
                "name": "Environmental Management for Agriculture",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16440,
                "name": "Outdoor Environmental Education",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16441,
                "name": "Outdoor Environmental Education (1 Year)",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16442,
                "name": "Sustainable Planning and Environmental Management",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16443,
                "name": "Water and Environmental Management",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16444,
                "name": "Environment and Law",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16445,
                "name": "Human Rights and the Environment",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16446,
                "name": "Theatre for Social, Political and Environmental Change",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16447,
                "name": "Volcanology and the Environment",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16448,
                "name": "Energy and Environmental Law with Professional Skills",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16449,
                "name": "Environmental Pollution and Remediation",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16450,
                "name": "Energy and Environmental Law with Dissertation",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16451,
                "name": "Literatures, Environments and Places",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16452,
                "name": "Environmental Consultancy",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16453,
                "name": "Environmental Geochemistry",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16454,
                "name": "Environmental Humanities",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16455,
                "name": "Secondary (Geography)",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16456,
                "name": "Sustainable Environmental Management",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16457,
                "name": "Environmental and Engineering Geology",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16458,
                "name": "Agricultural and Environmental Science",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16459,
                "name": "Human Geography Research",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16460,
                "name": "International Marine Environmental Consultancy (IMEC)",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16461,
                "name": "Planning and Environment Research",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16462,
                "name": "Energy and Sustainability: Energy, Environment and Buildings",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16463,
                "name": "Environmental Monitoring and Assessment",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16464,
                "name": "Environmental Pollution Control",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16465,
                "name": "Marine Environment and Resources",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16466,
                "name": "Geography (Environmental Studies)",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16467,
                "name": "Geography (Water) (Arta)",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16468,
                "name": "Geography (Water) (Environmental Studies)",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16469,
                "name": "Geography (Water)",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16470,
                "name": "Environmental Design",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16471,
                "name": "Geography (1 Year)",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16472,
                "name": "Geography (2 Years)",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16473,
                "name": "Natural Resources, Energy and Environmental Law",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16474,
                "name": "Energy and Environmental Performance of Buildings",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16475,
                "name": "Environmental Assessment and Management",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16476,
                "name": "Geographical Information Systems and Environmental Management",
                "industry_id": 8,
                "deleted_at": null,
                "sub_industry_id": 34
            },
            {
                "id": 16477,
                "name": "History and Journalism",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16478,
                "name": "Journalism",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16479,
                "name": "Journalism, Politics and History",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16480,
                "name": "Journalism, Public Relations with Media",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16481,
                "name": "Journalism, Public Relations with Media (with Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16482,
                "name": "Journalism, Public Relations with Media with Foundation Year",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16483,
                "name": "Journalism, Public Relations with Media with Foundation Year (with Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16484,
                "name": "Multimedia Journalism",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16485,
                "name": "Multimedia Journalism (with Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16486,
                "name": "Multimedia Journalism with Foundation Year",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16487,
                "name": "Multimedia Journalism with Foundation Year (with Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16488,
                "name": "Sports Journalism",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16489,
                "name": "Sports Journalism (with Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16490,
                "name": "Sports Journalism with Foundation Year",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16491,
                "name": "Sports Journalism with Foundation Year (with Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16492,
                "name": "Broadcast and Digital Journalism",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16493,
                "name": "Broadcast and Digital Journalism with Foundation Year",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16494,
                "name": "Journalism with Foundation Year",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16495,
                "name": "Journalism and Criminology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16496,
                "name": "Journalism and Criminology (Including Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16497,
                "name": "Journalism and Criminology (Including Year Abroad)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16498,
                "name": "Journalism and English Language",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16499,
                "name": "Journalism and English Language (Including Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16500,
                "name": "Journalism and English Language (Including Year Abroad)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16501,
                "name": "Journalism and Film",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16502,
                "name": "Journalism and Film (Including Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16503,
                "name": "Journalism and Film (Including Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16504,
                "name": "Journalism and Film (Including Year Abroad)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16505,
                "name": "Journalism and Literature",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16506,
                "name": "Journalism and Literature (Including Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16507,
                "name": "Journalism and Literature (Including Year Abroad)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16508,
                "name": "Journalism and Modern Languages",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16509,
                "name": "Journalism and Politics",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16510,
                "name": "Journalism and Politics (Including Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16511,
                "name": "Journalism and Politics (Including Year Abroad)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16512,
                "name": "Journalism and Sociology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16513,
                "name": "Journalism and Sociology (Including Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16514,
                "name": "Journalism and Sociology (Including Year Abroad)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16515,
                "name": "Journalism with Human Rights",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16516,
                "name": "Journalism with Human Rights (Including Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16517,
                "name": "Journalism with Human Rights (Including Year Abroad)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16518,
                "name": "Multimedia Journalism (Including Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16519,
                "name": "Multimedia Journalism (Including Year Abroad)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16520,
                "name": "Education & Journalism, Media and Communication",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16521,
                "name": "English & Journalism, Media and Communication",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16522,
                "name": "English and Creative Writing & Journalism, Media and Communication",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16523,
                "name": "French & Journalism, Media and Communication",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16524,
                "name": "History & Journalism, Media and Communication",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16525,
                "name": "Journalism, Media and Communication & Economics",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16526,
                "name": "Journalism, Media and Communication & Human Resource Management",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16527,
                "name": "Journalism, Media and Communication & Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16528,
                "name": "Journalism, Media and Communication & Politics and International Relations",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16529,
                "name": "Journalism, Media and Communication & Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16530,
                "name": "Journalism, Media and Communication & Social Policy",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16531,
                "name": "Journalism, Media and Communication & Spanish",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16532,
                "name": "Journalism and Media",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16533,
                "name": "Journalism and Media (4 Years)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16534,
                "name": "Journalism and Media (6 Years)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16535,
                "name": "Journalism and Media with Foundation Year",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16536,
                "name": "Journalism and Media with Foundation Year (6 Years)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16537,
                "name": "Language and/with Journalism (French, German, Italian, Japanese or Spanish)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16538,
                "name": "Language and/with Journalism (French, German, Italian, Japanese or Spanish) (4 Years)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16539,
                "name": "Language and/with Journalism (French, German, Italian, Japanese or Spanish) with Foundation Year",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16540,
                "name": "Language and/with Journalism (French, German, Italian, Japanese or Spanish) with Foundation Year (6 Years)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16541,
                "name": "Language and/with Journalism with International Experience",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16542,
                "name": "Creative Writing and Journalism",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16543,
                "name": "English Language and Journalism",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16544,
                "name": "Journalism (Combined)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16545,
                "name": "Journalism (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16546,
                "name": "Journalism and English Literature",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16547,
                "name": "Music Journalism",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16548,
                "name": "Music Journalism (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16549,
                "name": "Sports Journalism (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16550,
                "name": "English Literature and Journalism",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16551,
                "name": "Journalism and Creative Writing",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16552,
                "name": "Philosophy and Journalism",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16553,
                "name": "Politics & International Relations and Journalism",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16554,
                "name": "Creative Writing and Publishing",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16555,
                "name": "Creative Writing and Publishing with Foundation Year",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16556,
                "name": "Football Journalism",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16557,
                "name": "Football Journalism with Foundation Year",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16558,
                "name": "Specialist Sports Journalism",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16559,
                "name": "Specialist Sports Journalism with Foundation Year",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16560,
                "name": "Entertainment Journalism",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16561,
                "name": "Fashion Journalism",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16562,
                "name": "Media, Communication and Journalism",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16563,
                "name": "Public Relations and Journalism",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16564,
                "name": "English and Journalism",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16565,
                "name": "Journalism Studies",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16566,
                "name": "Journalism and Public Relations",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16567,
                "name": "Magazine Journalism",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16568,
                "name": "Digital Media Production and Journalism",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16569,
                "name": "Journalism and Media & Culture",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16570,
                "name": "Journalism and Screenwriting",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16571,
                "name": "Fashion Marketing and Journalism",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16572,
                "name": "Fashion Marketing and Journalism (Including Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16573,
                "name": "Journalism (Including Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16574,
                "name": "Journalism, Film and Television Studies",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16575,
                "name": "Journalism, Film and Television Studies (Including Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16576,
                "name": "International Journalism",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16577,
                "name": "International Journalism (Foundation Entry)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16578,
                "name": "Journalism (Foundation Entry)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16579,
                "name": "Sports Journalism (Foundation Entry)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16580,
                "name": "English and Journalism with a Foundation Year",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16581,
                "name": "Journalism with a Foundation Year",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16582,
                "name": "Sports Journalism with a Foundation Year",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16583,
                "name": "Journalism and Publishing",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16584,
                "name": "Publishing",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16585,
                "name": "English Literature and Publishing",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16586,
                "name": "Media Communications and Publishing",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16587,
                "name": "Fashion Communication: Fashion Journalism",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16588,
                "name": "Fashion Journalism and Content Creation",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16589,
                "name": "Magazine Journalism and Publishing",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16590,
                "name": "Photojournalism and Documentary Photography",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16591,
                "name": "Journalism and Communications (Level 6)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16592,
                "name": "Magazine Journalism and Production",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16593,
                "name": "Journalism and Media Studies",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16594,
                "name": "Journalism and Media Studies (with Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16595,
                "name": "Welsh with Journalism",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16596,
                "name": "Welsh with Journalism (with Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16597,
                "name": "Digital Journalism",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16598,
                "name": "Television Journalism",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16599,
                "name": "Broadcast Journalism",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16600,
                "name": "Data Journalism",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16601,
                "name": "Erasmus Mundus Masters: Journalism, Media and Globalisation",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16602,
                "name": "Financial Journalism",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16603,
                "name": "Interactive Journalism",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16604,
                "name": "International Publishing",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16605,
                "name": "Investigative Journalism",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16606,
                "name": "Newspaper Journalism",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16607,
                "name": "Journalism: Arts and Lifestyle Journalism",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16608,
                "name": "Journalism: Audio and Video Journalism",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16609,
                "name": "Journalism: Social Justice Journalism",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16610,
                "name": "Photojournalism and Documentary Photography (Online)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16611,
                "name": "Computational and Data Journalism",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16612,
                "name": "Journalism, Media And Communications",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16613,
                "name": "News Journalism",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16614,
                "name": "Journalism (Arts)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16615,
                "name": "Journalism (Science and Environment)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16616,
                "name": "Journalism (Sports)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16617,
                "name": "Journalism (War and International Human Rights)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16618,
                "name": "Multimedia Journalism (Broadcast)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16619,
                "name": "Multimedia Journalism (Broadcast) (2 Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16620,
                "name": "Multimedia Journalism (Print & Online)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16621,
                "name": "Multimedia Journalism (Print & Online) (2 Years)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16622,
                "name": "Documentary Journalism",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16623,
                "name": "Journalism (Certificate)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16624,
                "name": "Journalism (Diploma)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16625,
                "name": "Journalism (Online)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16626,
                "name": "Digital Publishing",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16627,
                "name": "Publishing Media",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16628,
                "name": "Journalism (Audio, Docs and Podcast)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16629,
                "name": "Journalism (Specialist Features)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16630,
                "name": "Journalism & Media Communications",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16631,
                "name": "Journalism and Media Communications with Placement Year",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16632,
                "name": "Journalism and Media Communications with Advanced Research",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16633,
                "name": "Global Journalism",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16634,
                "name": "Journalism and Documentary Practice",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16635,
                "name": "International Journalism with Data Analytics",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16636,
                "name": "International Journalism with Project Management",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16637,
                "name": "Publishing and Contemporary Literature",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16638,
                "name": "Publishing and Creative Writing",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 43
            },
            {
                "id": 16639,
                "name": "Coaching Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16640,
                "name": "Coaching Psychology (1 Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16641,
                "name": "Cognitive Neuroscience and Neuropsychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16642,
                "name": "Cognitive Neuroscience and Neuropsychology (1 Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16643,
                "name": "Health and Clinical Psychological Sciences",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16644,
                "name": "Health and Clinical Psychological Sciences (1 Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16645,
                "name": "Organizational Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16646,
                "name": "Organizational Psychology (Network Learning)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16647,
                "name": "Organizational Psychology (Online)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16648,
                "name": "Psychoanalytic Studies",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16649,
                "name": "Psychoanalytic Studies (Online)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16650,
                "name": "Psychodynamic Counselling and Psychotherapy (3 Years)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16651,
                "name": "Psychodynamic Counselling and Psychotherapy with Children and Adolescents",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16652,
                "name": "Psychodynamics of Human Development",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16653,
                "name": "Psychodynamics of Human Development (2 Years)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16654,
                "name": "Psychological Research Methods",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16655,
                "name": "Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16656,
                "name": "Psychosocial Studies",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16657,
                "name": "Psychosocial Studies (1 Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16658,
                "name": "Art Psychotherapy",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16659,
                "name": "Dance Movement Psychotherapy",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16660,
                "name": "Forensic Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16661,
                "name": "Integrative Counselling and Psychotherapy",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16662,
                "name": "Integrative Counselling and Psychotherapy for Children, Adolescents and Families",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16663,
                "name": "Occupational and Business Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16664,
                "name": "Psychology (Conversion)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16665,
                "name": "Psychology (Conversion) Distance Learning",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16666,
                "name": "Psychology of Forensic and Criminal Behaviour",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16667,
                "name": "Psychology of Sport and Exercise (BPS Accredited)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16668,
                "name": "Sport and Exercise Psychology (Non-Accredited)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16669,
                "name": "Applied Neuropsychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16670,
                "name": "Applied Neuropsychology (Bristol-Based)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16671,
                "name": "Applied Neuropsychology (Distance Learning)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16672,
                "name": "Applied Neuropsychology (Distance Learning) (1 Years)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16673,
                "name": "Clinical Neuropsychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16674,
                "name": "Clinical Neuropsychology (1 Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16675,
                "name": "Clinical Neuropsychology Practice",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16676,
                "name": "Experimental Psychology (Conversion)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16677,
                "name": "Psychology of Education BPS",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16678,
                "name": "Theoretical and Practical Clinical Neuropsychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16679,
                "name": "Forensic Psychology and Mental Health",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16680,
                "name": "Mental Health: Cultural Psychology and Psychiatry",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16681,
                "name": "Mental Health: Cultural Psychology and Psychiatry (1 Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16682,
                "name": "Mental Health: Cultural Psychology and Psychiatry Online",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16683,
                "name": "Mental Health: Cultural Psychology and Psychiatry Online (1 Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16684,
                "name": "Mental Health: Psychological Therapies",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16685,
                "name": "Mental Health: Psychological Therapies (1 Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16686,
                "name": "Mental Health: Psychological Therapies Online",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16687,
                "name": "Mental Health: Psychological Therapies Online (1 Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16688,
                "name": "Psychology: Mental Health Sciences",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16689,
                "name": "Psychodynamic Approaches",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16690,
                "name": "Psychodynamic Counselling",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16691,
                "name": "Psychodynamic Counselling (3 Years)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16692,
                "name": "Psycholinguistics",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16693,
                "name": "Research Methods in Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16694,
                "name": "Sport and Exercise Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16695,
                "name": "Clinical Neuropsychology Knowledge & Practice",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16696,
                "name": "Philosophy of Mind & Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16697,
                "name": "Psychological Science (Conversion)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16698,
                "name": "Psychological Science, Research Methods",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16699,
                "name": "Psychological Studies (Conversion)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16700,
                "name": "Psychology (Conversion) Online Distance Learning",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16701,
                "name": "Cognitive Behavioural Psychotherapy (Adult or Children and Young People)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16702,
                "name": "Forensic Psychology (Online)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16703,
                "name": "Health Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16704,
                "name": "Health Psychology (Online)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16705,
                "name": "Psychology (Online)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16706,
                "name": "Psychology (Online) (2 Years)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16707,
                "name": "Clinical Neuropsychiatry",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16708,
                "name": "Cognitive Behavioural Therapy for Psychosis",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16709,
                "name": "Developmental Psychology & Psychopathology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16710,
                "name": "Early Intervention in Psychosis",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16711,
                "name": "Organisational Psychiatry & Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16712,
                "name": "Philosophy of Medicine & Psychiatry",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16713,
                "name": "Psychiatric Research",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16714,
                "name": "War & Psychiatry",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16715,
                "name": "Applied Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16716,
                "name": "Clinical Health Psychology and Wellbeing",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16717,
                "name": "Criminology with Forensic Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16718,
                "name": "Developmental Psychology in Action",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16719,
                "name": "Psychological Therapies and Interventions",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16720,
                "name": "Psychology Conversion",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16721,
                "name": "Management Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16722,
                "name": "Occupational Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16723,
                "name": "Person-Centred Experiential Counselling and Psychotherapy Practice",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16724,
                "name": "Psychology Research Methods",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16725,
                "name": "Rehabilitation Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16726,
                "name": "Work and Organisational Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16727,
                "name": "Music Psychology in Education, Performance and Wellbeing (Distance Learning)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16728,
                "name": "Psychological Research Methods with Advanced Statistics",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16729,
                "name": "Psychological Research Methods with Data Science",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16730,
                "name": "Psychology and Education",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16731,
                "name": "Psychology and Education (Conversion)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16732,
                "name": "Psychology of Music",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16733,
                "name": "Work Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16734,
                "name": "Foundations in Clinical Psychology & Health Services",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16735,
                "name": "Psychology of the Arts, Neuroaesthetics and Creativity",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16736,
                "name": "Applied Positive Psychology and Coaching Psychology (MAPPCP)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16737,
                "name": "Applied Sport and Exercise Sciences (Sport Psychology)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16738,
                "name": "Business Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16739,
                "name": "Coaching Psychology Supervision",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16740,
                "name": "Occupational and Organisational Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16741,
                "name": "Applied Positive Psychology and Coaching Psychology (MAPPCP) (Distance Learning)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16742,
                "name": "Advanced Counselling and Psychotherapy Studies",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16743,
                "name": "Advanced Counselling and Psychotherapy Studies (Supervision)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16744,
                "name": "Cognitive Behavioural Psychotherapy",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16745,
                "name": "Counselling and Psychotherapy (Professional Training)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16746,
                "name": "Media Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16747,
                "name": "Psychology of Coercive Control",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16748,
                "name": "Supervision in Counselling, Psychotherapy and Helping Relationships",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16749,
                "name": "Marketing and Consumer Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16750,
                "name": "Occupational and Organizational Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16751,
                "name": "Secondary Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16752,
                "name": "Foundations of Clinical Psychology and Mental Health",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16753,
                "name": "Psychological Therapy (12 Months)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16754,
                "name": "Psychological Therapy (18 Months)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16755,
                "name": "Advanced Practice in Psychological Wellbeing",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16756,
                "name": "Environmental Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16757,
                "name": "Psychological Intervention (CBT)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16758,
                "name": "Social Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16759,
                "name": "Business and Organisational Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16760,
                "name": "Sport Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16761,
                "name": "Psychology (Including Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16762,
                "name": "Psychology with Clinical Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16763,
                "name": "Psychology with Cognitive Neuroscience",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16764,
                "name": "Psychology with Forensic Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16765,
                "name": "Criminology and Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16766,
                "name": "Sociology with Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16767,
                "name": "Business and Management with Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16768,
                "name": "Business and Management with Psychology (with Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16769,
                "name": "Business and Management with Psychology with Foundation Year",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16770,
                "name": "Business and Management with Psychology with Foundation Year (with Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16771,
                "name": "Education with Psychology and Counselling",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16772,
                "name": "Education with Psychology and Counselling with Foundation Year",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16773,
                "name": "Marketing with Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16774,
                "name": "Marketing with Psychology (with Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16775,
                "name": "Marketing with Psychology with Foundation Year",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16776,
                "name": "Marketing with Psychology with Foundation Year (with Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16777,
                "name": "Criminology and Psychology (with Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16778,
                "name": "Criminology and Psychology with Foundation Year",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16779,
                "name": "Criminology and Psychology with Foundation Year (with Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16780,
                "name": "Psychology (with Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16781,
                "name": "Psychology with Foundation Year",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16782,
                "name": "Psychology with Foundation Year (with Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16783,
                "name": "Education with Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16784,
                "name": "Education with Psychology (Including Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16785,
                "name": "Psychology (Including Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16786,
                "name": "Criminology with Forensic Psychology with Foundation Year",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16787,
                "name": "Forensic Psychology with Investigation",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16788,
                "name": "Psychology with Criminology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16789,
                "name": "Psychology with Counselling Theory",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16790,
                "name": "Psychology in Education",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16791,
                "name": "Psychology and Criminology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16792,
                "name": "Psychology and Sociology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16793,
                "name": "Accounting & Finance and Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16794,
                "name": "Art & Design History and Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16795,
                "name": "Childhood & Youth and Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16796,
                "name": "Computer Science and Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16797,
                "name": "Conservation Biology and Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16798,
                "name": "Contemporary Fashion Design and Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16799,
                "name": "Contemporary Performance and Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16800,
                "name": "Creative Writing and Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16801,
                "name": "Dance and Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16802,
                "name": "Early Childhood and Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16803,
                "name": "Economics and Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16804,
                "name": "Education and Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16805,
                "name": "English Language and Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16806,
                "name": "English Literature and Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16807,
                "name": "Film & Visual Culture and Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16808,
                "name": "Geography and Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16809,
                "name": "Health & Wellbeing and Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16810,
                "name": "History and Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16811,
                "name": "Human Geography and Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16812,
                "name": "Information Technology and Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16813,
                "name": "International Relations and Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16814,
                "name": "Law and Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16815,
                "name": "Marketing and Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16816,
                "name": "Mathematics and Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16817,
                "name": "Music and Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16818,
                "name": "Music Production and Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16819,
                "name": "Musical Theatre and Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16820,
                "name": "Nutrition and Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16821,
                "name": "Psychology and Religious Studies",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16822,
                "name": "Psychology and Special Educational Needs",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16823,
                "name": "Psychology and Sport & Exercise Science",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16824,
                "name": "Psychology and Sport & Physical Education",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16825,
                "name": "Psychology and Theology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16826,
                "name": "Psychology and Tourism",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16827,
                "name": "Accounting & Finance and Psychology (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16828,
                "name": "Childhood & Youth and Psychology (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16829,
                "name": "Computer Science and Psychology (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16830,
                "name": "Conservation Biology and Psychology (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16831,
                "name": "Contemporary Fashion Design and Psychology (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16832,
                "name": "Contemporary Performance and Psychology (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16833,
                "name": "Creative Writing and Psychology (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16834,
                "name": "Criminology and Psychology (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16835,
                "name": "Dance and Psychology (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16836,
                "name": "Early Childhood and Psychology (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16837,
                "name": "Economics and Psychology (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16838,
                "name": "Education and Psychology (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16839,
                "name": "English Language and Psychology (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16840,
                "name": "English Literature and Psychology (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16841,
                "name": "Film & Visual Culture and Psychology (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16842,
                "name": "Geography and Psychology (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16843,
                "name": "Health & Wellbeing and Psychology (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16844,
                "name": "History and Psychology (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16845,
                "name": "Information Technology and Psychology (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16846,
                "name": "International Relations and Psychology (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16847,
                "name": "Law and Psychology (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16848,
                "name": "Marketing and Psychology (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16849,
                "name": "Mathematics and Psychology (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16850,
                "name": "Music and Psychology (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16851,
                "name": "Music Production and Psychology (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16852,
                "name": "Musical Theatre and Psychology (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16853,
                "name": "Nutrition and Psychology (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16854,
                "name": "Psychology (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16855,
                "name": "Psychology and Religious Studies (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16856,
                "name": "Psychology and Sociology (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16857,
                "name": "Psychology and Special Educational Needs (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16858,
                "name": "Psychology and Sport & Exercise Science (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16859,
                "name": "Psychology and Sport & Physical Education (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16860,
                "name": "Psychology and Theology (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16861,
                "name": "Psychology and Tourism (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16862,
                "name": "Sport Psychology (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16863,
                "name": "Criminology with Social Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16864,
                "name": "Criminology with Social Psychology (Including Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16865,
                "name": "Criminology with Social Psychology (Including Year Abroad)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16866,
                "name": "Economics with Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16867,
                "name": "Economics with Psychology (3 Years)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16868,
                "name": "Economics with Psychology (Including Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16869,
                "name": "Economics with Psychology (Including Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16870,
                "name": "Economics with Psychology (Including Placement Year) (4 Years)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16871,
                "name": "Economics with Psychology (Including Year Abroad)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16872,
                "name": "Economics with Psychology (Including Year Abroad) (4 Years)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16873,
                "name": "Neural Engineering with Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16874,
                "name": "Neural Engineering with Psychology (Including Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16875,
                "name": "Neural Engineering with Psychology (Including Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16876,
                "name": "Neural Engineering with Psychology (Including Year Abroad)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16877,
                "name": "Psychodynamic Practice",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16878,
                "name": "Psychodynamic Practice (Including Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16879,
                "name": "Psychodynamic Practice (Including Year Abroad)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16880,
                "name": "Psychology (3 Years)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16881,
                "name": "Psychology (Including Foundation Year) (4 Years)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16882,
                "name": "Psychology (Including Placement Year) (4 Years)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16883,
                "name": "Psychology (Including Year Abroad)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16884,
                "name": "Psychology (Including Year Abroad) (4 Years)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16885,
                "name": "Psychology with Advanced Research Methods (Integrated Master)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16886,
                "name": "Psychology with Advanced Research Methods (Integrated Master) (Including Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16887,
                "name": "Psychology with Advanced Research Methods (Integrated Master) (Including Year Abroad)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16888,
                "name": "Psychology with Cognitive Neuroscience (Including Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16889,
                "name": "Psychology with Cognitive Neuroscience (Including Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16890,
                "name": "Psychology with Cognitive Neuroscience (Including Year Abroad)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16891,
                "name": "Psychology with Cognitive Neuroscience (Integrated Master)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16892,
                "name": "Psychology with Cognitive Neuroscience (Integrated Master) (Including Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16893,
                "name": "Psychology with Cognitive Neuroscience (Integrated Master) (Including Year Abroad)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16894,
                "name": "Psychology with Economics",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16895,
                "name": "Psychology with Economics (Including Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16896,
                "name": "Psychology with Economics (Including Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16897,
                "name": "Psychology with Economics (Including Year Abroad)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16898,
                "name": "Psychosocial and Psychoanalytic Studies",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16899,
                "name": "Psychosocial and Psychoanalytic Studies (Including Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16900,
                "name": "Psychosocial and Psychoanalytic Studies (Including Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16901,
                "name": "Psychosocial and Psychoanalytic Studies (Including Year Abroad)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16902,
                "name": "Sociology with Social Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16903,
                "name": "Sociology with Social Psychology (Including Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16904,
                "name": "Sociology with Social Psychology (Including Year Abroad)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16905,
                "name": "Biology and Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16906,
                "name": "Biology and Psychology (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16907,
                "name": "Biology and Psychology (with Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16908,
                "name": "Business and Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16909,
                "name": "Business and Psychology (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16910,
                "name": "Business and Psychology (with Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16911,
                "name": "English Literature and Psychology (with Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16912,
                "name": "Forensic Science and Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16913,
                "name": "Forensic Science and Psychology (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16914,
                "name": "History and Psychology (with Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16915,
                "name": "Human Biology and Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16916,
                "name": "Human Biology and Psychology (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16917,
                "name": "Mathematics and Psychology (with Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16918,
                "name": "Music Production and Psychology (with Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16919,
                "name": "Neuroscience and Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16920,
                "name": "Neuroscience and Psychology (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16921,
                "name": "Neuroscience and Psychology (with Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16922,
                "name": "Philosophy and Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16923,
                "name": "Philosophy and Psychology (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16924,
                "name": "Philosophy and Psychology (with Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16925,
                "name": "Psychology and Criminology (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16926,
                "name": "Psychology and Criminology (with Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16927,
                "name": "Psychology and Education (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16928,
                "name": "Psychology and Sociology (with Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16929,
                "name": "Psychology with Counselling",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16930,
                "name": "Psychology with Counselling (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16931,
                "name": "Psychology with Placement Year",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16932,
                "name": "Childhood and Youth Studies and Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16933,
                "name": "Childhood and Youth Studies and Psychology (with Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16934,
                "name": "Law with Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16935,
                "name": "Law with Psychology (with Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16936,
                "name": "Linguistics and Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16937,
                "name": "Linguistics and Psychology (with Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16938,
                "name": "Neuropsychology (Intercalated)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16939,
                "name": "Psychology with Clinical and Health Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16940,
                "name": "Psychology with Clinical and Health Psychology (with Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16941,
                "name": "Psychology with Forensic Psychology (with Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16942,
                "name": "Psychology with Neuropsychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16943,
                "name": "Psychology with Neuropsychology (with Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16944,
                "name": "Sport and Exercise Psychology (with Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16945,
                "name": "Economics & Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16946,
                "name": "Education & Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16947,
                "name": "English & Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16948,
                "name": "English and Creative Writing & Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16949,
                "name": "French & Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16950,
                "name": "History & Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16951,
                "name": "Human Resource Management & Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16952,
                "name": "Journalism, Media and Communication & Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16953,
                "name": "Law & Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16954,
                "name": "Marketing & Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16955,
                "name": "Politics and International Relations & Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16956,
                "name": "Psychology & Counselling",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16957,
                "name": "Psychology & Economics",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16958,
                "name": "Psychology & Human Resource Management",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16959,
                "name": "Psychology & Mathematics",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16960,
                "name": "Psychology & Social Policy",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16961,
                "name": "Psychology & Spanish",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16962,
                "name": "Childhood (Psychology)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16963,
                "name": "Education (Psychology)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16964,
                "name": "Psychology (Educational and Developmental Psychology)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16965,
                "name": "Psychology (Educational and Developmental Psychology) (with Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16966,
                "name": "Psychology (Forensic Psychology)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16967,
                "name": "Psychology (Forensic Psychology) (with Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16968,
                "name": "Psychology (Mental Health)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16969,
                "name": "Psychology (Mental Health) (with Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16970,
                "name": "Psychology with Counselling (with Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16971,
                "name": "Psychology with Criminology (with Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16972,
                "name": "Psychology with Sociology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16973,
                "name": "Psychology with Sociology (with Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16974,
                "name": "Animal Behaviour and Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16975,
                "name": "Business with Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16976,
                "name": "Counselling Skills and Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16977,
                "name": "Drama and Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16978,
                "name": "Forensic Biology and Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16979,
                "name": "Forensic Psychology (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16980,
                "name": "Psychology (Combined)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16981,
                "name": "Psychology and Spanish",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16982,
                "name": "Sport and Exercise Sciences and Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16983,
                "name": "Education Studies and Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16984,
                "name": "Education Studies and Psychology with Foundation Year",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16985,
                "name": "English and Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16986,
                "name": "English and Psychology with Foundation Year",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16987,
                "name": "Psychology and Counselling",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16988,
                "name": "Psychology and Counselling with Foundation Year",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16989,
                "name": "Psychology and Early Childhood Studies",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16990,
                "name": "Psychology and Early Childhood Studies with Foundation Year",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16991,
                "name": "Psychology and Sociology with Foundation Year",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16992,
                "name": "Psychology and Special Educational Needs, Disability & Inclusion",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16993,
                "name": "Psychology and Special Educational Needs, Disability & Inclusion with Foundation Year",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16994,
                "name": "Psychology and Sport",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16995,
                "name": "Psychology and Sport with Foundation Year",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16996,
                "name": "Cognitive Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16997,
                "name": "Cognitive Psychology (4 Years)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16998,
                "name": "Cognitive Psychology with a Placement Year",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 16999,
                "name": "Cognitive Psychology with a Year Abroad",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17000,
                "name": "Development Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17001,
                "name": "Development Psychology (4 Years)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17002,
                "name": "Development Psychology with a Placement Year",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17003,
                "name": "Development Psychology with a Year Abroad",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17004,
                "name": "Psychology with a Placement Year",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17005,
                "name": "Psychology with a Year Abroad",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17006,
                "name": "Social Psychology (4 Years)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17007,
                "name": "Social Psychology with a Placement Year",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17008,
                "name": "Social Psychology with a Year Abroad",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17009,
                "name": "Biology with Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17010,
                "name": "Biology with Psychology (Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17011,
                "name": "Psychology (4 Years)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17012,
                "name": "Psychology (Study Abroad)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17013,
                "name": "Psychology (Study Abroad) (4 Years)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17014,
                "name": "Psychology and Chinese Studies",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17015,
                "name": "Psychology and French Studies",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17016,
                "name": "Psychology and German Studies",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17017,
                "name": "Psychology and Linguistics",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17018,
                "name": "Psychology and Management",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17019,
                "name": "Psychology and Spanish Studies",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17020,
                "name": "Business and Psychology with Foundation Year",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17021,
                "name": "Counselling Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17022,
                "name": "Counselling Psychology with Foundation Year",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17023,
                "name": "Criminological Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17024,
                "name": "Criminological Psychology with Foundation Year",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17025,
                "name": "Psychology and Criminology with Foundation Year",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17026,
                "name": "Psychology with Clinical Approaches",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17027,
                "name": "Psychology with Clinical Approaches with Foundation Year",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17028,
                "name": "Sports Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17029,
                "name": "Sports Psychology with Foundation Year",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17030,
                "name": "Clinical Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17031,
                "name": "Fine Art with Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17032,
                "name": "Law with Forensic Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17033,
                "name": "Psychology with Politics",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17034,
                "name": "Business Psychology (4 Years)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17035,
                "name": "Psychology for Education",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17036,
                "name": "Psychology with Accelerated Foundation Year",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17037,
                "name": "Psychosocial Studies (4 Years)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17038,
                "name": "Psychosocial Studies and Principles of Psychodynamic Counselling",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17039,
                "name": "Psychosocial Studies and Principles of Psychodynamic Counselling (4 Years)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17040,
                "name": "Psychosocial Studies with Foundation Year",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17041,
                "name": "Psychosocial Studies with Foundation Year (6 Years)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17042,
                "name": "Criminology and Criminal Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17043,
                "name": "Psychology (with Integrated Year in Industry)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17044,
                "name": "Psychology (with Integrated Year Studying Abroad)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17045,
                "name": "Psychology and Business and Management",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17046,
                "name": "Psychology and Criminology (with Integrated Year in Industry)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17047,
                "name": "Psychology and Marketing",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17048,
                "name": "Applied Psychology (London)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17049,
                "name": "Criminology and Psychology (with Placement Year or Study Abroad Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17050,
                "name": "Forensic Psychology (with Placement Year or Study Abroad Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17051,
                "name": "Psychology (with Placement Year or Study Abroad Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17052,
                "name": "Sport and Exercise Psychology (with Placement Year or Study Abroad Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17053,
                "name": "Criminology with Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17054,
                "name": "Forensic Investigative Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17055,
                "name": "Psychology and Child Development",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17056,
                "name": "Psychology with Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17057,
                "name": "Sport Coaching and Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17058,
                "name": "Sport and Exercise Psychology (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17059,
                "name": "Sport Coaching and Psychology (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17060,
                "name": "Counselling, Coaching & Psychological Interventions",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17061,
                "name": "Counselling, Coaching & Psychological Interventions (Foundation Entry)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17062,
                "name": "Education & Psychology (Foundation Entry)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17063,
                "name": "Neuropsychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17064,
                "name": "Psychology (Foundation Entry)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17065,
                "name": "Psychology & Criminology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17066,
                "name": "Psychology of Child Development",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17067,
                "name": "Psychology with Psychotherapy & Counselling",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 45
            },
            {
                "id": 17068,
                "name": "International Banking and Finance Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17069,
                "name": "International Commercial Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17070,
                "name": "Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17071,
                "name": "Law (1 Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17072,
                "name": "Legal Practice",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17073,
                "name": "Maritime Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17074,
                "name": "Public International Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17075,
                "name": "International Sports Law in Practice",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17076,
                "name": "International Studies in Intellectual Property Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17077,
                "name": "International Business and Commercial Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17078,
                "name": "Comparative & European Private International Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17079,
                "name": "Corporate & Commercial Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17080,
                "name": "Environmental Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17081,
                "name": "Healthcare Law & Ethics",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17082,
                "name": "International Energy Law and Policy",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17083,
                "name": "International Energy Law and Policy (5 Years)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17084,
                "name": "International Mineral Law and Policy",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17085,
                "name": "International Mineral Law and Policy (5 Years)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17086,
                "name": "International Natural Resources Law and Policy",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17087,
                "name": "International Oil and Gas Law and Policy",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17088,
                "name": "International Oil and Gas Law and Policy (5 Years)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17089,
                "name": "Law (General)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17090,
                "name": "Professional Legal Practice",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17091,
                "name": "Professional Legal Practice (9 Months)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17092,
                "name": "Comparative & European Private International Law (Dual Qualifying)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17093,
                "name": "International Commercial Law (Dual Qualifying)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17094,
                "name": "Company Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17095,
                "name": "Company Law Online",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17096,
                "name": "Corporate Governance with Company Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17097,
                "name": "Corporate Governance with Company Law Online",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17098,
                "name": "Employment Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17099,
                "name": "Employment Law Online",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17100,
                "name": "Environmental Law Online",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17101,
                "name": "Finance Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17102,
                "name": "Finance Law Online",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17103,
                "name": "Human Resources with Employment Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17104,
                "name": "Human Resources with Employment Law Online",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17105,
                "name": "Insurance Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17106,
                "name": "Insurance Law Online",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17107,
                "name": "International Business Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17108,
                "name": "International Business Law Online",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17109,
                "name": "International Commercial Law Online",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17110,
                "name": "International Energy Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17111,
                "name": "International Energy Law Online",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17112,
                "name": "International Human Rights Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17113,
                "name": "International Human Rights Law Online",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17114,
                "name": "Law (Conversion)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17115,
                "name": "Law (Conversion) Online",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17116,
                "name": "Law (International)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17117,
                "name": "Law (International) Online",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17118,
                "name": "Law (PGDL) - (Conversion)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17119,
                "name": "Law (PGDL) Online - (Conversion)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17120,
                "name": "Law (SQE1)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17121,
                "name": "Laws (General)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17122,
                "name": "Laws (General) Online",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17123,
                "name": "Legal Practice (SQE1&2)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17124,
                "name": "Legal Practice Course (LPC)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17125,
                "name": "Legal Technology (Terms 1)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17126,
                "name": "Legal Technology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17127,
                "name": "Legal Technology Online (Terms 1)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17128,
                "name": "Legal Technology Online",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17129,
                "name": "Medical Law and Ethics",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17130,
                "name": "Medical Law and Ethics Online",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17131,
                "name": "Mental Health Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17132,
                "name": "Mental Health Law Online",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17133,
                "name": "Preparation for Legal Professionals Online",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17134,
                "name": "Public International Law Online",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17135,
                "name": "Art, Business and Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17136,
                "name": "Banking and Finance Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17137,
                "name": "Commercial and Corporate Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17138,
                "name": "Competition Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17139,
                "name": "Energy and Climate Change Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17140,
                "name": "European Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17141,
                "name": "Human Rights Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17142,
                "name": "Intellectual Property Law (1 Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17143,
                "name": "International Economic Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17144,
                "name": "International Finance Law (9 Months)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17145,
                "name": "International Shipping Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17146,
                "name": "International Tax Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17147,
                "name": "Law and Economics",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17148,
                "name": "Law and Economics (1 Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17149,
                "name": "Law and Economics (9 Months)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17150,
                "name": "Law and Finance",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17151,
                "name": "Law and Finance (1 Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17152,
                "name": "Law and Finance (9 Months)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17153,
                "name": "Laws",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17154,
                "name": "Laws (1 Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17155,
                "name": "Laws (Flexible Study)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17156,
                "name": "Laws (Flexible Study) (2-4 Years)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17157,
                "name": "Tax Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17158,
                "name": "Technology, Media and Telecommunications Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17159,
                "name": "Technology, Media and Telecommunications Law Online",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17160,
                "name": "Technology, Media and Telecommunications Law Online (2 Years)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17161,
                "name": "Technology, Media and Telecommunications Law Online (2-6 Years)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17162,
                "name": "Trade Mark Law and Practice",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17163,
                "name": "Commercial Law Dual",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17164,
                "name": "Corporate Finance and Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17165,
                "name": "Energy and Environmental Law with Professional Skills",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17166,
                "name": "International Trade Law (Online)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17167,
                "name": "Oil and Gas Law (Online)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17168,
                "name": "Business Law and Sustainable Development with Dissertation",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17169,
                "name": "Energy and Environmental Law with Dissertation",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17170,
                "name": "Energy Economics and Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17171,
                "name": "Energy Law with Dissertation",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17172,
                "name": "Energy Law with Professional Skills",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17173,
                "name": "Energy Politics and Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17174,
                "name": "General Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17175,
                "name": "Intellectual Property Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17176,
                "name": "International Commercial Law with Dissertation",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17177,
                "name": "International Commercial Law with Professional Skills",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17178,
                "name": "International Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17179,
                "name": "International Law and International Relations",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17180,
                "name": "International Law, Security and Strategic Studies",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17181,
                "name": "International Relations and International Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17182,
                "name": "International Trade Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17183,
                "name": "International Trade Law and Treaty Negotiation with Professional Skills",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17184,
                "name": "Natural Resources Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17185,
                "name": "Oil and Gas Law with Dissertation",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17186,
                "name": "Oil and Gas Law with Professional Skills",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17187,
                "name": "Strategic Studies and International Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17188,
                "name": "Commercial Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17189,
                "name": "Comparative and European Private Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17190,
                "name": "Corporate Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17191,
                "name": "Criminal Law and Criminal Justice",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17192,
                "name": "Global Environment and Climate Change Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17193,
                "name": "Information Technology Law (Online Learning)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17194,
                "name": "Innovation, Technology and the Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17195,
                "name": "Innovation, Technology and the Law (Online Learning)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17196,
                "name": "Intellectual Property Law (Online Learning)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17197,
                "name": "International Animal Welfare, Ethics and Law (Online Learning)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17198,
                "name": "International Banking Law and Finance",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17199,
                "name": "International Commercial Law and Practice (Online Learning)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17200,
                "name": "Law (Online Learning)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17201,
                "name": "Law (Online Learning) (1 Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17202,
                "name": "Medical Law and Ethics (Online Learning)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17203,
                "name": "Healthcare Ethics and Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17204,
                "name": "Healthcare Ethics and Law (1 Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17205,
                "name": "Healthcare Ethics and Law (Diploma)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17206,
                "name": "Healthcare Ethics and Law (Distance Learning)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17207,
                "name": "Healthcare Ethics and Law (Distance Learning) (1 Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17208,
                "name": "Healthcare Ethics and Law (Distance Learning) (Diploma)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17209,
                "name": "Healthcare Ethics and Law (Intercalated)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17210,
                "name": "Healthcare Ethics and Law (Online)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17211,
                "name": "Healthcare Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17212,
                "name": "Healthcare Law (Distance Learning)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17213,
                "name": "Human Rights - Law/Political Science Pathway (Research Route)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17214,
                "name": "Human Rights - Law/Political Science Pathway (Standard Route)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17215,
                "name": "International Financial Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17216,
                "name": "Security and International Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17217,
                "name": "Security and International Law (1 Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17218,
                "name": "Law Foundations Course (Diploma)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17219,
                "name": "SQE Training for Law Graduates (Master's)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17220,
                "name": "SQE Training for Non-Law Graduates (Master's)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17221,
                "name": "The Law Relating to Fraud and Financial Crime",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17222,
                "name": "Chinese Investment and Business Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17223,
                "name": "Islamic Finance and Business Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17224,
                "name": "Comparative Commercial Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17225,
                "name": "Law Foundations Course (Master's)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17226,
                "name": "Legal Practice Course",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17227,
                "name": "Barrister Training Course with Professional Legal Studies",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17228,
                "name": "Barrister Training Course with Professional Legal Studies (Master's)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17229,
                "name": "Professional Legal Studies with Business",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17230,
                "name": "Professional Legal Studies with Business and Professional Development Planning",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17231,
                "name": "Law - Banking and Finance Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17232,
                "name": "Law - Commercial Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17233,
                "name": "Law - Company Law and Corporate Governance",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17234,
                "name": "Law - Employment, Work and Equality",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17235,
                "name": "Law - General Legal Studies",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17236,
                "name": "Law - Health, Law and Society",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17237,
                "name": "Law - Human Rights Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17238,
                "name": "Law - International Commercial Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17239,
                "name": "Law - International Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17240,
                "name": "Law - International Law and International Relations",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17241,
                "name": "Law - Labour Law and Corporate Governance",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17242,
                "name": "Law - Law and Globalisation",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17243,
                "name": "Law - Public Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17244,
                "name": "Socio Legal Studies",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17245,
                "name": "Corporate Law (Distance Learning)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17246,
                "name": "Health Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17247,
                "name": "International Commercial Law (Distance Learning)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17248,
                "name": "International Law Enforcement",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17249,
                "name": "International Legal Studies (Distance Learning)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17250,
                "name": "Legal Practice (2 Years)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17251,
                "name": "Professional Legal Practice: SQE 1",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17252,
                "name": "Sports Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17253,
                "name": "Technology Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17254,
                "name": "Corporate Finance Law (1 Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17255,
                "name": "Corporate Finance Law (2 Years)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17256,
                "name": "Entertainment Law (1 Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17257,
                "name": "Entertainment Law (2 Years)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17258,
                "name": "International and Commercial Dispute Resolution Law (1 Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17259,
                "name": "International and Commercial Dispute Resolution Law (2 Years)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17260,
                "name": "International Commercial Law (1 Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17261,
                "name": "International Commercial Law (2 Years)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17262,
                "name": "International Law (1 Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17263,
                "name": "International Law (2 Years)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17264,
                "name": "Legal Practice (1 Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17265,
                "name": "Construction Law & Dispute Resolution",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17266,
                "name": "Economics for Competition Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17267,
                "name": "EU Competition Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17268,
                "name": "European Union Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17269,
                "name": "International Corporate & Commercial Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17270,
                "name": "International Financial & Commercial Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17271,
                "name": "International Tax Law Online",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17272,
                "name": "Law & Professional Practice",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17273,
                "name": "Medical Ethics & Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17274,
                "name": "Medical Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17275,
                "name": "Mental Health, Ethics & Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17276,
                "name": "International Business Law Pathway",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17277,
                "name": "Environmental Law and Sustainable Development",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17278,
                "name": "Environmental Law and Sustainable Development (1 Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17279,
                "name": "Gender Studies and Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17280,
                "name": "International Commercial and Economic Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17281,
                "name": "Islamic Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17282,
                "name": "Islamic Law (1 Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17283,
                "name": "Law and Development in Planetary Perspective",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17284,
                "name": "Law and Gender",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17285,
                "name": "Legal Studies (General Programme)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17286,
                "name": "International Financial Regulation and Corporate Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17287,
                "name": "Law, Policy and Practice",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17288,
                "name": "Intellectual Property Law with Placement",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17289,
                "name": "International Commercial Law with Placement",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17290,
                "name": "International Financial Regulation and Corporate Law with Placement",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17291,
                "name": "International Human Rights Law with Placement",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17292,
                "name": "Law, Policy and Practice with Placement",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17293,
                "name": "Laws with Placement",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17294,
                "name": "Advanced Legal Studies",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17295,
                "name": "International Commercial Law with Intellectual Property Law and Management",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17296,
                "name": "International Commercial Law with International Corporate Finance",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17297,
                "name": "International Commercial Law with International Banking law and Financial Regulation",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17298,
                "name": "International Commercial Law with International Dispute Resolution (Arbitration)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17299,
                "name": "International Law with Conflict",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17300,
                "name": "International Law with Development",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17301,
                "name": "International Law with Transnational Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17302,
                "name": "International Commercial Law with Insolvency and Corporate Rescue",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17303,
                "name": "International Commercial Law with International Economic Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17304,
                "name": "International Commercial Law with Information Technology Law and Commerce",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17305,
                "name": "Constitutional Politics, Law and Theory (1 Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17306,
                "name": "Criminal Law and Criminal Justice (1 Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17307,
                "name": "Environmental Law, Policy and Governance",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17308,
                "name": "International Economic Law, Justice and Development (1 Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17309,
                "name": "International Intellectual Property Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17310,
                "name": "Law and New Technologies",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17311,
                "name": "Law and Political Economy",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17312,
                "name": "Law General (1 Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17313,
                "name": "Law General (Online)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17314,
                "name": "Qualifying Law Degree",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17315,
                "name": "Qualifying Law Degree (Online)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17316,
                "name": "Corporate Responsibility and Business Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17317,
                "name": "Criminology and Socio-Legal Research",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17318,
                "name": "International Commercial and Business Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17319,
                "name": "International Commercial and Business Law with Professional Placement",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17320,
                "name": "International Human Rights Law (Economic Relations)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17321,
                "name": "International Humanitarian Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17322,
                "name": "International Trade and Maritime Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17323,
                "name": "International Trade and Maritime Law with Professional Placement",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17324,
                "name": "Diplomacy and International Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17325,
                "name": "Diplomacy and International Law (12 Months)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17326,
                "name": "Diplomacy and International Law (Distance Learning)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17327,
                "name": "Diplomacy and International Law (Distance Learning) (12 Months)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17328,
                "name": "Environment and Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17329,
                "name": "International Business and Corporate Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17330,
                "name": "International Human Rights and Terrorism Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17331,
                "name": "International Law and International Relations (12 Months)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17332,
                "name": "Business Law / International Business Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17333,
                "name": "Employment Law and Practice",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17334,
                "name": "Environmental Law and Practice",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17335,
                "name": "International Business Law / Business Law / Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17336,
                "name": "Legal Practice (Top-Up)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17337,
                "name": "Management, Law and Humanities of Sport",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17338,
                "name": "Sports Law (1 Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17339,
                "name": "Child Care Law and Practice",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17340,
                "name": "International Law and Global Health",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17341,
                "name": "International Law and Human Rights",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17342,
                "name": "International Law and Politics",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17343,
                "name": "International Law and The Environment",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17344,
                "name": "Law and Society",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17345,
                "name": "Law, Artificial Intelligence and New Technologies",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17346,
                "name": "Medical Ethics and Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17347,
                "name": "Safeguarding Adults - Law, Policy and Practice",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17348,
                "name": "Law with Criminal Justice & Human Rights",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17349,
                "name": "Law with Politics & Human Rights",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17350,
                "name": "Business and Management with Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17351,
                "name": "Business and Management with Law (with Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17352,
                "name": "Business and Management with Law with Foundation Year",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17353,
                "name": "Business and Management with Law with Foundation Year (with Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17354,
                "name": "Law (6 Years)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17355,
                "name": "Law (with Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17356,
                "name": "Law with Criminology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17357,
                "name": "Law with Criminology (with Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17358,
                "name": "Law with Criminology (6 Years)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17359,
                "name": "Law with Criminology with Foundation Year",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17360,
                "name": "Law with Criminology with Foundation Year (with Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17361,
                "name": "Law with Foundation Year",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17362,
                "name": "Law with Foundation Year (with Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17363,
                "name": "Criminology, Policing and Criminal Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17364,
                "name": "Criminology, Policing and Criminal Law with Foundation Year",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17365,
                "name": "Law (Eng / NI)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17366,
                "name": "Law (Eng / NI) - Accelerated",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17367,
                "name": "Law (Eng / NI) with Energy",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17368,
                "name": "Law (Eng / NI) with French",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17369,
                "name": "Law (Eng / NI) with Spanish",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17370,
                "name": "Law (Scots and English Dual Qualifying)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17371,
                "name": "Law (Scots and English Dual Qualifying) with Energy",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17372,
                "name": "Law (Scots)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17373,
                "name": "Law (Scots) - Accelerated",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17374,
                "name": "Law (Scots) with Energy Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17375,
                "name": "Law (Scots) with French",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17376,
                "name": "Law (Scots) with Spanish",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17377,
                "name": "Law with Politics",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17378,
                "name": "Criminology with Criminal Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17379,
                "name": "Criminology with Criminal Law (Including Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17380,
                "name": "Criminology with Criminal Law (Including Year Abroad)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17381,
                "name": "English and French Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17382,
                "name": "History and Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17383,
                "name": "History and Law (Including Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17384,
                "name": "History and Law (Including Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17385,
                "name": "History and Law (Including Year Abroad)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17386,
                "name": "Law (Including Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17387,
                "name": "Law (Including Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17388,
                "name": "Law (Including Year Abroad)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17389,
                "name": "Law (Integrated Master)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17390,
                "name": "Law (Integrated Master) (Including Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17391,
                "name": "Law (Integrated Master) (Including Year Abroad)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17392,
                "name": "Law (Senior Status)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17393,
                "name": "Law with Business",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17394,
                "name": "Law with Business (Including Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17395,
                "name": "Law with Business (Including Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17396,
                "name": "Law with Business (Including Year Abroad)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17397,
                "name": "Law with Criminology (Including Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17398,
                "name": "Law with Criminology (Including Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17399,
                "name": "Law with Criminology (Including Year Abroad)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17400,
                "name": "Law with Finance",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17401,
                "name": "Law with Finance (Including Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17402,
                "name": "Law with Finance (Including Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17403,
                "name": "Law with Finance (Including Year Abroad)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17404,
                "name": "Law with History",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17405,
                "name": "Law with History (Including Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17406,
                "name": "Law with History (Including Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17407,
                "name": "Law with History (Including Year Abroad)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17408,
                "name": "Law with Human Rights",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17409,
                "name": "Law with Human Rights (Including Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17410,
                "name": "Law with Human Rights (Including Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17411,
                "name": "Law with Human Rights (Including Year Abroad)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17412,
                "name": "Law with Literature",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17413,
                "name": "Law with Literature (Including Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17414,
                "name": "Law with Literature (Including Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17415,
                "name": "Law with Literature (Including Year Abroad)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17416,
                "name": "Law with Philosophy",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17417,
                "name": "Law with Philosophy (Including Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17418,
                "name": "Law with Philosophy (Including Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17419,
                "name": "Law with Philosophy (Including Year Abroad)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17420,
                "name": "Law with Politics (Including Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17421,
                "name": "Law with Politics (Including Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17422,
                "name": "Law with Politics (Including Year Abroad)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17423,
                "name": "Philosophy and Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17424,
                "name": "Philosophy and Law (Including Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17425,
                "name": "Philosophy and Law (Including Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17426,
                "name": "Philosophy and Law (Including Year Abroad)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17427,
                "name": "Accounting & Finance and Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17428,
                "name": "Art & Design History and Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17429,
                "name": "Business Management and Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17430,
                "name": "Childhood & Youth and Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17431,
                "name": "Contemporary Performance and Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17432,
                "name": "Criminology and Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17433,
                "name": "Dance and Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17434,
                "name": "Digital Creativity and Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17435,
                "name": "Drama and Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17436,
                "name": "Education and Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17437,
                "name": "English Literature and Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17438,
                "name": "Geography and Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17439,
                "name": "Health & Wellbeing and Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17440,
                "name": "Human Biology and Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17441,
                "name": "Human Geography and Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17442,
                "name": "Law and Marketing",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17443,
                "name": "Law and Media & Communication",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17444,
                "name": "Law and Music Production",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17445,
                "name": "Law and Philosophy & Ethics",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17446,
                "name": "Law and Politics",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17447,
                "name": "Law and Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17448,
                "name": "Law and Religious Studies",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17449,
                "name": "Law and Social Care",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17450,
                "name": "Law and Social Policy",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17451,
                "name": "Law and Special Educational Needs",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17452,
                "name": "Law and Sport & Exercise Science",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17453,
                "name": "Law and Tourism",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17454,
                "name": "Accounting & Finance and Law (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17455,
                "name": "Business Management and Law (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17456,
                "name": "Childhood & Youth and Law (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17457,
                "name": "Contemporary Performance and Law (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17458,
                "name": "Criminology and Law (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17459,
                "name": "Dance and Law (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17460,
                "name": "Drama and Law (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17461,
                "name": "Education and Law (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17462,
                "name": "English Literature and Law (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17463,
                "name": "Geography and Law (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17464,
                "name": "Health & Wellbeing and Law (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17465,
                "name": "History and Law (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17466,
                "name": "Human Biology and Law (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17467,
                "name": "Law (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17468,
                "name": "Law and Media & Communication (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17469,
                "name": "Law and Philosophy & Ethics (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17470,
                "name": "Law and Politics (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17471,
                "name": "Law and Psychology (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17472,
                "name": "Law and Social Policy (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17473,
                "name": "Accountancy and Legal Studies",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17474,
                "name": "Business Management and Legal Studies",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17475,
                "name": "Economics and Legal Studies",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17476,
                "name": "French and Legal Studies",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17477,
                "name": "French and Legal Studies (5 Years)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17478,
                "name": "German and Legal Studies",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17479,
                "name": "German and Legal Studies (5 Years)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17480,
                "name": "History and Legal Studies",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17481,
                "name": "International Relations and Legal Studies",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17482,
                "name": "Law - Accelerated",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17483,
                "name": "Law and European Legal Studies (5 Years)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17484,
                "name": "Law and French Law (5 Years)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17485,
                "name": "Law and German Law (5 Years)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17486,
                "name": "Law and Spanish Law (5 Years)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17487,
                "name": "Law with Computing Science",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17488,
                "name": "Law with English Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17489,
                "name": "Law with English Law - Accelerated",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17490,
                "name": "Law with English Law and European Legal Studies (5 Years)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17491,
                "name": "Law with Options in Accountancy",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17492,
                "name": "Law with Options in Business Management",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17493,
                "name": "Law with Options in Economics",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17494,
                "name": "Law with Options in French",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17495,
                "name": "Law with Options in Gaelic Language",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17496,
                "name": "Law with Options in German",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17497,
                "name": "Law with Options in Mandarin",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17498,
                "name": "Law with Options in Music",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17499,
                "name": "Law with Options in Spanish",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17500,
                "name": "Legal Studies and Philosophy",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17501,
                "name": "Legal Studies and Politics",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17502,
                "name": "Legal Studies and Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17503,
                "name": "Legal Studies and Spanish & Latin American Studies",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17504,
                "name": "Legal Studies and Spanish & Latin American Studies (5 Years)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17505,
                "name": "Accounting & Business Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17506,
                "name": "Business Analysis and Technology & Business Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17507,
                "name": "Business Enterprise & Business Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17508,
                "name": "Economics & Business Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17509,
                "name": "Education & Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17510,
                "name": "English & Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17511,
                "name": "English and Creative Writing & Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17512,
                "name": "Finance & Business Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17513,
                "name": "French & Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17514,
                "name": "History & Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17515,
                "name": "Hospitality and Tourism Management & Business Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17516,
                "name": "Human Resource Management & Business Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17517,
                "name": "Journalism, Media and Communication & Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17518,
                "name": "Law & Economics",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17519,
                "name": "Law & Human Resource Management",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17520,
                "name": "Law & Politics and International Relations",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17521,
                "name": "Law & Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17522,
                "name": "Law & Social Policy",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17523,
                "name": "Law & Spanish",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17524,
                "name": "Law (Clinical)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17525,
                "name": "Law (Graduate Entrant)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17526,
                "name": "Law (5 Years)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17527,
                "name": "Law with French",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17528,
                "name": "Law with Spanish",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17529,
                "name": "Marketing & Business Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17530,
                "name": "Criminal Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17531,
                "name": "Criminal Law (with Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17532,
                "name": "Law (2 Years)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17533,
                "name": "Law with History (with Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17534,
                "name": "Law with Modern Languages",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17535,
                "name": "Law with Modern Languages (with Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17536,
                "name": "Law with Politics (with Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17537,
                "name": "Law with Psychology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17538,
                "name": "Law with Psychology (with Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17539,
                "name": "Law with Sociology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17540,
                "name": "Law with Sociology (with Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17541,
                "name": "Law with Welsh",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17542,
                "name": "Law with Welsh (with Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17543,
                "name": "Business and Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17544,
                "name": "Law (Graduate Entry)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17545,
                "name": "Law (Ordinary and Honours)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17546,
                "name": "Law and Accountancy",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17547,
                "name": "Law and Business",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17548,
                "name": "Law and Celtic",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17549,
                "name": "Law and French",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17550,
                "name": "Law and German",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17551,
                "name": "Law and History",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17552,
                "name": "Law and International Relations",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17553,
                "name": "Law and Social Anthropology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17554,
                "name": "Law and Sociology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17555,
                "name": "Law and Spanish",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17556,
                "name": "Social Policy and Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17557,
                "name": "Law (with Foundation Year) (Keele)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17558,
                "name": "Law with Business (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17559,
                "name": "Law with Business (with Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17560,
                "name": "Law with Criminology (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17561,
                "name": "Law with Politics (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17562,
                "name": "Law with Professional Legal Practice",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17563,
                "name": "Law with Professional Legal Practice (with Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17564,
                "name": "Law with Professional Legal Practice (with Placement Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17565,
                "name": "Criminology and Law (with Placement Year or Study Abroad Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17566,
                "name": "International Law Studies (Top-Up)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17567,
                "name": "Law (with Placement Year or Study Abroad Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17568,
                "name": "Law & Practice",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17569,
                "name": "Law & Practice (Greenwich, London)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17570,
                "name": "Law & Practice (Scarborough)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17571,
                "name": "Law & Practice (with Placement Year or Study Abroad Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17572,
                "name": "Law & Practice (with Placement Year or Study Abroad Year) (Greenwich, London)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17573,
                "name": "Law and Practice",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17574,
                "name": "Law (with a Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17575,
                "name": "Law and Business (with a Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17576,
                "name": "Law and Criminology",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17577,
                "name": "Law and Criminology (with a Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17578,
                "name": "Law and Politics (with a Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17579,
                "name": "Law and Sports Business",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17580,
                "name": "Law and Sports Business (with a Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17581,
                "name": "Law with Business (with a Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17582,
                "name": "Law with Criminology (with a Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17583,
                "name": "Law with Politics (with a Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17584,
                "name": "Law with Sports Business",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17585,
                "name": "Law with Sports Business (with a Foundation Year)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17586,
                "name": "Art History with Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17587,
                "name": "Economics with Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17588,
                "name": "English with Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17589,
                "name": "History with Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17590,
                "name": "Law with Art History",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17591,
                "name": "Law with Creative Writing",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17592,
                "name": "Law with Data Science",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17593,
                "name": "Law with Economics",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17594,
                "name": "Law with English",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17595,
                "name": "Law with Politics & International Relations",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17596,
                "name": "Philosophy with Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17597,
                "name": "Politics & International Relations with Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17598,
                "name": "Law with a Year in Industry",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17599,
                "name": "Law with Criminology with a Year in Industry",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17600,
                "name": "Law with International Relations",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17601,
                "name": "Law with International Relations with a Year in Industry",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17602,
                "name": "Law with Modern Languages (French)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17603,
                "name": "Law with Politics with a Year in Industry",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17604,
                "name": "Law with Sociology with a Year in Industry",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17605,
                "name": "Politics and Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17606,
                "name": "Politics and Law with a Year in Industry",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17607,
                "name": "Criminology with Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17608,
                "name": "Law and Legislative Studies",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17609,
                "name": "Law with a Foundation Year",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17610,
                "name": "Law with a Year Abroad",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17611,
                "name": "Law with Business Management",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17612,
                "name": "Law with Business Management with a Foundation Year",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17613,
                "name": "Law with Business Management with a Year Abroad",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17614,
                "name": "Law with Criminology with a Foundation Year",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17615,
                "name": "Law with Criminology with a Year Abroad",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17616,
                "name": "Law with Politics with a Foundation Year",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17617,
                "name": "Law with Politics with a Year Abroad",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17618,
                "name": "European Legal Studies",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17619,
                "name": "Law and Accounting and Finance",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17620,
                "name": "Law and Management",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17621,
                "name": "Law and Philosophy",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17622,
                "name": "Law with Quantitative Research",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17623,
                "name": "Business Management with Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17624,
                "name": "Law (Accelerated)",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17625,
                "name": "Law Online",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17626,
                "name": "Law Senior Status",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17627,
                "name": "Law Senior Status Online",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17628,
                "name": "Law with Business Online",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17629,
                "name": "Law with Criminology Online",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17630,
                "name": "Law with Government and Politics",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17631,
                "name": "Law with Government and Politics Online",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17632,
                "name": "Law with International Business",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17633,
                "name": "Law with International Business Online",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17634,
                "name": "Law with Business with Foundation Year",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17635,
                "name": "Law with Finance with Foundation Year",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17636,
                "name": "Law with Forensic Investigation",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17637,
                "name": "Accounting and Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17638,
                "name": "Business and Law with Sandwich Placement",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17639,
                "name": "Criminology and Criminal Justice and Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17640,
                "name": "Criminology and Criminal Justice and Law with Foundation Year",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17641,
                "name": "English Literatures and Law",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17642,
                "name": "English Literatures and Law with Foundation Year",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17643,
                "name": "English Literatures and Law with Sandwich Placement",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17644,
                "name": "Law with Sandwich Placement",
                "industry_id": 10,
                "deleted_at": null,
                "sub_industry_id": 97
            },
            {
                "id": 17645,
                "name": "International Hospitality Business Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17646,
                "name": "International Hospitality Business Management (with Placement Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17647,
                "name": "International Hospitality Business Management (1 Year Top-Up)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17648,
                "name": "International Hospitality Business Management with Foundation Year",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17649,
                "name": "International Hospitality Business Management with Foundation Year (with Placement Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17650,
                "name": "International Tourism and Hospitality Business Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17651,
                "name": "International Tourism and Hospitality Business Management (with Placement Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17652,
                "name": "International Tourism and Hospitality Business Management (1 Year Top-Up)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17653,
                "name": "International Tourism and Hospitality Business Management with Foundation Year",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17654,
                "name": "International Tourism and Hospitality Business Management with Foundation Year (with Placement Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17655,
                "name": "Hospitality Entrepreneurship",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17656,
                "name": "Hospitality Entrepreneurship with Foundation Year",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17657,
                "name": "International Hospitality Management with Foundation Year",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17658,
                "name": "International Hospitality Management with Placement",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17659,
                "name": "International Hospitality Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17660,
                "name": "International Event and Hospitality Management (Top-Up)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17661,
                "name": "International Hospitality and Tourism Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17662,
                "name": "International Hospitality and Tourism Management (with Placement Year or Study Abroad Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17663,
                "name": "International Hospitality, Tourism and Wellness Management (Top-Up)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17664,
                "name": "Tourism & Hospitality Management (Dagenham, London)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17665,
                "name": "Tourism & Hospitality Management (with Placement Year or Study Abroad Year) (Dagenham, London)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17666,
                "name": "Tourism & Hospitality Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17667,
                "name": "Hospitality Business Management (Online)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17668,
                "name": "International Hospitality Business Management (Online)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17669,
                "name": "International Hospitality Business Management (Top-Up) (Online)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17670,
                "name": "Hospitality Business Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17671,
                "name": "Hospitality Business Management with Foundation Year",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17672,
                "name": "Hospitality Business Management with International Foundation Year",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17673,
                "name": "International Hospitality Management with Sandwich Placement",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17674,
                "name": "Accounting & Hospitality and Tourism Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17675,
                "name": "Business Analysis and Technology & Hospitality and Tourism Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17676,
                "name": "Business Enterprise & Hospitality and Tourism Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17677,
                "name": "Finance & Hospitality and Tourism Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17678,
                "name": "French & Hospitality and Tourism Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17679,
                "name": "Hospitality & Tourism Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17680,
                "name": "Hospitality and Tourism Management & Business Law",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17681,
                "name": "Hospitality and Tourism Management & Human Resource Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17682,
                "name": "Hospitality and Tourism Management & Marketing",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17683,
                "name": "Spanish & Hospitality and Tourism Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17684,
                "name": "Event Management (Foundation Entry)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17685,
                "name": "International Hospitality Management (Foundation Entry)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17686,
                "name": "Management in Hospitality",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17687,
                "name": "Business Management with Hospitality (Online)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17688,
                "name": "International Hospitality Management & Festival & Event",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17689,
                "name": "International Hospitality Management & Tourism",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17690,
                "name": "International Tourism, Hospitality and Event Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17691,
                "name": "International Tourism, Hospitality and Event Management with Placement Year",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17692,
                "name": "International Tourism, Hospitality and Events Management with Advanced Research",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17693,
                "name": "International Hospitality Management with Digital Innovation",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17694,
                "name": "International Hospitality and Event Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17695,
                "name": "Internship in International Tourism, Hospitality and Event Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17696,
                "name": "Events and Hospitality Leadership",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17697,
                "name": "Innovation and Sustainable Hospitality",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17698,
                "name": "Tourism and Events",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17699,
                "name": "Tourism and Hospitality",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17700,
                "name": "Management with Tourism and Hospitality",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17701,
                "name": "Management with Tourism and Hospitality (Professional Practice)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17702,
                "name": "International Business with Tourism and Hospitality",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17703,
                "name": "International Business with Tourism and Hospitality (Professional Practice)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17704,
                "name": "International Hospitality, Events and Tourism Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17705,
                "name": "Business with Hospitality and Tourism Management (1 Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17706,
                "name": "Business with Hospitality and Tourism Management (with Advanced Practice in Second Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17707,
                "name": "Business with Hospitality and Tourism Management (with Study Abroad in Second Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17708,
                "name": "Business with Hospitality and Tourism Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17709,
                "name": "International Tourism and Hospitality Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17710,
                "name": "International Tourism and Hospitality Management (Belfast Campus)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17711,
                "name": "International Tourism and Hospitality Management (with Advanced Practice)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17712,
                "name": "Hospitality with Tourism Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17713,
                "name": "Hospitality with Tourism Management with Placement",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17714,
                "name": "Marketing Management for Events, Hospitality and Tourism",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17715,
                "name": "Marketing Management for Events, Hospitality and Tourism with Placement",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17716,
                "name": "International Hospitality Management (Certificate)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17717,
                "name": "International Hospitality Management (Diploma)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17718,
                "name": "Luxury Hospitality Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17719,
                "name": "Luxury Hospitality Management (Enhanced Extended)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17720,
                "name": "Luxury Hospitality Management with Internship",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17721,
                "name": "Luxury Hospitality Management (Extended Masters)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17722,
                "name": "Tourism and Hospitality (University of Sunderland)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17723,
                "name": "International Hospitality and Event Management (University of Central Lancashire)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17724,
                "name": "International Hospitality and Tourism Management (University of Central Lancashire)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17725,
                "name": "Internship in International Tourism, Hospitality and Event Management (University of Central Lancashire)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17726,
                "name": "International Tourism and Hospitality Management (London South Bank University)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17727,
                "name": "International Hospitality & Tourism Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17728,
                "name": "International Tourism with Hospitality Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17729,
                "name": "International Hospitality and Tourism Management with Placement",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17730,
                "name": "International Hospitality and Tourism Management (Top-Up)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17731,
                "name": "International Hospitality and Tourism Management Top Up",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17732,
                "name": "International Hospitality Business Management (Foundation Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17733,
                "name": "International Hospitality Business Management Top Up",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17734,
                "name": "Hospitality Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17735,
                "name": "Hospitality Management (Extended)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17736,
                "name": "Hospitality Management (Year 2 & 3 Direct Entry)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 35
            },
            {
                "id": 17737,
                "name": "Event Management (Foundation Entry)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17738,
                "name": "International Business with Events Management (1 Year Top-Up)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17739,
                "name": "International Events Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17740,
                "name": "International Events Management (Work Experience Route)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17741,
                "name": "International Events Management (1 Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17742,
                "name": "Sports Events Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17743,
                "name": "Sports Events Management (1 Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17744,
                "name": "International Events Management (2 Years with Placement)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17745,
                "name": "Sports Events Management (2 Years with Placement)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17746,
                "name": "Global Meetings and Events Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17747,
                "name": "Global Meetings and Events Management with Placement",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17748,
                "name": "Events Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17749,
                "name": "Global Events Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17750,
                "name": "International Tourism, Hospitality and Events Management with Advanced Research",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17751,
                "name": "Events Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17752,
                "name": "Events Management (with Placement Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17753,
                "name": "Events Management (1 Year Top-Up)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17754,
                "name": "Events Management (Arts and Entertainment) (1 Year Top-Up)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17755,
                "name": "Events Management (Experiential Marketing) (1 Year Top-Up)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17756,
                "name": "Events Management (Tourism) (1 Year Top-Up)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17757,
                "name": "Events Management with Foundation Year",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17758,
                "name": "Events Management with Foundation Year (with Placement Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17759,
                "name": "Events and Leisure Management (1 Year Top-Up)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17760,
                "name": "Event Management with Foundation Year",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17761,
                "name": "Event Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17762,
                "name": "Event and Marketing Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17763,
                "name": "Event and Tourism Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17764,
                "name": "Event and Marketing Management (with Professional Placement and Study Abroad)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17765,
                "name": "Event and Marketing Management (with Professional Placement)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17766,
                "name": "Event and Marketing Management (with Study Abroad)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17767,
                "name": "Event and Tourism Management (with Professional Placement and Study Abroad)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17768,
                "name": "Event and Tourism Management (with Professional Placement)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17769,
                "name": "Event and Tourism Management (with Study Abroad)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17770,
                "name": "Business and Event Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17771,
                "name": "Event Management and Marketing",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17772,
                "name": "Event Management and Tourism",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17773,
                "name": "Event Management with French",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17774,
                "name": "Event Management with German",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17775,
                "name": "Event Management with Japanese",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17776,
                "name": "Event Management with Mandarin",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17777,
                "name": "Event Management with Spanish",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17778,
                "name": "Event Management (with Placement Year or Study Abroad Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17779,
                "name": "Sound, Light and Live Event Engineering",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17780,
                "name": "Sound, Light and Live Event Engineering with Foundation Year",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17781,
                "name": "Business and Event Management (with Placement Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17782,
                "name": "Event Management (with Placement Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17783,
                "name": "Event Management and Finance",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17784,
                "name": "Event Management and Finance (with Placement Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17785,
                "name": "Event Management (Top-Up)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17786,
                "name": "Marketing and Event Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17787,
                "name": "Marketing and Event Management (with Placement Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17788,
                "name": "International Festival & Event Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17789,
                "name": "International Festival & Event Management with Entrepreneurship",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17790,
                "name": "Sport Event Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17791,
                "name": "International Event Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17792,
                "name": "International Event Management (Belfast Campus)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17793,
                "name": "International Event Management (with Advanced Practice)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17794,
                "name": "Event Design and Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17795,
                "name": "Event Design and Management (2 Years)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17796,
                "name": "International Event Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17797,
                "name": "International Event Management (Belfast Campus)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17798,
                "name": "International Event Management (with Advanced Practice)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17799,
                "name": "Event Design and Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17800,
                "name": "Event Design and Management (2 Years)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 36
            },
            {
                "id": 17801,
                "name": "International Business with Tourism Management (1 Year Top-Up)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17802,
                "name": "International Tourism Management with French",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17803,
                "name": "International Tourism Management with French (with Placement Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17804,
                "name": "International Tourism Management with Spanish",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17805,
                "name": "International Tourism Management with Spanish (with Placement Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17806,
                "name": "Languages with Tourism (French)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17807,
                "name": "Languages with Tourism (French) (with Placement Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17808,
                "name": "Languages with Tourism (French) with Foundation Year",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17809,
                "name": "Languages with Tourism (French) with Foundation Year (with Placement Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17810,
                "name": "Languages with Tourism (Spanish)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17811,
                "name": "Languages with Tourism (Spanish) (with Placement Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17812,
                "name": "Languages with Tourism (Spanish) with Foundation Year",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17813,
                "name": "Languages with Tourism (Spanish) with Foundation Year (with Placement Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17814,
                "name": "International Tourism Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17815,
                "name": "International Tourism Management (with Placement Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17816,
                "name": "International Tourism Management (1 Year Top-Up)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17817,
                "name": "International Tourism Management with Foundation Year",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17818,
                "name": "International Tourism Management with Foundation Year (with Placement Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17819,
                "name": "International Tourism Management with Placement",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17820,
                "name": "Infection Prevention & Control",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17821,
                "name": "Business Management and Tourism",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17822,
                "name": "Computer Science and Tourism",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17823,
                "name": "Conservation Biology and Tourism",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17824,
                "name": "Contemporary Fashion Design and Tourism",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17825,
                "name": "Creative Writing and Tourism",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17826,
                "name": "Digital Creativity and Tourism",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17827,
                "name": "Drama and Tourism",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17828,
                "name": "Early Childhood and Tourism",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17829,
                "name": "Economics and Tourism",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17830,
                "name": "Education and Tourism",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17831,
                "name": "English Language and Tourism",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17832,
                "name": "Environmental Change & Tourism",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17833,
                "name": "Film & Visual Culture and Tourism",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17834,
                "name": "Human Biology and Tourism",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17835,
                "name": "Information Technology and Tourism",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17836,
                "name": "International Relations and Tourism",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17837,
                "name": "Law and Tourism",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17838,
                "name": "Mathematics and Tourism",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17839,
                "name": "Media & Communication and Tourism",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17840,
                "name": "Music and Tourism",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17841,
                "name": "Musical Theatre and Tourism",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17842,
                "name": "Nutrition and Tourism",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17843,
                "name": "Philosophy & Ethics and Tourism",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17844,
                "name": "Politics and Tourism",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17845,
                "name": "Psychology and Tourism",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17846,
                "name": "Social Care and Tourism",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17847,
                "name": "Social Policy and Tourism",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17848,
                "name": "Sociology and Tourism",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17849,
                "name": "Sport & Physical Education and Tourism",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17850,
                "name": "Theology and Tourism",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17851,
                "name": "Tourism",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17852,
                "name": "Tourism Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17853,
                "name": "Business Management and Tourism (with Foundation Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17854,
                "name": "Computer Science and Tourism (with Foundation Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17855,
                "name": "Conservation Biology and Tourism (with Foundation Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17856,
                "name": "Contemporary Fashion Design and Tourism (with Foundation Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17857,
                "name": "Creative Writing and Tourism (with Foundation Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17858,
                "name": "Drama and Tourism (with Foundation Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17859,
                "name": "Early Childhood and Tourism (with Foundation Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17860,
                "name": "Education and Tourism (with Foundation Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17861,
                "name": "English Language and Tourism (with Foundation Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17862,
                "name": "Environmental Change & Tourism (with Foundation Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17863,
                "name": "Film & Visual Culture and Tourism (with Foundation Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17864,
                "name": "Human Biology and Tourism (with Foundation Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17865,
                "name": "Information Technology and Tourism (with Foundation Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17866,
                "name": "International Relations and Tourism (with Foundation Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17867,
                "name": "Mathematics and Tourism (with Foundation Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17868,
                "name": "Media & Communication and Tourism (with Foundation Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17869,
                "name": "Music and Tourism (with Foundation Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17870,
                "name": "Musical Theatre and Tourism (with Foundation Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17871,
                "name": "Nutrition and Tourism (with Foundation Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17872,
                "name": "Politics and Tourism (with Foundation Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17873,
                "name": "Psychology and Tourism (with Foundation Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17874,
                "name": "Social Care and Tourism (with Foundation Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17875,
                "name": "Social Policy and Tourism (with Foundation Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17876,
                "name": "Sociology and Tourism (with Foundation Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17877,
                "name": "Sport & Physical Education and Tourism (with Foundation Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17878,
                "name": "Theology and Tourism (with Foundation Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17879,
                "name": "Tourism Management (with Foundation Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17880,
                "name": "Business and Tourism",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17881,
                "name": "International Tourism Management with German",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17882,
                "name": "International Tourism Management with Japanese",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17883,
                "name": "International Tourism Management with Mandarin",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17884,
                "name": "International Tourism Management with Placement Year",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17885,
                "name": "Tourism Management with French",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17886,
                "name": "Tourism Management with German",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17887,
                "name": "Tourism Management with Japanese",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17888,
                "name": "Tourism Management with Mandarin",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17889,
                "name": "Tourism Management with Spanish",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17890,
                "name": "Events Management and International Tourism Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17891,
                "name": "International Tourism Management (Combined)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17892,
                "name": "International Tourism Management (with Foundation Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17893,
                "name": "International Tourism Management and Business Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17894,
                "name": "International Tourism Management and Marketing Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17895,
                "name": "International Tourism Management with a Language (French or Spanish)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17896,
                "name": "International Tourism Management with a Language (French or Spanish) (with Placement Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17897,
                "name": "International Tourism Management with International Foundation Year",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17898,
                "name": "International Tourism Management with Marketing",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17899,
                "name": "International Tourism Management with Marketing with Foundation Year",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17900,
                "name": "Business and Tourism Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17901,
                "name": "Business and Tourism Management with Foundation Year",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17902,
                "name": "Business and Tourism Management with Sandwich Placement",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17903,
                "name": "Tourism and Marketing Management with Foundation Year",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17904,
                "name": "Tourism and Marketing Management with Sandwich Placement",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17905,
                "name": "Tourism Management with Foundation Year",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17906,
                "name": "Tourism Management with Sandwich Placement",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17907,
                "name": "International Tourism Management (Foundation Entry)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17908,
                "name": "Management in Tourism",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17909,
                "name": "International Tourism & Airline Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17910,
                "name": "International Tourism & Marketing Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17911,
                "name": "Events and Conventions Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17912,
                "name": "Innovation and Entrepreneurship in Tourism (Post-Baccalaureate)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17913,
                "name": "Managing Festivals and Events (Post-Baccalaureate)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17914,
                "name": "Tourism Destination Development (Post-Baccalaureate)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17915,
                "name": "Tourism Experience Management (Post-Baccalaureate)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17916,
                "name": "Tourism Management (2 Years)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17917,
                "name": "Tourism Studies",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17918,
                "name": "Events Management (Extended)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17919,
                "name": "Tourism Management (Extended)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17920,
                "name": "Tourism Management with Language",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17921,
                "name": "Events Management (Foundation Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17922,
                "name": "International Tourism Management (Foundation Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17923,
                "name": "Business Administration (Events Management)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17924,
                "name": "Business Administration (International Tourism Management)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17925,
                "name": "Marketing with International Tourism Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17926,
                "name": "Travel, Aviation and Tourism Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17927,
                "name": "Events Management (with Placement)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17928,
                "name": "Events Management (Top-Up)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17929,
                "name": "International Tourism Management (Top-Up)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17930,
                "name": "Events & Experience Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17931,
                "name": "Tourism & Cultural Policy",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17932,
                "name": "International Events Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17933,
                "name": "International Events Management (Work Experience Route)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17934,
                "name": "International Tourism and Aviation Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17935,
                "name": "Events & Experience Management (Goldsmiths, University of London)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17936,
                "name": "Tourism & Cultural Policy (Goldsmiths, University of London)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17937,
                "name": "Sustainable Tourism (University of Sunderland)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17938,
                "name": "Tourism and Aviation (University of Sunderland)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17939,
                "name": "Tourism and Events (University of Sunderland)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17940,
                "name": "Infection Prevention and Control",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17941,
                "name": "International Tourism and Aviation Management with Internship",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17942,
                "name": "International Tourism and Aviation Management (Extended Masters)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17943,
                "name": "International Tourism and Aviation Management (Enhanced Extended)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17944,
                "name": "Responsible Tourism Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17945,
                "name": "Responsible Tourism Management (1 Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17946,
                "name": "Tourism Marketing Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17947,
                "name": "International Hotel and Tourism Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17948,
                "name": "Sustainable Tourism",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17949,
                "name": "Tourism and Aviation",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17950,
                "name": "Events and Experience Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17951,
                "name": "Events and Experience Management (with Professional Experience)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17952,
                "name": "MBA (Sustainable Tourism)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17953,
                "name": "Management & Sustainable Tourism",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17954,
                "name": "Sustainable Tourism & Global Challenges (Dumfries Campus)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17955,
                "name": "Tourism Development & Culture (Erasmus Mundus Joint Master) (Dumfries Campus)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17956,
                "name": "Sustainable Tourism Development & Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17957,
                "name": "Events & Experience Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17958,
                "name": "Tourism & Cultural Policy",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17959,
                "name": "International Tourism Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17960,
                "name": "International Tourism and Aviation Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17961,
                "name": "Events & Experience Management (Goldsmiths, University of London)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17962,
                "name": "Tourism & Cultural Policy (Goldsmiths, University of London)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17963,
                "name": "Sustainable Tourism (University of Sunderland)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17964,
                "name": "Tourism and Aviation (University of Sunderland)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17965,
                "name": "Tourism and Events (University of Sunderland)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17966,
                "name": "Tourism and Hospitality (University of Sunderland)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17967,
                "name": "International Hospitality and Tourism Management (University of Central Lancashire)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17968,
                "name": "Internship in International Tourism, Hospitality and Event Management (University of Central Lancashire)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17969,
                "name": "Infection Prevention and Control",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17970,
                "name": "International Tourism and Aviation Management with Internship",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17971,
                "name": "International Tourism and Aviation Management (Extended Masters)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17972,
                "name": "Luxury Hospitality Management with Internship",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17973,
                "name": "Luxury Hospitality Management (Extended Masters)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17974,
                "name": "International Tourism and Aviation Management (Enhanced Extended)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17975,
                "name": "Responsible Tourism Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17976,
                "name": "Responsible Tourism Management (1 Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17977,
                "name": "Hospitality with Tourism Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17978,
                "name": "Hospitality with Tourism Management with Placement",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17979,
                "name": "International Hospitality Management with Placement",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17980,
                "name": "International Tourism Management with Placement",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17981,
                "name": "Marketing Management for Events, Hospitality and Tourism",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17982,
                "name": "Marketing Management for Events, Hospitality and Tourism with Placement",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17983,
                "name": "International Tourism and Hospitality Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17984,
                "name": "International Tourism and Hospitality Management (Belfast Campus)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17985,
                "name": "International Tourism and Hospitality Management (with Advanced Practice)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17986,
                "name": "Business with Hospitality and Tourism Management (1 Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17987,
                "name": "Business with Hospitality and Tourism Management (with Advanced Practice in Second Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17988,
                "name": "Business with Hospitality and Tourism Management (with Study Abroad in Second Year)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17989,
                "name": "Business with Hospitality and Tourism Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17990,
                "name": "Tourism Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17991,
                "name": "Tourism Marketing Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17992,
                "name": "Tourism Management (2 Years)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17993,
                "name": "International Hospitality, Events and Tourism Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17994,
                "name": "International Hotel and Tourism Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17995,
                "name": "International Business with Tourism and Hospitality",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17996,
                "name": "International Business with Tourism and Hospitality (Professional Practice)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17997,
                "name": "Management with Tourism and Hospitality",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17998,
                "name": "Management with Tourism and Hospitality (Professional Practice)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 17999,
                "name": "Sustainable Tourism",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 18000,
                "name": "Tourism and Aviation",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 18001,
                "name": "Tourism and Events",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 18002,
                "name": "Tourism and Hospitality",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 18003,
                "name": "Events and Experience Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 18004,
                "name": "Events and Experience Management (with Professional Experience)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 18005,
                "name": "International Hospitality and Tourism Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 18006,
                "name": "MBA (Sustainable Tourism)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 18007,
                "name": "Management & Sustainable Tourism",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 18008,
                "name": "Sustainable Tourism & Global Challenges (Dumfries Campus)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 18009,
                "name": "Tourism Development & Culture (Erasmus Mundus Joint Master) (Dumfries Campus)",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 18010,
                "name": "Events and Hospitality Leadership",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 18011,
                "name": "Innovation and Sustainable Hospitality",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 18012,
                "name": "Sustainable Tourism Development & Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 18013,
                "name": "International Tourism, Hospitality and Event Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 18014,
                "name": "International Tourism, Hospitality and Event Management with Placement Year",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 18015,
                "name": "International Hospitality Management with Digital Innovation",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 18016,
                "name": "International Hospitality and Event Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 18017,
                "name": "Internship in International Tourism, Hospitality and Event Management",
                "industry_id": 9,
                "deleted_at": null,
                "sub_industry_id": 37
            },
            {
                "id": 18018,
                "name": "Business Computing & Entrepreneurship (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18019,
                "name": "Management with Economics",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18020,
                "name": "Management with Entrepreneurship",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18021,
                "name": "Management with Marketing",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18022,
                "name": "Business Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18023,
                "name": "Business Management with Social Purpose",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18024,
                "name": "Business Management, Digital Innovation and Entrepreneurship",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18025,
                "name": "Business with Finance",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18026,
                "name": "Business with Marketing",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18027,
                "name": "Engineering with Business",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18028,
                "name": "Engineering with Business (4 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18029,
                "name": "International Business",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18030,
                "name": "Investment and Financial Risk Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18031,
                "name": "Business Analytics",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18032,
                "name": "Business Analytics (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18033,
                "name": "Business Economics",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18034,
                "name": "Business Economics (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18035,
                "name": "Business Economics with Foundation Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18036,
                "name": "Business Economics with Foundation Year (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18037,
                "name": "Business Management (1 Year Top-Up)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18038,
                "name": "Business Management (2 Year Top-Up)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18039,
                "name": "Business Management (2 Year Top-Up) (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18040,
                "name": "Business Studies",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18041,
                "name": "Business Studies (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18042,
                "name": "Business Studies with Foundation Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18043,
                "name": "Business Studies with Foundation Year (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18044,
                "name": "Business and Enterprise Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18045,
                "name": "Business and Enterprise Management (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18046,
                "name": "Business and Enterprise Management (1 Year Top-Up)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18047,
                "name": "Business and Enterprise Management (2 Year Top-Up)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18048,
                "name": "Business and Enterprise Management (2 Year Top-Up) (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18049,
                "name": "Business and Enterprise Management with Foundation Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18050,
                "name": "Business and Enterprise Management with Foundation Year (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18051,
                "name": "Business and Financial Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18052,
                "name": "Business and Financial Management (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18053,
                "name": "Business and Financial Management with Foundation Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18054,
                "name": "Business and Financial Management with Foundation Year (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18055,
                "name": "Business and Human Resource Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18056,
                "name": "Business and Human Resource Management (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18057,
                "name": "Business and Human Resource Management (1 Year Top-Up)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18058,
                "name": "Business and Human Resource Management (2 Year Top-Up)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18059,
                "name": "Business and Human Resource Management (2 Year Top-Up) (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18060,
                "name": "Business and Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18061,
                "name": "Business and Management (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18062,
                "name": "Business and Management with Foundation Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18063,
                "name": "Business and Management with Foundation Year (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18064,
                "name": "Business and Management with Law",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18065,
                "name": "Business and Management with Law (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18066,
                "name": "Business and Management with Law with Foundation Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18067,
                "name": "Business and Management with Law with Foundation Year (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18068,
                "name": "Business and Management with Psychology",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18069,
                "name": "Business and Management with Psychology (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18070,
                "name": "Business and Management with Psychology with Foundation Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18071,
                "name": "Business and Management with Psychology with Foundation Year (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18072,
                "name": "Business and Marketing",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18073,
                "name": "Business and Marketing (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18074,
                "name": "Business and Marketing (1 Year Top-Up)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18075,
                "name": "Business and Marketing (2 Year Top-Up)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18076,
                "name": "Business and Marketing with Foundation Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18077,
                "name": "Business and Marketing with Foundation Year (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18078,
                "name": "Fashion Management and Communication",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18079,
                "name": "Fashion Management and Communication (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18080,
                "name": "Fashion Management and Communication with Foundation Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18081,
                "name": "Fashion Management and Communication with Foundation Year (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18082,
                "name": "Festival and Entertainment Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18083,
                "name": "Festival and Entertainment Management (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18084,
                "name": "Festival and Entertainment Management (1 Year Top-Up)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18085,
                "name": "Festival and Entertainment Management with Foundation Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18086,
                "name": "Festival and Entertainment Management with Foundation Year (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18087,
                "name": "International Business (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18088,
                "name": "International Business (1 Year Top-Up)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18089,
                "name": "International Business (2 Year Top-Up)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18090,
                "name": "International Business (2 Year Top-Up) (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18091,
                "name": "International Business (European Partnership Programme)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18092,
                "name": "International Business with Accounting (1 Year Top-Up)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18093,
                "name": "International Business with Events Management (1 Year Top-Up)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18094,
                "name": "International Business with Finance (1 Year Top-Up)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18095,
                "name": "International Business with Foundation Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18096,
                "name": "International Business with Foundation Year (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18097,
                "name": "International Business with French",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18098,
                "name": "International Business with French (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18099,
                "name": "International Business with French with Foundation Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18100,
                "name": "International Business with French with Foundation Year (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18101,
                "name": "International Business with Hospitality Management (1 Year Top-Up)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18102,
                "name": "International Business with Management (1 Year Top-Up)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18103,
                "name": "International Business with Marketing (1 Year Top-Up)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18104,
                "name": "International Business with Spanish",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18105,
                "name": "International Business with Spanish (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18106,
                "name": "International Business with Spanish with Foundation Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18107,
                "name": "International Business with Spanish with Foundation Year (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18108,
                "name": "International Business with Tourism Management (1 Year Top-Up)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18109,
                "name": "International Education Management (1 Year Top-Up)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18110,
                "name": "International Tourism Management with French",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18111,
                "name": "International Tourism Management with French (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18112,
                "name": "International Tourism Management with Spanish",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18113,
                "name": "International Tourism Management with Spanish (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18114,
                "name": "Languages with International Business (French)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18115,
                "name": "Languages with International Business (French) (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18116,
                "name": "Languages with International Business (French) with Foundation Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18117,
                "name": "Languages with International Business (French) with Foundation Year (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18118,
                "name": "Languages with International Business (Spanish)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18119,
                "name": "Languages with International Business (Spanish) (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18120,
                "name": "Languages with International Business (Spanish) with Foundation Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18121,
                "name": "Languages with International Business (Spanish) with Foundation Year (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18122,
                "name": "Airline and Airport Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18123,
                "name": "Airline and Airport Management (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18124,
                "name": "Airline and Airport Management (1 Year Top-Up)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18125,
                "name": "Airline and Airport Management with Foundation Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18126,
                "name": "Airline and Airport Management with Foundation Year (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18127,
                "name": "Business Property Management (1 Year Top-Up)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18128,
                "name": "Business and Digital Technology",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18129,
                "name": "Business and Digital Technology (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18130,
                "name": "Business and Digital Technology with Foundation Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18131,
                "name": "Business and Digital Technology with Foundation Year (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18132,
                "name": "Construction Project Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18133,
                "name": "Construction Project Management (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18134,
                "name": "Construction Project Management (5 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18135,
                "name": "Events Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18136,
                "name": "Events Management (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18137,
                "name": "Events Management (1 Year Top-Up)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18138,
                "name": "Events Management (Arts and Entertainment) (1 Year Top-Up)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18139,
                "name": "Events Management (Experiential Marketing) (1 Year Top-Up)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18140,
                "name": "Events Management (Tourism) (1 Year Top-Up)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18141,
                "name": "Events Management with Foundation Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18142,
                "name": "Events Management with Foundation Year (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18143,
                "name": "Events and Leisure Management (1 Year Top-Up)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18144,
                "name": "Information Technology with Business Studies",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18145,
                "name": "Information Technology with Business Studies (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18146,
                "name": "Information Technology with Business Studies with Foundation Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18147,
                "name": "Information Technology with Business Studies with Foundation Year (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18148,
                "name": "International Hospitality Business Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18149,
                "name": "International Hospitality Business Management (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18150,
                "name": "International Hospitality Business Management (1 Year Top-Up)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18151,
                "name": "International Hospitality Business Management with Foundation Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18152,
                "name": "International Hospitality Business Management with Foundation Year (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18153,
                "name": "International Hotel and Resorts Management (1 Year Top-Up)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18154,
                "name": "International Tourism Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18155,
                "name": "International Tourism Management (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18156,
                "name": "International Tourism Management (1 Year Top-Up)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18157,
                "name": "International Tourism Management with Foundation Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18158,
                "name": "International Tourism Management with Foundation Year (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18159,
                "name": "International Tourism and Hospitality Business Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18160,
                "name": "International Tourism and Hospitality Business Management (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18161,
                "name": "International Tourism and Hospitality Business Management (1 Year Top-Up)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18162,
                "name": "International Tourism and Hospitality Business Management with Foundation Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18163,
                "name": "International Tourism and Hospitality Business Management with Foundation Year (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18164,
                "name": "Sport Business Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18165,
                "name": "Sport Business Management (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18166,
                "name": "Sport Business Management with Foundation Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18167,
                "name": "Sport Business Management with Foundation Year (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18168,
                "name": "Business (Including Placement)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18169,
                "name": "Chemistry with Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18170,
                "name": "Chemistry with Management (4 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18171,
                "name": "Chemistry with Management (Including Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18172,
                "name": "Chemistry with Management (Including Placement Year) (5 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18173,
                "name": "Chemistry with Management (Including Study Year Abroad)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18174,
                "name": "International Management and Modern Languages (French) (Including Year Abroad)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18175,
                "name": "International Management and Modern Languages (German) (Including Year Abroad)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18176,
                "name": "International Management and Modern Languages (Spanish) (Including Year Abroad)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18177,
                "name": "Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18178,
                "name": "Management (Including Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18179,
                "name": "Management with Marketing (Including Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18180,
                "name": "Mechanical Engineering with Manufacturing and Management (4 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18181,
                "name": "Mechanical Engineering with Manufacturing and Management (Including Placement Year) (5 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18182,
                "name": "Sport Management and Coaching",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18183,
                "name": "Sport Management and Coaching (Including Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18184,
                "name": "Air Transport Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18185,
                "name": "Air Transport Management with ATPL Studies",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18186,
                "name": "Air Transport Management with FATPL",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18187,
                "name": "Air Transport Management with Foundation Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18188,
                "name": "Air Transport Management with Placement",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18189,
                "name": "Air Transport Management with Private Pilot Licence",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18190,
                "name": "Business Studies (Saturday Study Fast-Track)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18191,
                "name": "Business Studies with Digital Marketing",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18192,
                "name": "Business Studies with Digital Marketing with Foundation Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18193,
                "name": "Business Studies with Entrepreneurship with Foundation Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18194,
                "name": "Business Studies with Internship",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18195,
                "name": "Business Studies with Marketing (Saturday Study Fast-Track)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18196,
                "name": "Construction Project Management with Foundation Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18197,
                "name": "Culinary Arts Management with Foundation Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18198,
                "name": "Culinary Arts Management with Placement",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18199,
                "name": "Event Management with Foundation Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18200,
                "name": "Fashion Buying and Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18201,
                "name": "Fashion Buying and Management with Foundation Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18202,
                "name": "Film and Screen Business",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18203,
                "name": "Film and Screen Business with Foundation Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18204,
                "name": "Finance and Management with Foundation Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18205,
                "name": "Food Business Management (Top-Up)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18206,
                "name": "Future Food and Culinary Management with Foundation Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18207,
                "name": "Future Food and Culinary Management with Placement",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18208,
                "name": "Human Resource Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18209,
                "name": "Human Resource Management with Foundation Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18210,
                "name": "Information Technology Management for Business (ITMB) with Foundation Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18211,
                "name": "Information Technology Management for Business (ITMB) with Placement",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18212,
                "name": "International Business Management with Foundation Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18213,
                "name": "International Hospitality Management with Foundation Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18214,
                "name": "International Hospitality Management with Placement",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18215,
                "name": "International Tourism Management with Placement",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18216,
                "name": "Nutrition and Food Management with Foundation Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18217,
                "name": "Nutrition and Food Management with Placement",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18218,
                "name": "Performance and Music Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18219,
                "name": "Performance and Music Management with Foundation Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18220,
                "name": "Business Studies with Entrepreneurship",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18221,
                "name": "Culinary Arts Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18222,
                "name": "Event Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18223,
                "name": "Finance and Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18224,
                "name": "Future Food and Culinary Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18225,
                "name": "Information Technology Management for Business (ITMB)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18226,
                "name": "International Business Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18227,
                "name": "International Hospitality Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18228,
                "name": "Music Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18229,
                "name": "Nutrition and Food Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18230,
                "name": "Air Transport Management (Airline and Airport Specialist)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18231,
                "name": "Accounting and Financial Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18232,
                "name": "Business Economics and Finance",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18233,
                "name": "Commercial Management and Quantity Surveying",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18234,
                "name": "Computing and Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18235,
                "name": "Computing and Management (4 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18236,
                "name": "Construction Engineering Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18237,
                "name": "Economics and Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18238,
                "name": "Engineering Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18239,
                "name": "English with Business Studies",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18240,
                "name": "Geography and Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18241,
                "name": "Information Technology Management for Business",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18242,
                "name": "Information Technology Management for Business (4 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18243,
                "name": "Marketing and Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18244,
                "name": "Mathematics, Accounting and Financial Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18245,
                "name": "Sport Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18246,
                "name": "Business Economics with Marketing",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18247,
                "name": "Business Economics with Marketing (4 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18248,
                "name": "Business Economics with Marketing (3.5 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18249,
                "name": "Business Economics with Marketing and Geography",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18250,
                "name": "Business Economics with Marketing and History",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18251,
                "name": "Business Economics with Marketing and Politics",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18252,
                "name": "Business Economics with Marketing and Psychology",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18253,
                "name": "Business Economics with Marketing with French",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18254,
                "name": "Business Economics with Marketing with Spanish",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18255,
                "name": "Business Management (4 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18256,
                "name": "International Business (4 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18257,
                "name": "International Business (3.5 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18258,
                "name": "International Business and Environmental Sustainability",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18259,
                "name": "International Business and International Relations",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18260,
                "name": "International Business with French (4 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18261,
                "name": "International Business with Marketing",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18262,
                "name": "International Business with Marketing (4 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18263,
                "name": "International Business with Spanish (4 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18264,
                "name": "Professional Development in Leadership and Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18265,
                "name": "Event and Marketing Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18266,
                "name": "Event and Tourism Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18267,
                "name": "Marketing Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18268,
                "name": "Business Management (with Professional Placement and Study Abroad)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18269,
                "name": "Business Management (with Professional Placement)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18270,
                "name": "Business Management (with Study Abroad)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18271,
                "name": "Event and Marketing Management (with Professional Placement and Study Abroad)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18272,
                "name": "Event and Marketing Management (with Professional Placement)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18273,
                "name": "Event and Marketing Management (with Study Abroad)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18274,
                "name": "Event and Tourism Management (with Professional Placement and Study Abroad)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18275,
                "name": "Event and Tourism Management (with Professional Placement)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18276,
                "name": "Event and Tourism Management (with Study Abroad)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18277,
                "name": "Marketing Management (with Professional Placement and Study Abroad)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18278,
                "name": "Marketing Management (with Professional Placement)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18279,
                "name": "Marketing Management (with Study Abroad)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18280,
                "name": "Accounting and Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18281,
                "name": "Accounting and Management (Including Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18282,
                "name": "Accounting and Management (Including Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18283,
                "name": "Accounting and Management (Including Year Abroad)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18284,
                "name": "Business Administration",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18285,
                "name": "Business Administration (Including Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18286,
                "name": "Business Administration (Including Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18287,
                "name": "Business Administration (Including Year Abroad)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18288,
                "name": "Business Administration and Supply Chain Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18289,
                "name": "Business Administration and Supply Chain Management (Including Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18290,
                "name": "Business Administration and Supply Chain Management (Including Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18291,
                "name": "Business Administration and Supply Chain Management (Including Year Abroad)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18292,
                "name": "Business Economics (Including Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18293,
                "name": "Business Economics (Including Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18294,
                "name": "Business Economics (Including Year Abroad)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18295,
                "name": "Business Management (Including Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18296,
                "name": "Business Management (Including Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18297,
                "name": "Business Management (Including Year Abroad)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18298,
                "name": "Business Management and Language Studies",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18299,
                "name": "Business Management and Modern Languages",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18300,
                "name": "Business Management with a Modern Language",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18301,
                "name": "Events Management (Including Year Abroad)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18302,
                "name": "Finance and Management (Including Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18303,
                "name": "Finance and Management (Including Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18304,
                "name": "Finance and Management (Including Year Abroad)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18305,
                "name": "Global Studies with Business Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18306,
                "name": "Global Studies with Business Management (Including Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18307,
                "name": "Global Studies with Business Management (Including Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18308,
                "name": "Global Studies with Business Management (Including Year Abroad)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18309,
                "name": "Hospitality Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18310,
                "name": "Hospitality Management (Including Year Abroad)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18311,
                "name": "International Business and Entrepreneurship",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18312,
                "name": "International Business and Entrepreneurship (Including Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18313,
                "name": "International Business and Entrepreneurship (Including Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18314,
                "name": "International Business and Entrepreneurship (Including Year Abroad)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18315,
                "name": "International Business and Finance",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18316,
                "name": "International Business and Finance (Including Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18317,
                "name": "International Business and Finance (Including Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18318,
                "name": "International Business and Finance (Including Year Abroad)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18319,
                "name": "Law with Business",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18320,
                "name": "Law with Business (Including Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18321,
                "name": "Law with Business (Including Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18322,
                "name": "Law with Business (Including Year Abroad)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18323,
                "name": "Management and Marketing",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18324,
                "name": "Management and Marketing (Including Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18325,
                "name": "Management and Marketing (Including Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18326,
                "name": "Management and Marketing (Including Year Abroad)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18327,
                "name": "Management Economics",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18328,
                "name": "Management Economics (3 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18329,
                "name": "Management Economics (Including Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18330,
                "name": "Management Economics (Including Foundation Year) (4 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18331,
                "name": "Management Economics (Including Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18332,
                "name": "Management Economics (Including Placement Year) (4 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18333,
                "name": "Management Economics (Including Year Abroad)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18334,
                "name": "Management Economics (Including Year Abroad) (4 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18335,
                "name": "Management Economics (Integrated Master)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18336,
                "name": "Management Economics (Integrated Master) (Including Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18337,
                "name": "Management Economics (Integrated Master) (Including Year Abroad)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18338,
                "name": "Marketing and Management (Integrated Master)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18339,
                "name": "Marketing and Management (Integrated Master) (Including Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18340,
                "name": "Marketing and Management (Integrated Master) (Including Year Abroad)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18341,
                "name": "Philosophy with Business Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18342,
                "name": "Philosophy with Business Management (Including Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18343,
                "name": "Philosophy with Business Management (Including Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18344,
                "name": "Philosophy with Business Management (Including Year Abroad)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18345,
                "name": "Politics with Business",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18346,
                "name": "Politics with Business (3 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18347,
                "name": "Politics with Business (Including Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18348,
                "name": "Politics with Business (Including Placement Year) (4 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18349,
                "name": "Politics with Business (Including Year Abroad)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18350,
                "name": "Politics with Business (Including Year Abroad) (4 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18351,
                "name": "Stage and Production Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18352,
                "name": "Accounting and Finance for International Business (Top-Up)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18353,
                "name": "Accounting and Finance for International Business (Top-Up) (1 Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18354,
                "name": "Aviation Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18355,
                "name": "Aviation Management (with Placement Year or Study Abroad Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18356,
                "name": "Business Administration (with Placement Year or Study Abroad Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18357,
                "name": "Business and Finance",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18358,
                "name": "Business and Finance (with Placement Year or Study Abroad Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18359,
                "name": "Business and Human Resource Management (with Placement Year or Study Abroad Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18360,
                "name": "Business and Marketing (with Placement Year or Study Abroad Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18361,
                "name": "Business Economics (with Placement Year or Study Abroad Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18362,
                "name": "Business Enterprise and Innovation Management (Top-Up)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18363,
                "name": "Business Management (with Placement Year or Study Abroad Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18364,
                "name": "Business Management & Leadership (Coventry)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18365,
                "name": "Business Management & Leadership (Dagenham, London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18366,
                "name": "Business Management & Leadership (Greenwich, London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18367,
                "name": "Business Management & Leadership (Scarborough)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18368,
                "name": "Business Management & Leadership (with Placement Year or Sandwich Year) (Coventry)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18369,
                "name": "Business Management & Leadership (with Placement Year or Sandwich Year) (Dagenham, London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18370,
                "name": "Business Management & Leadership (with Placement Year or Sandwich Year) (Greenwich, London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18371,
                "name": "Business Management & Leadership (with Placement Year or Sandwich Year) (Scarborough)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18372,
                "name": "Construction Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18373,
                "name": "Construction Management (with Placement Year or Study Abroad Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18374,
                "name": "Disaster and Emergency Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18375,
                "name": "Disaster and Emergency Management (with Placement Year or Study Abroad Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18376,
                "name": "Energy Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18377,
                "name": "Energy Management (with Placement Year or Study Abroad Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18378,
                "name": "Engineering Business Management (Top-Up)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18379,
                "name": "English and Education Management (Top-Up)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18380,
                "name": "Event Management (with Placement Year or Study Abroad Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18381,
                "name": "Global Business (Top-Up)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18382,
                "name": "Global Business Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18383,
                "name": "Global Events Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18384,
                "name": "Global Events Management (with Placement Year or Study Abroad Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18385,
                "name": "Information Technology for Business",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18386,
                "name": "Information Technology for Business (with Placement Year or Study Abroad Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18387,
                "name": "International Business (Top-Up)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18388,
                "name": "International Business Management (with Placement Year or Study Abroad Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18389,
                "name": "International Event and Hospitality Management (Top-Up)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18390,
                "name": "International Fashion Business",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18391,
                "name": "International Fashion Business (with Placement Year or Study Abroad Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18392,
                "name": "International Fashion Management and Marketing",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18393,
                "name": "International Fashion Management and Marketing (with Placement Year or Study Abroad Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18394,
                "name": "International Hospitality and Tourism Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18395,
                "name": "International Hospitality and Tourism Management (with Placement Year or Study Abroad Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18396,
                "name": "International Hospitality, Tourism and Wellness Management (Top-Up)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18397,
                "name": "Marketing Management (Top-Up)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18398,
                "name": "Quantity Surveying and Commercial Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18399,
                "name": "Quantity Surveying and Commercial Management (with Placement Year or Study Abroad Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18400,
                "name": "Sport & Leisure Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18401,
                "name": "Tourism & Hospitality Management (Dagenham, London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18402,
                "name": "Tourism & Hospitality Management (with Placement Year or Study Abroad Year) (Dagenham, London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18403,
                "name": "Tourism & Hospitality Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18404,
                "name": "Accounting & Finance and Business Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18405,
                "name": "Art & Design History and Business Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18406,
                "name": "Business Management and Childhood & Youth",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18407,
                "name": "Business Management and Computer Science",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18408,
                "name": "Business Management and Conservation Biology",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18409,
                "name": "Business Management and Contemporary Fashion Design",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18410,
                "name": "Business Management and Contemporary Performance",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18411,
                "name": "Business Management and Creative Writing",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18412,
                "name": "Business Management and Criminology",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18413,
                "name": "Business Management and Dance",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18414,
                "name": "Business Management and Early Childhood",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18415,
                "name": "Business Management and Economics",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18416,
                "name": "Business Management and English Language",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18417,
                "name": "Business Management and English Literature",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18418,
                "name": "Business Management and Film & Visual Culture",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18419,
                "name": "Business Management and Geography",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18420,
                "name": "Business Management and Health & Wellbeing",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18421,
                "name": "Business Management and History",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18422,
                "name": "Human Geography and Business Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18423,
                "name": "Business Management and Information Technology",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18424,
                "name": "Business Management and International Relations",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18425,
                "name": "Business Management and Law",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18426,
                "name": "Business Management and Marketing",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18427,
                "name": "Business Management and Mathematics",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18428,
                "name": "Business Management and Music",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18429,
                "name": "Music Production and Business Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18430,
                "name": "Business Management and Musical Theatre",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18431,
                "name": "Business Management and Nutrition",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18432,
                "name": "Business Management and Religious Studies",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18433,
                "name": "Business Management and Sociology",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18434,
                "name": "Business Management and Special Educational Needs",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18435,
                "name": "Business Management and Sport and & Exercise Science",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18436,
                "name": "Business Management and Sport & Physical Education",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18437,
                "name": "Business Management and Theology",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18438,
                "name": "Business Management and Tourism",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18439,
                "name": "Creative Industries Business Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18440,
                "name": "Tourism Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18441,
                "name": "Accounting & Finance and Business Management (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18442,
                "name": "Business Management (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18443,
                "name": "Business Management and Computer Science (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18444,
                "name": "Business Management and Conservation Biology (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18445,
                "name": "Business Management and Contemporary Fashion Design (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18446,
                "name": "Business Management and Contemporary Performance (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18447,
                "name": "Business Management and Creative Writing (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18448,
                "name": "Business Management and Criminology (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18449,
                "name": "Business Management and Dance (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18450,
                "name": "Business Management and Early Childhood (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18451,
                "name": "Business Management and Economics (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18452,
                "name": "Business Management and English Language (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18453,
                "name": "Business Management and English Literature (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18454,
                "name": "Business Management and Film & Visual Culture (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18455,
                "name": "Business Management and Geography (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18456,
                "name": "Business Management and Health & Wellbeing (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18457,
                "name": "Business Management and History (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18458,
                "name": "Business Management and Information Technology (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18459,
                "name": "Business Management and International Relations (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18460,
                "name": "Business Management and Law (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18461,
                "name": "Business Management and Marketing (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18462,
                "name": "Business Management and Mathematics (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18463,
                "name": "Business Management and Music (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18464,
                "name": "Business Management and Nutrition (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18465,
                "name": "Business Management and Religious Studies (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18466,
                "name": "Business Management and Sociology (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18467,
                "name": "Business Management and Special Educational Needs (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18468,
                "name": "Business Management and Sport and & Exercise Science (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18469,
                "name": "Business Management and Sport & Physical Education (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18470,
                "name": "Business Management and Theology (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18471,
                "name": "Business Management and Tourism (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18472,
                "name": "Business Management and Childhood & Youth (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18473,
                "name": "Creative Industries Business Management (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18474,
                "name": "Tourism Management (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18475,
                "name": "Aerospace Technology with Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18476,
                "name": "Automotive Technology with Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18477,
                "name": "Business Administration (4 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18478,
                "name": "Business Administration with French",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18479,
                "name": "Business Administration with German",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18480,
                "name": "Business Administration with Japanese",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18481,
                "name": "Business Administration with Mandarin",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18482,
                "name": "Business Administration with Spanish",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18483,
                "name": "Business and Accounting",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18484,
                "name": "Business and Event Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18485,
                "name": "Business and Tourism",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18486,
                "name": "Business Management with French",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18487,
                "name": "Business Management with German",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18488,
                "name": "Business Management with Information Systems",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18489,
                "name": "Business Management with Japanese",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18490,
                "name": "Business Management with Leadership",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18491,
                "name": "Business Management with Mandarin",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18492,
                "name": "Business Management with Spanish",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18493,
                "name": "Environmental Management and Ecology",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18494,
                "name": "Event Management and Marketing",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18495,
                "name": "Event Management and Tourism",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18496,
                "name": "Event Management with French",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18497,
                "name": "Event Management with German",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18498,
                "name": "Event Management with Japanese",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18499,
                "name": "Event Management with Mandarin",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18500,
                "name": "Event Management with Spanish",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18501,
                "name": "Fashion and Fashion Business",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18502,
                "name": "International Business with German",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18503,
                "name": "International Business with Japanese",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18504,
                "name": "International Business with Mandarin",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18505,
                "name": "International Tourism Management with German",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18506,
                "name": "International Tourism Management with Japanese",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18507,
                "name": "International Tourism Management with Mandarin",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18508,
                "name": "International Tourism Management with Placement Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18509,
                "name": "Music Industry Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18510,
                "name": "Sports Business Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18511,
                "name": "Tourism Management with French",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18512,
                "name": "Tourism Management with German",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18513,
                "name": "Tourism Management with Japanese",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18514,
                "name": "Tourism Management with Mandarin",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18515,
                "name": "Tourism Management with Spanish",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18516,
                "name": "Accounting & Business Analysis and Technology",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18517,
                "name": "Accounting & Business Enterprise",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18518,
                "name": "Accounting & Business Law",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18519,
                "name": "Accounting & Hospitality and Tourism Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18520,
                "name": "Accounting & Human Resource Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18521,
                "name": "Business",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18522,
                "name": "Business Analysis & Technology",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18523,
                "name": "Business Analysis and Technology & Business Enterprise",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18524,
                "name": "Business Analysis and Technology & Business Law",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18525,
                "name": "Business Analysis and Technology & Economics",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18526,
                "name": "Business Analysis and Technology & Finance",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18527,
                "name": "Business Analysis and Technology & Hospitality and Tourism Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18528,
                "name": "Business Analysis and Technology & Human Resource Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18529,
                "name": "Business Analysis and Technology & Marketing",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18530,
                "name": "Business Analysis and Technology & Mathematics and Statistics",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18531,
                "name": "Business Enterprise",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18532,
                "name": "Business Enterprise & Business Law",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18533,
                "name": "Business Enterprise & Economics",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18534,
                "name": "Business Enterprise & Finance",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18535,
                "name": "Business Enterprise & Hospitality and Tourism Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18536,
                "name": "Business Enterprise & Human Resource Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18537,
                "name": "Business Enterprise & Marketing",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18538,
                "name": "Economics & Business Law",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18539,
                "name": "Economics & Human Resource Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18540,
                "name": "Education & Human Resource Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18541,
                "name": "Electronic & Electrical Engineering with Business Studies",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18542,
                "name": "English & Human Resource Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18543,
                "name": "English and Creative Writing & Human Resource Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18544,
                "name": "Finance & Business Law",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18545,
                "name": "Finance & Hospitality and Tourism Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18546,
                "name": "Finance & Human Resource Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18547,
                "name": "French & Hospitality and Tourism Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18548,
                "name": "French & Human Resource Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18549,
                "name": "History & Human Resource Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18550,
                "name": "Hospitality & Tourism Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18551,
                "name": "Hospitality and Tourism Management & Business Law",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18552,
                "name": "Hospitality and Tourism Management & Human Resource Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18553,
                "name": "Hospitality and Tourism Management & Marketing",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18554,
                "name": "Human Resource Management & Business Law",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18555,
                "name": "Human Resource Management & Marketing",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18556,
                "name": "Human Resource Management & Psychology",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18557,
                "name": "Intercultural Communications for Global Business",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18558,
                "name": "International Business with a Modern Language",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18559,
                "name": "Journalism, Media and Communication & Human Resource Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18560,
                "name": "Law & Human Resource Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18561,
                "name": "Manufacturing Engineering with Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18562,
                "name": "Manufacturing Engineering with Management (5 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18563,
                "name": "Marketing & Business Law",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18564,
                "name": "Mathematics, Statistics & Business Analysis",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18565,
                "name": "Politics and International Relations & Human Resource Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18566,
                "name": "Psychology & Human Resource Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18567,
                "name": "Social Policy & Human Resource Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18568,
                "name": "Spanish & Hospitality and Tourism Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18569,
                "name": "Spanish & Human Resource Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18570,
                "name": "Business Finance",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18571,
                "name": "Business Finance (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18572,
                "name": "Business Finance (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18573,
                "name": "Business Management (3 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18574,
                "name": "Business Management (Combined)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18575,
                "name": "Business Management (Entrepreneurship)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18576,
                "name": "Business Management (Entrepreneurship) (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18577,
                "name": "Business Management (Entrepreneurship) (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18578,
                "name": "Business Management (Finance)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18579,
                "name": "Business Management (Finance) (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18580,
                "name": "Business Management (Finance) (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18581,
                "name": "Business Management (Human Resource Management)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18582,
                "name": "Business Management (Human Resource Management) (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18583,
                "name": "Business Management (Human Resource Management) (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18584,
                "name": "Business Management (Marketing)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18585,
                "name": "Business Management (Marketing) (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18586,
                "name": "Business Management (Marketing) (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18587,
                "name": "Business Management (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18588,
                "name": "Business Management and Administration (Top-Up)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18589,
                "name": "Business Management and Marketing Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18590,
                "name": "Business with Psychology",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18591,
                "name": "Events and Festivals Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18592,
                "name": "Events and Festivals Management (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18593,
                "name": "Events and Festivals Management (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18594,
                "name": "Events Management (Combined)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18595,
                "name": "Events Management (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18596,
                "name": "Events Management and Business Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18597,
                "name": "Events Management and International Tourism Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18598,
                "name": "Geography and Natural Hazard Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18599,
                "name": "International Business Management (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18600,
                "name": "International Business Management (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18601,
                "name": "International Business Management with a Language (French or Spanish)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18602,
                "name": "International Business Management with a Language (French or Spanish) (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18603,
                "name": "International Tourism Management (Combined)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18604,
                "name": "International Tourism Management (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18605,
                "name": "International Tourism Management and Business Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18606,
                "name": "International Tourism Management and Marketing Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18607,
                "name": "International Tourism Management with a Language (French or Spanish)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18608,
                "name": "International Tourism Management with a Language (French or Spanish) (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18609,
                "name": "Law with Business (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18610,
                "name": "Marketing Management (Combined)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18611,
                "name": "Marketing Management (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18612,
                "name": "Marketing Management (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18613,
                "name": "Natural Hazard Management (Combined)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18614,
                "name": "Sport Management (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18615,
                "name": "Accounting and Financial Management with a Foundation Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18616,
                "name": "Accounting and Financial Management with a Placement Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18617,
                "name": "Accounting and Financial Management with a Year Abroad",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18618,
                "name": "Business Economics with a Foundation Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18619,
                "name": "Business Economics with a Placement Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18620,
                "name": "Business Economics with a Year Abroad",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18621,
                "name": "Business Management and Accounting",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18622,
                "name": "Business Management and Accounting with a Foundation Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18623,
                "name": "Business Management and Accounting with a Placement Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18624,
                "name": "Business Management and Accounting with a Year Abroad",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18625,
                "name": "Business Management and Financial Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18626,
                "name": "Business Management and Financial Management with a Foundation Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18627,
                "name": "Business Management and Financial Management with a Placement Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18628,
                "name": "Business Management and Financial Management with a Year Abroad",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18629,
                "name": "Business Management and Marketing with a Foundation Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18630,
                "name": "Business Management and Marketing with a Placement Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18631,
                "name": "Business Management and Marketing with a Year Abroad",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18632,
                "name": "Business Management and Supply Chain Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18633,
                "name": "Business Management and Supply Chain Management with a Foundation Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18634,
                "name": "Business Management and Supply Chain Management with a Placement Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18635,
                "name": "Business Management and Supply Chain Management with a Year Abroad",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18636,
                "name": "Business Management with a Foundation Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18637,
                "name": "Business Management with a Placement Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18638,
                "name": "Business Management with a Year Abroad",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18639,
                "name": "Business Management with Entrepreneurship",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18640,
                "name": "Business Management with Entrepreneurship with a Foundation Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18641,
                "name": "Business Management with Entrepreneurship with a Placement Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18642,
                "name": "Business Management with Entrepreneurship with a Year Abroad",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18643,
                "name": "Business Management with Human Resource Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18644,
                "name": "Business Management with Human Resource Management with a Foundation Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18645,
                "name": "Business Management with Human Resource Management with a Placement Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18646,
                "name": "Business Management with Human Resource Management with a Year Abroad",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18647,
                "name": "Financial Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18648,
                "name": "Financial Management with a Foundation Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18649,
                "name": "Financial Management with a Placement Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18650,
                "name": "Financial Management with a Year Abroad",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18651,
                "name": "International Business with a Foundation Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18652,
                "name": "International Business with a Placement Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18653,
                "name": "International Business with a Year Abroad",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18654,
                "name": "Law with Business Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18655,
                "name": "Law with Business Management with a Foundation Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18656,
                "name": "Law with Business Management with a Year Abroad",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18657,
                "name": "Marketing and Management with a Foundation Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18658,
                "name": "Marketing and Management with a Placement Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18659,
                "name": "Marketing and Management with a Year Abroad",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18660,
                "name": "Business Computing",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18661,
                "name": "Business Economics (Extended)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18662,
                "name": "Business Entrepreneurship and Innovation",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18663,
                "name": "Business Entrepreneurship and Innovation (Extended)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18664,
                "name": "Business Logistics and Transport Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18665,
                "name": "Business Logistics and Transport Management (Extended)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18666,
                "name": "Business Logistics and Transport Management (Year 2 & 3 Direct Entry)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18667,
                "name": "Business Management (Extended)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18668,
                "name": "Business Management (Year 2 & 3 Direct Entry)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18669,
                "name": "Business Management and Leadership",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18670,
                "name": "Business Psychology",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18671,
                "name": "Business Purchasing and Supply Chain Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18672,
                "name": "Business Purchasing and Supply Chain Management (Extended)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18673,
                "name": "Business Purchasing and Supply Chain Management (Year 2 & 3 Direct Entry)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18674,
                "name": "Business Studies (Extended)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18675,
                "name": "Business with Accounting",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18676,
                "name": "Business with Finance (Extended)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18677,
                "name": "Business with Finance (Year 2 & 3 Direct Entry)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18678,
                "name": "Business with Marketing (Extended)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18679,
                "name": "Business with Marketing (Year 2 & 3 Direct Entry)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18680,
                "name": "Engineering Management (Extended)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18681,
                "name": "Events Management (Extended)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18682,
                "name": "Hospitality Management (Extended)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18683,
                "name": "Hospitality Management (Year 2 & 3 Direct Entry)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18684,
                "name": "Human Resource Management (Extended)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18685,
                "name": "International Business (Extended)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18686,
                "name": "International Business with Language",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18687,
                "name": "Marketing Management (Extended)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18688,
                "name": "Mathematics with Business",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18689,
                "name": "Tourism Management (Extended)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18690,
                "name": "Tourism Management with Language",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18691,
                "name": "Accounting with Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18692,
                "name": "Architectural Technology and Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18693,
                "name": "Business Analytics (3 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18694,
                "name": "Business Studies (5 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18695,
                "name": "Business Technology",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18696,
                "name": "Business with Computing",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18697,
                "name": "Business with Drama",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18698,
                "name": "Business with Education",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18699,
                "name": "Business with Irish",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18700,
                "name": "Business with Specialisms",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18701,
                "name": "Business with Specialisms (6 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18702,
                "name": "Communication Management and Public Relations",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18703,
                "name": "Communication Management and Public Relations (4 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18704,
                "name": "Construction Engineering and Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18705,
                "name": "Construction Engineering and Management (4 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18706,
                "name": "Construction Engineering and Management (HLA)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18707,
                "name": "Consumer Management and Food Innovation",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18708,
                "name": "Consumer Management and Food Innovation (4 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18709,
                "name": "Culinary Arts Management (5 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18710,
                "name": "Engineering Management (4 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18711,
                "name": "Finance and Investment Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18712,
                "name": "Food Business and Retail Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18713,
                "name": "Food Business and Retail Management (5 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18714,
                "name": "Football Coaching and Business Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18715,
                "name": "International Business (6 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18716,
                "name": "International Hospitality Management (5 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18717,
                "name": "International Travel and Tourism Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18718,
                "name": "Irish with Business",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18719,
                "name": "Leisure and Events Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18720,
                "name": "Leisure and Events Management (5 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18721,
                "name": "Management Practice",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18722,
                "name": "Management Practice Business Skills",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18723,
                "name": "Quantity Surveying and Commercial Management (5 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18724,
                "name": "Quantity Surveying and Commercial Management (HLA)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18725,
                "name": "Accounting and Business Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18726,
                "name": "Accounting and Business Management (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18727,
                "name": "Business and Events Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18728,
                "name": "Business and Events Management (Top Up)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18729,
                "name": "Business and Events Management (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18730,
                "name": "Business and Human Resource Management (Top Up)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18731,
                "name": "Business and Human Resource Management (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18732,
                "name": "Business and Law",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18733,
                "name": "Business and Law (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18734,
                "name": "Business and Management (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18735,
                "name": "Business Computing (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18736,
                "name": "Business Management and Economics (Top Up)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18737,
                "name": "Business Management and Leadership (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18738,
                "name": "Business Management with Marketing (Top Up)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18739,
                "name": "Construction Project Management (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18740,
                "name": "Environmental Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18741,
                "name": "International Business (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18742,
                "name": "International Business Communication (Top Up)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18743,
                "name": "International Business Management (Top Up)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18744,
                "name": "Quantity Surveying and Commercial Management (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18745,
                "name": "Software Engineering for Business",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18746,
                "name": "Software Engineering for Business (with Foundation Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18747,
                "name": "Sports Business and Entrepreneurship",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18748,
                "name": "Business and Management (Top Up)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18749,
                "name": "Business Management with Accounting and Finance (Top Up)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18750,
                "name": "Business Analytics (with Integrated Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18751,
                "name": "Business and International Relations",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18752,
                "name": "Business and International Relations (with Integrated Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18753,
                "name": "Business and Management (with Integrated Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18754,
                "name": "Business and Mathematics",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18755,
                "name": "Business and Mathematics (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18756,
                "name": "Business and Politics",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18757,
                "name": "Business and Politics (with Integrated Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18758,
                "name": "Business and Sociology",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18759,
                "name": "Business and Sociology (with Integrated Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18760,
                "name": "Business and Supply Chain Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18761,
                "name": "Business and Supply Chain Management (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18762,
                "name": "Business Computing and IT",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18763,
                "name": "Business Computing and IT (with Integrated Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18764,
                "name": "Business Enterprise Development",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18765,
                "name": "Business Management and English Language (with Integrated Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18766,
                "name": "Business Management and Social Policy",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18767,
                "name": "Business Management and Social Policy (with Integrated Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18768,
                "name": "Economics and Management (with Integrated Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18769,
                "name": "Human Resources and Business Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18770,
                "name": "Human Resources and Business Management (with Integrated Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18771,
                "name": "International Business and Economics",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18772,
                "name": "International Business and Economics (with Integrated Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18773,
                "name": "International Business and Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18774,
                "name": "International Business and Management (with Integrated Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18775,
                "name": "Logistics with Supply Chain Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18776,
                "name": "Logistics with Supply Chain Management (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18777,
                "name": "Product Design and Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18778,
                "name": "Product Design and Management (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18779,
                "name": "Psychology and Business",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18780,
                "name": "Psychology and Business (with Integrated Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18781,
                "name": "Transport Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18782,
                "name": "Transport Management (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18783,
                "name": "Aerospace Engineering with Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18784,
                "name": "Business Accounting with Industrial/Professional Experience",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18785,
                "name": "Environmental Management with Professional Placement",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18786,
                "name": "Fashion Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18787,
                "name": "Information Technology Management for Business with Industrial Experience",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18788,
                "name": "International Business, Finance and Economics",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18789,
                "name": "International Business, Finance and Economics with Industrial/Professional Experience",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18790,
                "name": "International Disaster Management & Humanitarian Response",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18791,
                "name": "International Disaster Management and Humanitarian Response and Arabic",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18792,
                "name": "International Disaster Management and Humanitarian Response and Chinese",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18793,
                "name": "International Disaster Management and Humanitarian Response and French",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18794,
                "name": "International Disaster Management and Humanitarian Response and Spanish",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18795,
                "name": "International Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18796,
                "name": "Management (Accounting & Finance) with Industrial/Professional Experience",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18797,
                "name": "Management (Accounting and Finance)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18798,
                "name": "Management (Human Resources)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18799,
                "name": "Management (Human Resources) with Industrial/Professional Experience",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18800,
                "name": "Management (Innovation, Strategy and Entrepreneurship)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18801,
                "name": "Management (Innovation, Strategy and Entrepreneurship) with Industrial / Professional Experience",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18802,
                "name": "Management (International Business Economics)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18803,
                "name": "Management (International Business Economics) with Industrial/Professional Experience",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18804,
                "name": "Management (Marketing)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18805,
                "name": "Management (Marketing) with Industrial/Professional Experience",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18806,
                "name": "Management with Industrial/Professional Experience",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18807,
                "name": "Management, Leadership and Leisure",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18808,
                "name": "Mechanical Engineering with Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18809,
                "name": "Mechanical Engineering with Management (4 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18810,
                "name": "Modern Language and Business & Management (Arabic)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18811,
                "name": "Modern Language and Business & Management (Chinese)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18812,
                "name": "Modern Language and Business & Management (French)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18813,
                "name": "Modern Language and Business & Management (German)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18814,
                "name": "Modern Language and Business & Management (Italian)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18815,
                "name": "Modern Language and Business & Management (Japanese)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18816,
                "name": "Modern Language and Business & Management (Portuguese)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18817,
                "name": "Modern Language and Business & Management (Russian)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18818,
                "name": "Modern Language and Business & Management (Spanish)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18819,
                "name": "Accountancy and Business Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18820,
                "name": "Business Management and English",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18821,
                "name": "Business Management and Finance",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18822,
                "name": "Business Management and French",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18823,
                "name": "Business Management and French (5 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18824,
                "name": "Business Management and Gaelic Studies",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18825,
                "name": "Business Management and German",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18826,
                "name": "Business Management and German (5 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18827,
                "name": "Business Management and Information Systems",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18828,
                "name": "Business Management and Information Systems (4 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18829,
                "name": "Business Management and Legal Studies",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18830,
                "name": "Business Management and Politics",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18831,
                "name": "Business Management and Psychology",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18832,
                "name": "Business Management and Real Estate",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18833,
                "name": "Business Management and Spanish & Latin American Studies",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18834,
                "name": "Business Management and Spanish & Latin American Studies (5 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18835,
                "name": "International Business (5 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18836,
                "name": "International Business with Gaelic",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18837,
                "name": "Law with Options in Business Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18838,
                "name": "International Business with French (5 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18839,
                "name": "International Business with Gaelic (5 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18840,
                "name": "International Business with German (5 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18841,
                "name": "International Business with Mandarin (5 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18842,
                "name": "International Business with Spanish (5 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18843,
                "name": "Accounting and Management with a Year Abroad",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18844,
                "name": "Accounting and Management with a Year in Industry",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18845,
                "name": "Business Analytics and Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18846,
                "name": "Business Analytics and Management with a Year Abroad",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18847,
                "name": "Business Analytics and Management with a Year in Industry",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18848,
                "name": "Business and Human Resource Management with a Year Abroad",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18849,
                "name": "Business and Human Resource Management with a Year in Industry",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18850,
                "name": "Business Finance and Economics",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18851,
                "name": "Business Finance and Economics with a Placement Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18852,
                "name": "Business Finance and Economics with a Year Abroad",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18853,
                "name": "Business Finance and Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18854,
                "name": "Business Finance and Management with a Year Abroad",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18855,
                "name": "Business Finance and Management with a Year in Industry",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18856,
                "name": "Business Information Systems",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18857,
                "name": "Business Information Systems with a Year in Industry",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18858,
                "name": "Business Management with a Year in Industry",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18859,
                "name": "Energy Engineering with Environmental Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18860,
                "name": "Intercultural Communication with Business Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18861,
                "name": "Intercultural Communication with Business Management with a Foundation Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18862,
                "name": "International Business Management with a Year Abroad",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18863,
                "name": "International Business Management with a Year in Industry",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18864,
                "name": "International Development Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18865,
                "name": "International Development Management with a Placement Year",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18866,
                "name": "International Development Management with a Year Abroad",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18867,
                "name": "Marketing and Management with a Year in Industry",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18868,
                "name": "Modern Languages with Management Studies",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18869,
                "name": "Events & Experience Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18870,
                "name": "International Retail Business, Sustainability & Technologies",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18871,
                "name": "Luxury Brand Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18872,
                "name": "Management of Innovation",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18873,
                "name": "Actuarial Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18874,
                "name": "Air Safety Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18875,
                "name": "Aircraft Maintenance Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18876,
                "name": "Airport Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18877,
                "name": "Business Economics/International Business Economics",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18878,
                "name": "Charity Accounting and Financial Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18879,
                "name": "Culture, Policy and Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18880,
                "name": "Digital Supply Chain Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18881,
                "name": "Health Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18882,
                "name": "Insurance and Risk Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18883,
                "name": "International Business Economics",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18884,
                "name": "Investment Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18885,
                "name": "Maritime Operations and Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18886,
                "name": "Maritime Safety and Security Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18887,
                "name": "NGO Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18888,
                "name": "Project Management, Finance and Risk",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18889,
                "name": "Renewable Energy and Power Systems Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18890,
                "name": "Voluntary Sector Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18891,
                "name": "Arts and Cultural Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18892,
                "name": "Arts and Cultural Management (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18893,
                "name": "Digital Media Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18894,
                "name": "Digital Media Management (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18895,
                "name": "Advanced Engineering & Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18896,
                "name": "Financial Management (Fast track)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18897,
                "name": "IT Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18898,
                "name": "Information Technology Management (with Placement Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18899,
                "name": "International Events Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18900,
                "name": "International Events Management (Work Experience Route)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18901,
                "name": "International Hospitality & Tourism Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18902,
                "name": "International Tourism and Aviation Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18903,
                "name": "Logistics and Supply Chain Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18904,
                "name": "Logistics and Supply Chain Management (with Work Placement)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18905,
                "name": "Nutrition with Public Health Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18906,
                "name": "Wealth Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18907,
                "name": "International Business and Human Resource Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18908,
                "name": "Logistics and Supply Chain Management (with Work Experience)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18909,
                "name": "Automotive Engineering with Business Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18910,
                "name": "Automotive Technology with Business Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18911,
                "name": "Business Analytics (Online)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18912,
                "name": "Economics for Business Intelligence and Systems",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18913,
                "name": "Engineering Business Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18914,
                "name": "Entrepreneurship and Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18915,
                "name": "Entrepreneurship Management and Innovation (Online)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18916,
                "name": "Finance with Risk Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18917,
                "name": "Human Resource Management and Consulting",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18918,
                "name": "Innovation and Technology Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18919,
                "name": "Operations, Logistics and Supply Chain Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18920,
                "name": "Sustainability and Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18921,
                "name": "Translation with Business Interpreting (Chinese)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18922,
                "name": "Engineering Business Management (Online)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18923,
                "name": "Arts Management (Birkbeck, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18924,
                "name": "Arts Policy and Management (Birkbeck, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18925,
                "name": "Arts Policy and Management (Certificate) (Birkbeck, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18926,
                "name": "Bio-Business (Birkbeck, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18927,
                "name": "Business Innovation (Birkbeck, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18928,
                "name": "Business Innovation with E-Business (Birkbeck, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18929,
                "name": "Business Innovation with Entrepreneurship (Birkbeck, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18930,
                "name": "Business Innovation with International Technology Management (Birkbeck, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18931,
                "name": "Business, Political Economy and Society (Birkbeck, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18932,
                "name": "Corporate Governance and Business Ethics (Birkbeck, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18933,
                "name": "Corporate Governance and Business Ethics (Certificate) (Birkbeck, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18934,
                "name": "Culinary Innovation Management (Birkbeck, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18935,
                "name": "Curating and Collections Management (Birkbeck, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18936,
                "name": "Digital Media Management (Birkbeck, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18937,
                "name": "Digital Media Management (Certificate) (Birkbeck, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18938,
                "name": "History of Art with Collections Management (Birkbeck, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18939,
                "name": "Human Resource Management (Birkbeck, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18940,
                "name": "International Business (Birkbeck, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18941,
                "name": "International Business and Development (Birkbeck, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18942,
                "name": "International Management (Birkbeck, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18943,
                "name": "Management (Birkbeck, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18944,
                "name": "Management (Certificate) (Birkbeck, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18945,
                "name": "Management (Diploma) (Birkbeck, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18946,
                "name": "Management (Research) (Birkbeck, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18947,
                "name": "Management and Finance (Birkbeck, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18948,
                "name": "Management Consultancy and Organisational Change (Birkbeck, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18949,
                "name": "Management with Business Innovation (Birkbeck, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18950,
                "name": "Management with Business Strategy and the Environment (Birkbeck, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18951,
                "name": "Management with Corporate Governance and Business Ethics (Birkbeck, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18952,
                "name": "Management with Creative Industries (Birkbeck, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18953,
                "name": "Management with Human Resource Management (Birkbeck, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18954,
                "name": "Management with International Business (Birkbeck, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18955,
                "name": "Management with International Business and Development (Birkbeck, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18956,
                "name": "Management with Marketing (Birkbeck, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18957,
                "name": "Management with Sport Management (Birkbeck, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18958,
                "name": "Museum Cultures with Collections Management (Birkbeck, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18959,
                "name": "Public Policy and Management (Birkbeck, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18960,
                "name": "Public Policy and Management (Research) (Birkbeck, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18961,
                "name": "Quantitative Risk Management (Birkbeck, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18962,
                "name": "Sport Management (Birkbeck, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18963,
                "name": "Sport Management (Certificate) (Birkbeck, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18964,
                "name": "Sport Management and Marketing (Birkbeck, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18965,
                "name": "Sport Management and the Business (Birkbeck, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18966,
                "name": "Sport Management, Governance and Policy (1 Year) (Birkbeck, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18967,
                "name": "Accounting and Management (University of Southampton)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18968,
                "name": "Business Analytics and Finance (University of Southampton)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18969,
                "name": "Business Analytics and Management Science (University of Southampton)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18970,
                "name": "Business and Heritage Management (University of Southampton)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18971,
                "name": "Business Strategy and Innovation Management (University of Southampton)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18972,
                "name": "Design Management (University of Southampton)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18973,
                "name": "Digital Business (University of Southampton)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18974,
                "name": "Education Management and Leadership (University of Southampton)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18975,
                "name": "Fashion Management (University of Southampton)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18976,
                "name": "Film and Cultural Management (University of Southampton)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18977,
                "name": "Global Literary Industries Management (University of Southampton)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18978,
                "name": "Global Media Management (University of Southampton)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18979,
                "name": "Human Resource Management (University of Southampton)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18980,
                "name": "International Entrepreneurship and Management (University of Southampton)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18981,
                "name": "International Management (University of Southampton)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18982,
                "name": "International Music Management (University of Southampton)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18983,
                "name": "Leadership and Management in Health and Social Care (University of Southampton)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18984,
                "name": "Luxury Brand Management (University of Southampton)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18985,
                "name": "Marketing Management (University of Southampton)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18986,
                "name": "Project Management (University of Southampton)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18987,
                "name": "Public Health Management (University of Southampton)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18988,
                "name": "Risk Management (University of Southampton)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18989,
                "name": "Water Resources Management (University of Southampton)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18990,
                "name": "Accounting and Financial Management (Royal Holloway, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18991,
                "name": "Engineering Management (Royal Holloway, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18992,
                "name": "Entrepreneurship and Innovation with a Year in Business (Royal Holloway, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18993,
                "name": "Environmental Diagnosis and Management (Royal Holloway, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18994,
                "name": "Human Resource Management (Royal Holloway, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18995,
                "name": "International Management (Royal Holloway, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18996,
                "name": "International Management (Marketing) (Royal Holloway, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18997,
                "name": "International Media Management (Royal Holloway, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18998,
                "name": "Logistics and Supply Chain Management (Royal Holloway, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 18999,
                "name": "Project Management (Royal Holloway, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19000,
                "name": "Sustainability and Management (Royal Holloway, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19001,
                "name": "Events & Experience Management (Goldsmiths, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19002,
                "name": "International Retail Business, Sustainability & Technologies (Goldsmiths, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19003,
                "name": "Luxury Brand Management (Goldsmiths, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19004,
                "name": "Management of Innovation (Goldsmiths, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19005,
                "name": "Artificial Intelligence with Business Strategy (Aston University)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19006,
                "name": "Business Analytics (Aston University)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19007,
                "name": "Business and Management (Aston University)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19008,
                "name": "Business Economics and Finance (Aston University)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19009,
                "name": "Business Enterprise Development (Aston University)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19010,
                "name": "Business Psychology (Aston University)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19011,
                "name": "Crisis and Disaster Management (Aston University)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19012,
                "name": "Engineering Management (Aston University)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19013,
                "name": "Global Operations and Service Management (Aston University)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19014,
                "name": "Human Resource Management (Aston University)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19015,
                "name": "Information Systems and Business Analysis (Aston University)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19016,
                "name": "International Business (Aston University)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19017,
                "name": "MBA (Healthcare Management) (Aston University)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19018,
                "name": "Strategic Marketing Management (Aston University)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19019,
                "name": "Strategy and International Business (Aston University)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19020,
                "name": "Supply Chain Management (Aston University)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19021,
                "name": "Translating for Business and International Institutions (Aston University)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19022,
                "name": "Work Psychology and Business (Aston University)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19023,
                "name": "Business Project Management (London South Bank University)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19024,
                "name": "Construction Project Management (London South Bank University)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19025,
                "name": "International Business Management (London South Bank University)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19026,
                "name": "International Business Management with Finance (London South Bank University)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19027,
                "name": "International Business Management (with Internship) (London South Bank University)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19028,
                "name": "International Business Management with Marketing (London South Bank University)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19029,
                "name": "International Human Resources Management (London South Bank University)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19030,
                "name": "International Tourism and Hospitality Management (London South Bank University)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19031,
                "name": "MBA (International Management) (London South Bank University)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19032,
                "name": "International Business Management with HRM (London South Bank University)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19033,
                "name": "International Business Management with Project Management (London South Bank University)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19034,
                "name": "Accounting and Management (Queen Mary, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19035,
                "name": "Art, Business and Law (Queen Mary, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19036,
                "name": "Blockchain in Business and Society (Queen Mary, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19037,
                "name": "Business Analytics (Queen Mary, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19038,
                "name": "Development and International Business (Queen Mary, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19039,
                "name": "Heritage Management (Queen Mary, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19040,
                "name": "International Business (Queen Mary, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19041,
                "name": "International Business and Politics (Queen Mary, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19042,
                "name": "International Business Law (Queen Mary, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19043,
                "name": "International Financial Management (Queen Mary, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19044,
                "name": "International Human Resource Management (Queen Mary, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19045,
                "name": "Management (Queen Mary, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19046,
                "name": "Management of Intellectual Property (Queen Mary, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19047,
                "name": "Water and Environmental Management (Queen Mary, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19048,
                "name": "Wealth Management (Queen Mary, University of London)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19049,
                "name": "Business Management (University of Hull)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19050,
                "name": "Engineering Management (University of Hull)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19051,
                "name": "Environmental Change, Management and Monitoring (University of Hull)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19052,
                "name": "Financial Management (University of Hull)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19053,
                "name": "Flood Risk Management (University of Hull)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19054,
                "name": "Human Resource Management (University of Hull)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19055,
                "name": "Logistics and Supply Chain Management (Online) (University of Hull)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19056,
                "name": "Logistics and Supply Chain Management (University of Hull)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19057,
                "name": "Marketing Management (University of Hull)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19058,
                "name": "Environmental Management (in partnership with NEBOSH) (University of Hull)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19059,
                "name": "Occupational Health and Safety Management (in partnership with NEBOSH) (University of Hull)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19060,
                "name": "Occupational Health, Safety and Environmental Management (in partnership with NEBOSH) (University of Hull)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19061,
                "name": "Accounting and Financial Management (University of Reading)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19062,
                "name": "Accounting and International Management (University of Reading)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19063,
                "name": "Applied Meteorology and Climate with Management (University of Reading)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19064,
                "name": "Business Economics (University of Reading)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19065,
                "name": "Business Technology Consulting (University of Reading)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19066,
                "name": "Construction Cost Management (University of Reading)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19067,
                "name": "Construction Management (University of Reading)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19068,
                "name": "Construction Management and International Development (University of Reading)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19069,
                "name": "Design and Management of Sustainable Built Environments (University of Reading)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19070,
                "name": "Education (Leadership and Management) (University of Reading)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19071,
                "name": "Environmental Management (University of Reading)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19072,
                "name": "Financial Risk Management (University of Reading)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19073,
                "name": "Information Management & Digital Business – Digital Health and Data Analytics (University of Reading)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19074,
                "name": "International Business and Finance (University of Reading)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19075,
                "name": "International Commercial Law with Intellectual Property Law and Management (University of Reading)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19076,
                "name": "International Human Resource Management (University of Reading)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19077,
                "name": "Investment Management (University of Reading)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19078,
                "name": "Management (University of Reading)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19079,
                "name": "Management (International Business) (University of Reading)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19080,
                "name": "Project Management (University of Reading)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19081,
                "name": "Applied Project Management (University of Sunderland)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19082,
                "name": "Business Education (University of Sunderland)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19083,
                "name": "Engineering Management (University of Sunderland)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19084,
                "name": "Finance and Management (University of Sunderland)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19085,
                "name": "Human Resource Management (CIPD accredited) (University of Sunderland)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19086,
                "name": "International Business Management (University of Sunderland)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19087,
                "name": "Project Management (University of Sunderland)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19088,
                "name": "Clinical Practice, Management & Education (University of Central Lancashire)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19089,
                "name": "Construction Project Management (University of Central Lancashire)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19090,
                "name": "Emergency Management in High Hazard Industries (University of Central Lancashire)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19091,
                "name": "Facilities Management (University of Central Lancashire)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19092,
                "name": "Human Resource Management (University of Central Lancashire)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19093,
                "name": "Human Resource Management ( 1 Year) (University of Central Lancashire)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19094,
                "name": "Intercultural Business Communication (University of Central Lancashire)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19095,
                "name": "International Business & Management (University of Central Lancashire)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19096,
                "name": "International Business Law (University of Central Lancashire)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19097,
                "name": "International Hospitality and Event Management (University of Central Lancashire)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19098,
                "name": "International Hospitality and Tourism Management (University of Central Lancashire)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19099,
                "name": "Internship in International Tourism, Hospitality and Event Management (University of Central Lancashire)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19100,
                "name": "Musculoskeletal Management (University of Central Lancashire)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19101,
                "name": "Music Industry Management & Promotion (University of Central Lancashire)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19102,
                "name": "Performance Analysis and Talent Management (University of Central Lancashire)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19103,
                "name": "Project Management (University of Central Lancashire)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19104,
                "name": "Sport Business Management (University of Central Lancashire)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19105,
                "name": "Air Transport Operations and Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19106,
                "name": "Applied Project Management with Internship",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19107,
                "name": "Applied Project Management (Extended Masters)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19108,
                "name": "Construction Project Management (Extended Masters)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19109,
                "name": "Finance and Risk Management (Extended Masters)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19110,
                "name": "Food Business Management with Internship",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19111,
                "name": "Food Business Management (Extended Masters)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19112,
                "name": "Human Resource Management (Diploma)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19113,
                "name": "International Business Management (Extended Masters)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19114,
                "name": "International Fashion Brand Management: Circular Fashion",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19115,
                "name": "International Fashion Brand Management: Fashion Buying and Merchandising",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19116,
                "name": "International Fashion Brand Management: Fashion Insight & Strategy",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19117,
                "name": "International Fashion Brand Management: Fashion PR and Communication",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19118,
                "name": "International Fashion Brand Management: Fashion Visual Merchandising",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19119,
                "name": "International Fashion Brand Management: Phygital Luxury Fashion",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19120,
                "name": "International Tourism and Aviation Management with Internship",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19121,
                "name": "International Tourism and Aviation Management (Extended Masters)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19122,
                "name": "Luxury Hospitality Management with Internship",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19123,
                "name": "Luxury Hospitality Management (Extended Masters)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19124,
                "name": "Applied Project Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19125,
                "name": "Applied Project Management (Enhanced Extended)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19126,
                "name": "Construction Project Management (Enhanced Extended)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19127,
                "name": "Finance & Risk Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19128,
                "name": "Finance and Risk Management (Enhanced Extended)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19129,
                "name": "Food Business Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19130,
                "name": "Food Business Management (Enhanced Extended)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19131,
                "name": "International Business and Commercial Law",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19132,
                "name": "International Business Management (Enhanced Extended)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19133,
                "name": "International Tourism and Aviation Management (Enhanced Extended)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19134,
                "name": "Luxury Hospitality Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19135,
                "name": "Luxury Hospitality Management (Enhanced Extended)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19136,
                "name": "Music Industry Management and Artist Development",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19137,
                "name": "Strategic Financial Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19138,
                "name": "Advanced Chemical Engineering with Information Technology and Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19139,
                "name": "Advanced Manufacturing Engineering and Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19140,
                "name": "Climate Change Science and Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19141,
                "name": "Construction Project Management with Building Information Modelling",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19142,
                "name": "Design Innovation Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19143,
                "name": "Digital Innovation Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19144,
                "name": "Diplomacy, Business and Trade",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19145,
                "name": "Entrepreneurship and Innovation Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19146,
                "name": "Environmental Monitoring, Research and Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19147,
                "name": "Information Management and Business Technology",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19148,
                "name": "International Human Resource Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19149,
                "name": "International Management and Emerging Economies",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19150,
                "name": "International Project Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19151,
                "name": "Risk, Governance and International Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19152,
                "name": "Social Science Research (Business and Management Studies)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19153,
                "name": "Sport Business and Innovation",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19154,
                "name": "Sport Business and Leadership",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19155,
                "name": "Sport Management, Politics and International Development",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19156,
                "name": "Sustainable Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19157,
                "name": "Sustainable Sport Business",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19158,
                "name": "Archives and Records Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19159,
                "name": "Biomedical and Molecular Sciences with Business",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19160,
                "name": "Biomedical and Molecular Sciences with Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19161,
                "name": "Business & Human Rights",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19162,
                "name": "Computer Science with International Business",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19163,
                "name": "Design for Business",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19164,
                "name": "Design for Business (2 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19165,
                "name": "Industrial Engineering and Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19166,
                "name": "Industrial Engineering and Management (2 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19167,
                "name": "Information Technology & International Business",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19168,
                "name": "International Mineral Resources Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19169,
                "name": "International Mineral Resources Management (5 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19170,
                "name": "International Oil and Gas Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19171,
                "name": "International Oil and Gas Management (5 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19172,
                "name": "Records Management and Digital Preservation",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19173,
                "name": "Records Management and Information Rights",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19174,
                "name": "Strategic People Management (with Extended Practice)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19175,
                "name": "Strategic People Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19176,
                "name": "Accounting and Financial Management (with Professional Experience)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19177,
                "name": "Air Transport Management (with Work Placement)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19178,
                "name": "Brand Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19179,
                "name": "Business and Organisational Psychology",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19180,
                "name": "Career Development and Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19181,
                "name": "Civil Engineering Project Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19182,
                "name": "Civil Engineering Project Management (with Work Placement)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19183,
                "name": "Construction Management with BIM",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19184,
                "name": "Construction Project and Cost Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19185,
                "name": "Crowded Places and Public Safety Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19186,
                "name": "Design Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19187,
                "name": "Digital Marketing Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19188,
                "name": "Disaster Management and Resilience",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19189,
                "name": "Emergency and Incident Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19190,
                "name": "Emergency Management and Resilience",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19191,
                "name": "Emergency Preparedness and Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19192,
                "name": "Engineering Management (with Work Placement)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19193,
                "name": "Engineering Project Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19194,
                "name": "Engineering Project Management (with Work Placement)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19195,
                "name": "English and Education Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19196,
                "name": "English and Education Management (with Professional Experience)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19197,
                "name": "Events and Experience Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19198,
                "name": "Events and Experience Management (with Professional Experience)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19199,
                "name": "Global Health Care Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19200,
                "name": "International Marketing Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19201,
                "name": "Management (Advanced Standing)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19202,
                "name": "Management of Information Systems and Technology",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19203,
                "name": "Management of Information Systems and Technology (with Work Placement)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19204,
                "name": "MBA (Cyber Security Management)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19205,
                "name": "MBA (Global Business)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19206,
                "name": "MBA (Global Healthcare Management and Leadership)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19207,
                "name": "MBA (International Fashion Management)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19208,
                "name": "MBA (International Human Resource Management)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19209,
                "name": "Media Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19210,
                "name": "Oil and Gas Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19211,
                "name": "Oil and Gas Management (with Work Placement)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19212,
                "name": "Production Engineering and Operations Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19213,
                "name": "Production Engineering and Operations Management (with Work Placement)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19214,
                "name": "Project Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19215,
                "name": "Renewable Energy Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19216,
                "name": "Renewable Energy Management (with Work Placement)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19217,
                "name": "Supply Chain Management and Logistics",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19218,
                "name": "Supply Chain Management and Logistics (with Work Placement)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19219,
                "name": "Sustainability and Environmental Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19220,
                "name": "Sustainability and Environmental Management (with Work Placement)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19221,
                "name": "Advanced Project Management in Construction",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19222,
                "name": "Business Intelligence and Analytics",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19223,
                "name": "Business Intelligence and Analytics (Professional Practice)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19224,
                "name": "Drug Discovery and Business Strategy",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19225,
                "name": "Education (Leadership and Management)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19226,
                "name": "Engineering Management (with Placement)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19227,
                "name": "Information Systems Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19228,
                "name": "Information Systems Management (with Placement)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19229,
                "name": "International Business (Professional Practice)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19230,
                "name": "International Business Law",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19231,
                "name": "International Business with Entrepreneurship",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19232,
                "name": "International Business with Entrepreneurship (Professional Practice)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19233,
                "name": "International Business with Humanitarian Challenges",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19234,
                "name": "International Business with Humanitarian Challenges (Professional Practice)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19235,
                "name": "International Business with Marketing (Professional Practice)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19236,
                "name": "International Business with Project Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19237,
                "name": "International Business with Project Management (Professional Practice)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19238,
                "name": "International Business with Tourism and Hospitality",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19239,
                "name": "International Business with Tourism and Hospitality (Professional Practice)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19240,
                "name": "Logistics and Supply Chain Management (Professional Practice)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19241,
                "name": "Management (Professional Practice)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19242,
                "name": "Management with Communication",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19243,
                "name": "Management with Communication (Professional Practice)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19244,
                "name": "Management with Entrepreneurship (Professional Practice)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19245,
                "name": "Management with Human Resource Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19246,
                "name": "Management with Human Resource Management (Professional Practice)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19247,
                "name": "Management with International Business",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19248,
                "name": "Management with International Business (Professional Practice)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19249,
                "name": "Management with Leadership",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19250,
                "name": "Management with Leadership (Professional Practice)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19251,
                "name": "Management with Marketing (Professional Practice)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19252,
                "name": "Management with Tourism and Hospitality",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19253,
                "name": "Management with Tourism and Hospitality (Professional Practice)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19254,
                "name": "Marketing with Brand Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19255,
                "name": "Marketing with Brand Management (Professional Practice)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19256,
                "name": "Pharmaceutical Formulation and Business Strategy",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19257,
                "name": "Project Management and Operations Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19258,
                "name": "Project Management and Operations Management (Professional Practice)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19259,
                "name": "Strategic People Management (1 Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19260,
                "name": "Supply Chain Management with Humanitarian Challenges",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19261,
                "name": "Supply Chain Management with Humanitarian Challenges (Professional Practice)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19262,
                "name": "Sustainable Business Leadership",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19263,
                "name": "Sustainable Business Leadership (Professional Practice)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19264,
                "name": "Sustainable Supply Chain Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19265,
                "name": "Sustainable Supply Chain Management (Professional Practice)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19266,
                "name": "Arts Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19267,
                "name": "Arts Management (Online)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19268,
                "name": "Arts Policy and Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19269,
                "name": "Arts Policy and Management (1 Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19270,
                "name": "Arts Policy and Management (Online)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19271,
                "name": "Bio-Business",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19272,
                "name": "Business Innovation",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19273,
                "name": "Business Innovation with E-Business",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19274,
                "name": "Business Innovation with Entrepreneurship",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19275,
                "name": "Business Innovation with Entrepreneurship (Online)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19276,
                "name": "Business Innovation with International Technology Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19277,
                "name": "Business, Political Economy and Society",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19278,
                "name": "Corporate Governance and Business Ethics",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19279,
                "name": "Corporate Governance and Business Ethics (1 Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19280,
                "name": "Culinary Innovation Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19281,
                "name": "Curating and Collections Management (2 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19282,
                "name": "Digital Media Management (1 Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19283,
                "name": "History of Art with Collections Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19284,
                "name": "Human Resource Management (Online)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19285,
                "name": "International Business and Development",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19286,
                "name": "Management (1 Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19287,
                "name": "Management (Certificate)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19288,
                "name": "Management (Certificate) (Online)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19289,
                "name": "Management (Diploma)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19290,
                "name": "Management (Diploma) (Online)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19291,
                "name": "Management and Finance",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19292,
                "name": "Management Consultancy and Organisational Change",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19293,
                "name": "Management with Business Innovation",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19294,
                "name": "Management with Business Innovation (Online)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19295,
                "name": "Management with Business Strategy and the Environment",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19296,
                "name": "Management with Corporate Governance and Business Ethics",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19297,
                "name": "Management with Creative Industries",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19298,
                "name": "Management with International Business and Development",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19299,
                "name": "Management with Marketing (Online)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19300,
                "name": "Management with Sport Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19301,
                "name": "Museum Cultures with Collections Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19302,
                "name": "Public Policy and Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19303,
                "name": "Public Policy and Management (Online)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19304,
                "name": "Quantitative Risk Management with Machine Learning",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19305,
                "name": "Sport Management (Certificate)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19306,
                "name": "Sport Management and Marketing",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19307,
                "name": "Sport Management and the Business of Football",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19308,
                "name": "Sport Management, Governance and Policy",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19309,
                "name": "Business Development and Innovation",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19310,
                "name": "Business Development and Innovation (2 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19311,
                "name": "Business Improvement",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19312,
                "name": "Business in Technology",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19313,
                "name": "Construction Management (3 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19314,
                "name": "Environmental Management with Geographic Information Systems",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19315,
                "name": "Fashion and Textile Retail Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19316,
                "name": "Fashion and Textile Retail Management (2 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19317,
                "name": "FinTech Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19318,
                "name": "Global Investment Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19319,
                "name": "International Business (1 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19320,
                "name": "International Business (2 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19321,
                "name": "International Business (Magee Campus)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19322,
                "name": "International Business with Advanced Practice",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19323,
                "name": "International Business with Data Analytics",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19324,
                "name": "International Business with Data Analytics (1 Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19325,
                "name": "International Business with Data Analytics (2-3 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19326,
                "name": "International Business with Data Analytics (3 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19327,
                "name": "International Business with Human Resource Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19328,
                "name": "International Business with Human Resource Management (1 Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19329,
                "name": "International Business with Human Resource Management (2-3 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19330,
                "name": "International Business with Human Resource Management (3 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19331,
                "name": "International Business with Human Resource Management and Advanced Practice",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19332,
                "name": "International Event Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19333,
                "name": "International Event Management (Belfast Campus)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19334,
                "name": "International Event Management (with Advanced Practice)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19335,
                "name": "International Tourism and Hospitality Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19336,
                "name": "International Tourism and Hospitality Management (Belfast Campus)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19337,
                "name": "International Tourism and Hospitality Management (with Advanced Practice)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19338,
                "name": "Library and Information Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19339,
                "name": "Management (2 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19340,
                "name": "Management and Corporate Governance",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19341,
                "name": "Management and Corporate Governance (1 Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19342,
                "name": "Management and Corporate Governance (2 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19343,
                "name": "Management and Corporate Governance (Belfast Campus)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19344,
                "name": "Management with Advanced Practice",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19345,
                "name": "Manufacturing Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19346,
                "name": "Manufacturing Management (1 Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19347,
                "name": "Manufacturing Management (2 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19348,
                "name": "Manufacturing Management (3 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19349,
                "name": "Museum Practice and Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19350,
                "name": "Renewable Energy and Energy Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19351,
                "name": "Sport Management (2 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19352,
                "name": "Business Information Technology",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19353,
                "name": "Business Information Technology (2 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19354,
                "name": "Business Management (Banking)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19355,
                "name": "Business Management (Entrepreneurship) (Online)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19356,
                "name": "Business Management (Events)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19357,
                "name": "Business Management (Information Systems Strategy & Governance)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19358,
                "name": "Business Management (Logistics & Supply Chains)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19359,
                "name": "Business Management (Online)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19360,
                "name": "Business Management (Project Management)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19361,
                "name": "Business Management (Tourism & Hospitality)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19362,
                "name": "Construction Project Management (2 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19363,
                "name": "Construction Project Management (Online)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19364,
                "name": "Crowded Space Design Management & Risk Analysis",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19365,
                "name": "Facilities Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19366,
                "name": "Global Hospitality Management (Extended)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19367,
                "name": "Healthcare Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19368,
                "name": "Healthcare Management (2 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19369,
                "name": "Human Resource Management (2 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19370,
                "name": "Human Resource Management (Top-Up)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19371,
                "name": "Intercultural Business Communication",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19372,
                "name": "International Festival & Event Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19373,
                "name": "International Festival & Event Management (2 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19374,
                "name": "International Heritage & Cultural Tourism Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19375,
                "name": "International Heritage & Cultural Tourism Management (2 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19376,
                "name": "International Tourism Destination Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19377,
                "name": "International Tourism Destination Management (2 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19378,
                "name": "Marketing with Festival & Event Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19379,
                "name": "MBA (Events Management)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19380,
                "name": "MBA (Health Management)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19381,
                "name": "MBA (Hospitality & Tourism Management)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19382,
                "name": "MBA (Strategic Project Management)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19383,
                "name": "Real Estate Management & Investment",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19384,
                "name": "Real Estate Management & Investment (2 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19385,
                "name": "Real Estate Management & Investment (Distance Learning)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19386,
                "name": "MBA (Human Resource Management)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19387,
                "name": "MBA (Logistics and Supply Chain Management)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19388,
                "name": "MBA (Project Management)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19389,
                "name": "Business Analytics (with Advanced Practice/Study Abroad)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19390,
                "name": "Business and Management with Advanced Practice",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19391,
                "name": "Business and Management with Study Abroad",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19392,
                "name": "Business and Management (Distance Learning)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19393,
                "name": "Business with Business Analytics (Amsterdam)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19394,
                "name": "Business with Business Analytics",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19395,
                "name": "Business with Business Analytics (with Advanced Practice)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19396,
                "name": "Business with Hospitality and Tourism Management (1 Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19397,
                "name": "Business with Hospitality and Tourism Management (with Advanced Practice in Second Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19398,
                "name": "Business with Hospitality and Tourism Management (with Study Abroad in Second Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19399,
                "name": "Business with Hospitality and Tourism Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19400,
                "name": "Business with Human Resource Management (with Advanced Practice in Second Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19401,
                "name": "Business with Human Resource Management (with Study Abroad in Second Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19402,
                "name": "Business with Human Resource Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19403,
                "name": "Business with International Management (Amsterdam)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19404,
                "name": "Construction Project Management with BIM",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19405,
                "name": "Construction Project Management with BIM with Advanced Practice",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19406,
                "name": "Creative and Cultural Industries Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19407,
                "name": "Disaster Management and Sustainable Development (Advanced Practice in Second Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19408,
                "name": "Disaster Management and Sustainable Development",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19409,
                "name": "Engineering Management (1 Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19410,
                "name": "Engineering Management with Advanced Practice",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19411,
                "name": "Entrepreneurship and Innovation Management (with Advanced Practice)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19412,
                "name": "Global Logistics Operations and Supply Chain Management (with Advanced Practice)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19413,
                "name": "Global Logistics Operations and Supply Chain Management (1 Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19414,
                "name": "Global Logistics, Operations and Supply Chain Management (with Advanced Practice)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19415,
                "name": "Global Logistics, Operations and Supply Chain Management (with Study Abroad)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19416,
                "name": "Global Logistics Operations and Supply Chain Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19417,
                "name": "Global Sustainable Business Management - Amsterdam",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19418,
                "name": "Masters in Healthcare Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19419,
                "name": "International Business Management (with Advanced Practice in Second Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19420,
                "name": "International Business Management (with Study Abroad in Second Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19421,
                "name": "International Project Management (with Advanced Practice)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19422,
                "name": "International Sport Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19423,
                "name": "Luxury Brand Management (Amsterdam)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19424,
                "name": "Project Management with Advanced Practice",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19425,
                "name": "Business with Entrepreneurship",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19426,
                "name": "Business with Financial Management with Advanced Practice",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19427,
                "name": "Business with Business Analytics with Advanced Practice",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19428,
                "name": "Business with Entrepreneurship with Advanced Practice",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19429,
                "name": "Business with Financial Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19430,
                "name": "Business with Hospitality and Tourism Management with Advanced Practice",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19431,
                "name": "Business with Human Resource Management with Advanced Practice",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19432,
                "name": "Business with International Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19433,
                "name": "Business with International Management with Advanced Practice",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19434,
                "name": "Business with Marketing Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19435,
                "name": "Business with Marketing Management with Advanced Practice",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19436,
                "name": "Global Logistics Operations and Supply Chain Management with Advanced Practice",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19437,
                "name": "International Business with Data Analytics with Advanced Practice",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19438,
                "name": "International Business with Human Resource Management with Advanced Practice",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19439,
                "name": "International Project Management with Advanced Practice",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19440,
                "name": "Luxury Brand Management with Advanced Practice",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19441,
                "name": "International Business with Advanced Practice (Extended)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19442,
                "name": "International Business (Extended) (Birmingham)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19443,
                "name": "International Business with Advanced Practice (Extended) (Birmingham)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19444,
                "name": "International Business (Birmingham)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19445,
                "name": "International Business with Advanced Practice (Birmingham)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19446,
                "name": "International Business with Data Analytics (Extended)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19447,
                "name": "International Business with Data Analytics with Advanced Practice (Extended)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19448,
                "name": "International Business with Data Analytics (Extended) (Birmingham)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19449,
                "name": "International Business with Data Analytics with Advanced Practice (Extended) (Birmingham)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19450,
                "name": "International Business with Human Resource Management (Extended)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19451,
                "name": "International Business with Human Resource Management with Advanced Practice (Extended)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19452,
                "name": "International Business with Human Resource Management (Extended) (Birmingham)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19453,
                "name": "International Business with Human Resource Management with Advanced Practice (Extended) (Birmingham)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19454,
                "name": "International Business with Data Analytics (Birmingham)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19455,
                "name": "International Business with Data Analytics with Advanced Practice (Birmingham)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19456,
                "name": "International Business with Human Resource Management (Birmingham)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19457,
                "name": "International Business with Human Resource Management with Advanced Practice (Birmingham)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19458,
                "name": "Actuarial Management with Data Science",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19459,
                "name": "Actuarial Science and Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19460,
                "name": "Business Analytics and Consultancy",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19461,
                "name": "Business Psychology with Coaching",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19462,
                "name": "Business Psychology with Human Resource Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19463,
                "name": "Business Psychology with Intercultural Communication",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19464,
                "name": "Business Research Methods",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19465,
                "name": "Business Strategy, Leadership and Change",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19466,
                "name": "Civil Engineering and Construction Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19467,
                "name": "Civil Engineering and Construction Management (Online)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19468,
                "name": "Commercial Management and Quantity Surveying (Online)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19469,
                "name": "Commercial Management and Quantity Surveying with Industry Placement (2 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19470,
                "name": "Construction Project Management (1 Year)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19471,
                "name": "Construction Project Management with Industry Placement (2 Years)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19472,
                "name": "Fashion and Textiles Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19473,
                "name": "Information Technology (Business)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19474,
                "name": "International Business Management with Finance",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19475,
                "name": "International Business Management with HRM",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19476,
                "name": "International Business Management with Industry Placement",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19477,
                "name": "International Business Management with Marketing",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19478,
                "name": "International Business Management with Project Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19479,
                "name": "International Master in Industrial Management (IMIM)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19480,
                "name": "Marine Resource Management and Policy",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19481,
                "name": "Maritime Logistics and Business",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19482,
                "name": "Mature Field Management (Online)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19483,
                "name": "Mature Field Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19484,
                "name": "Operations Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19485,
                "name": "Public Management and Leadership",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19486,
                "name": "Reservoir Evaluation and Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19487,
                "name": "Safety and Risk Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19488,
                "name": "Strategic Project Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19489,
                "name": "Arts Management and Heritage Studies",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19490,
                "name": "Biotechnology with Business Enterprise",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19491,
                "name": "Business Analytics and Decision Sciences",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19492,
                "name": "Business and Public Service Interpreting",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19493,
                "name": "Business and Public Service Interpreting and Translation Studies",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19494,
                "name": "Cardiac Device and Rhythm Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19495,
                "name": "Data Analytics and Human Resource Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19496,
                "name": "Digital Information Management and Systems Innovation",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19497,
                "name": "Engineering Management (24 Months)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19498,
                "name": "Engineering Technology and Business Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19499,
                "name": "Environmental Engineering and Project Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19500,
                "name": "Financial Risk Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19501,
                "name": "Global Fashion Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19502,
                "name": "Global Strategy and Innovation Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19503,
                "name": "Global Supply Chain Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19504,
                "name": "International Construction Management and Engineering",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19505,
                "name": "Management Consulting",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19506,
                "name": "Music and Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19507,
                "name": "Railway Engineering with Project Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19508,
                "name": "Railway Operations, Management and Policy",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19509,
                "name": "River Basin Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19510,
                "name": "Sustainability and Business",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19511,
                "name": "Building Information Modelling Management and Integrated Digital Delivery",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19512,
                "name": "Business Information Systems Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19513,
                "name": "Cardiac Rhythm Management and Electrophysiology",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19514,
                "name": "Classical Music Business",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19515,
                "name": "Human Resource Management and Development (CIPD Accredited)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19516,
                "name": "Information Security Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19517,
                "name": "Innovation Management and Entrepreneurship",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19518,
                "name": "International Business Management (Enhanced)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19519,
                "name": "International Hospitality and Events Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19520,
                "name": "Marine Operations Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19521,
                "name": "Network Management and Cloud Computing",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19522,
                "name": "Occupational Health and Safety and Environmental Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19523,
                "name": "Occupational Health, Safety and Wellbeing Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19524,
                "name": "Administrative Business Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19525,
                "name": "Applied Electrical Motion and Control Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19526,
                "name": "Applied Energy Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19527,
                "name": "Applied Energy Management - Renewable Energy Stream",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19528,
                "name": "Applied Manufacturing Management - Automation Stream",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19529,
                "name": "Applied Manufacturing Management - Design Integration 3D Printing Stream",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19530,
                "name": "Applied Manufacturing Management - Design Integration Stream",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19531,
                "name": "Applied Manufacturing Management - Machining Stream",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19532,
                "name": "Applied Manufacturing Management - Mechatronics Stream",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19533,
                "name": "Applied Manufacturing Management - Welding Stream",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19534,
                "name": "Business Development and Sales",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19535,
                "name": "Cloud Data Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19536,
                "name": "Construction Management (Optional Co-op)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19537,
                "name": "Digital Solutions Management (Optional Co-op)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19538,
                "name": "Global Hospitality Management (Optional Co-op)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19539,
                "name": "Health Care Administration and Service Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19540,
                "name": "Human Resources Management (Optional Co-op)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19541,
                "name": "Information Technology Business Analysis",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19542,
                "name": "Interactive Media Management - Interaction Design",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19543,
                "name": "Management in Community Services",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19544,
                "name": "Quality Assurance - Manufacturing and Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19545,
                "name": "Strategic Global Business Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19546,
                "name": "Structural Packaging Design and Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19547,
                "name": "Supply Chain Management - Global",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19548,
                "name": "Sustainable Business Management (Optional Co-op)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 12
            },
            {
                "id": 19549,
                "name": "Business Management (Supply Chain and Logistics) (Top-Up)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 16
            },
            {
                "id": 19550,
                "name": "Business Management, Supply Chain and Logistics",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 16
            },
            {
                "id": 19551,
                "name": "Supply Chain and Logistics Management",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 16
            },
            {
                "id": 19552,
                "name": "Supply Chain and Logistics Management (SCLM)",
                "industry_id": 4,
                "deleted_at": null,
                "sub_industry_id": 16
            }
        ]);
    }
}
exports.default = StudyAreaSeeder;
//# sourceMappingURL=StudyArea.js.map