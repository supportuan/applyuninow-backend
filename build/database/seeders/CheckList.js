"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const CheckList_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/CheckList"));
class CheckListSeeder extends Seeder_1.default {
    async run() {
        ;
        [
            'Gathering Checklist',
            'University Application',
            'Pre-CAS Process',
            'Financial Evidence',
            'Visa Application',
            'Pre Requisite',
            'After I-20',
        ];
        await CheckList_1.default.createMany([
            {
                name: 'Secondary School Certificate',
                type: 'Gathering Checklist',
            },
            {
                name: 'Higher Secondary Certificate',
                type: 'Gathering Checklist',
            },
            {
                name: 'UG Consolidated Memo GPA',
                type: 'Gathering Checklist',
            },
            {
                name: 'UG Individual Marks Memos',
                type: 'Gathering Checklist',
            },
            {
                name: 'UG PC / OD / Course Completion',
                type: 'Gathering Checklist',
            },
            {
                name: 'Letter of Recommendations # 2',
                type: 'Gathering Checklist',
            },
            {
                name: 'Letter of Recommendations # 3',
                type: 'Gathering Checklist',
            },
            {
                name: 'English R..W..l..S & GRE',
                type: 'Gathering Checklist',
            },
            {
                name: 'English R..W..l..S',
                type: 'Gathering Checklist',
            },
            {
                name: 'Medium of Instruction Certificate',
                type: 'Gathering Checklist',
            },
            {
                name: 'Updated CV / Resume',
                type: 'Gathering Checklist',
            },
            {
                name: 'Work Experience',
                type: 'Gathering Checklist',
            },
            {
                name: 'Statement of Purpose',
                type: 'Gathering Checklist',
            },
            {
                name: 'Passport',
                type: 'Gathering Checklist',
            },
            {
                name: 'Bank Statement & Affidavit of Support',
                type: 'Gathering Checklist',
            },
            {
                name: 'GRE & IELTS Scores Reporting',
                type: 'Gathering Checklist',
            },
            {
                name: 'Funds need to show 30 to 40 lakh',
                type: 'After I-20',
            },
            {
                name: 'Education loan can be accepted',
                type: 'After I-20',
            },
            {
                name: 'Fixed deposit is accepted and should be 3 month`s old',
                type: 'After I-20',
            },
            {
                name: 'Bank loan letter',
                type: 'After I-20',
            },
            {
                name: 'Need to book visa date to appear for visa ',
                type: 'Visa Application',
            },
            {
                name: 'Sevis Fees',
                type: 'Visa Application',
            },
            {
                name: 'Fill Form DS-160',
                type: 'Visa Application',
            },
            {
                name: 'Visa Fees',
                type: 'Visa Application',
            },
            {
                name: 'Schedule appointments for OFC/Biometrics and Visa interview',
                type: 'Visa Application',
            },
            {
                name: 'IHS',
                type: 'Visa Application',
            },
            {
                name: 'UKVI Visa Fees',
                type: 'Visa Application',
            },
            {
                name: 'VFS Services',
                type: 'Visa Application',
            },
            {
                name: 'Biometrics',
                type: 'Visa Application',
            },
            {
                name: 'UKVI Visa Fees',
                type: 'Visa Application',
            },
            {
                name: 'Unconditional Offer',
                type: 'Pre Requisite',
            },
            {
                name: 'Deposit',
                type: 'Pre Requisite',
            },
            {
                name: 'Letter of Acceptance',
                type: 'Pre Requisite',
            },
            {
                name: 'Medical Report',
                type: 'Pre Requisite',
            },
            {
                name: 'Tuition Fees(One Year Tuition Fees)',
                type: 'Financial Evidence',
            },
            {
                name: 'Deposit',
                type: 'Financial Evidence',
            },
            {
                name: 'Remaining Fee',
                type: 'Financial Evidence',
            },
            {
                name: 'Living Cost (GIC)',
                type: 'Financial Evidence',
            },
            {
                name: 'Unconditional Offer',
                type: 'Pre-CAS Process',
            },
            {
                name: 'Pre - CAS deposit',
                type: 'Pre-CAS Process',
            },
            {
                name: 'Credibility lnterview',
                type: 'Pre-CAS Process',
            },
            {
                name: 'Medical Report',
                type: 'Pre-CAS Process',
            },
            {
                name: 'Financial Evidence',
                type: 'Pre-CAS Process',
            },
            {
                name: 'ATAS if applicable',
                type: 'Pre-CAS Process',
            },
            {
                name: 'Tuition Fees',
                type: 'Financial Evidence',
            },
            {
                name: 'TOTAL FUNDS REQUIRED IN GBP',
                type: 'Financial Evidence',
            },
        ]);
    }
}
exports.default = CheckListSeeder;
//# sourceMappingURL=CheckList.js.map