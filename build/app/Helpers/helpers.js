"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.APPLICATION_PROCESS_LIST = exports.rmdir = exports.base64ToNode = exports.zipDirectory = exports.getFilesToLocal = exports.sortCheckList = exports.sendExePasswordEmail = exports.sendLeadConfirmationEmail = exports.sendPasswordEmail = exports.generatePassword = exports.nextStage = void 0;
const Mail_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Addons/Mail"));
const stream_1 = require("stream");
const https_1 = __importDefault(require("https"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const archiver = require('archiver');
const ORDERED_CHECKLIST = [
    'Secondary School Certificate',
    'Higher Secondary Certificate',
    'UG Consolidated Memo GPA',
    'UG Individual Marks Memos',
    'UG PC / OD / Course Completion',
    'Letter of Recommendations # 1',
    'Letter of Recommendations # 2',
    'Letter of Recommendations # 3',
    'Medium of Instruction Certificate',
    'Updated CV / Resume',
    'Work Experience',
    'Statement of Purpose',
    'Passport',
    'English Test Score Card',
    'GRE',
    'SAT',
    'GMAT',
    'PRE SET',
    'Affidavit of Support',
    'Bank Statement',
    'Additional Documents # 1',
    'Additional Documents # 2',
    'Additional Documents # 3',
    'Additional Documents # 4',
];
function nextStage(country_id, stage) {
    let USA = ['Gathering Checklist', 'University Application', 'After I-20', 'Visa Application'];
    let CANADA = [
        'Gathering Checklist',
        'University Application',
        'Pre Requisite',
        'Financial Evidence',
        'Visa Application',
    ];
    let UK = [
        'Gathering Checklist',
        'University Application',
        'Pre-CAS Process',
        'Financial Evidence',
        'Visa Application',
    ];
    if (country_id === 1) {
        let index = USA.findIndex((x) => x === stage);
        return USA[index + 1];
    }
    if (country_id === 3) {
        let index = CANADA.findIndex((x) => x === stage);
        return CANADA[index + 1];
    }
    if (country_id === 2) {
        let index = UK.findIndex((x) => x === stage);
        return UK[index + 1];
    }
}
exports.nextStage = nextStage;
function generatePassword() {
    var length = 8, charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', retVal = '';
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}
exports.generatePassword = generatePassword;
function sendPasswordEmail(user, password) {
    let htmlContent = `
    <h4> EXPERIENCE A STRESS FREE STUDY ABROAD JOURNEY</h4>

    <p>You've made it, <b>${user.name}!</b></p>

    <p>You've joined a community of dreamers aspiring to study abroad. Get ready to experience a smooth study journey</p>

    <b style="background: #fff176;padding: 3px 10px;border-radius: 2px;">
    ${password}</b>
    <p>Please Use the above temporary password and login to complete the application journey and onward processes.</p>
    <p>link: <a href="https://www.applyuninow.com/student-login"> https://www.applyuninow.com/student-login </a> </p>

    <p style="margin:0">Thank You,</p>
    <p style="margin:0">TEAM</p>
    <p style="margin:0">ApplyUniNow.</p>`;
    Mail_1.default.sendLater((message) => {
        message
            .from('NoReply@applyuninow.com')
            .to(user.email)
            .subject(`Welcome to ApplyUniNow, your study abroad partner.`)
            .html(htmlContent);
    });
}
exports.sendPasswordEmail = sendPasswordEmail;
function sendLeadConfirmationEmail(lead) {
    const recipientName = lead.name || lead.first_name || 'there';
    const htmlContent = `
    <p>Hi <b>${recipientName}</b>,</p>
    <p>Thank you for reaching out to ApplyUniNow. We have received your enquiry and our counselling team will get in touch with you shortly.</p>
    <p>If you have any urgent questions in the meantime, you can write to us at <a href="mailto:support@applyuninow.com">support@applyuninow.com</a>.</p>
    <p style="margin:0">Thank you,</p>
    <p style="margin:0">Team ApplyUniNow</p>
    <p style="margin:0"><a href="https://www.applyuninow.com">www.applyuninow.com</a></p>`;
    Mail_1.default.sendLater((message) => {
        message
            .from('noreply@applyuninow.com')
            .to(lead.email)
            .subject('We received your enquiry - ApplyUniNow')
            .html(htmlContent);
    });
}
exports.sendLeadConfirmationEmail = sendLeadConfirmationEmail;
function sendExePasswordEmail(user, password) {
    let htmlContent = `
    <p> Dear, <b>${user.name}!</b></p><br />

    <p>We are delighted to welcome you to [Organization Name]! We are excited to have you join our team and look forward to the contributions you will make. </p></br>

    <p> To get started, please click the link below to set up your account and create a new password. </p> </br>
    <p>link: <a href="https://www.applyuninow.com/login"> https://www.applyuninow.com/login </a> </p>
   
    <p>Your temporary password is: </p>
    <b style="background: #fff176;padding: 3px 10px;border-radius: 2px;">
    ${password}</b>
    <br />

    <p>Once you have logged in, you will be able to access our internal systems and resources. If you have any questions or need assistance, please don't hesitate to reach out to our IT team. </p> </br>

    <p style="margin:0">Thank You,</p>
    <p style="margin:0">TEAM</p>
    <p style="margin:0">ApplyUniNow.</p>`;
    Mail_1.default.sendLater((message) => {
        message
            .from('NoReply@applyuninow.com')
            .to(user.email)
            .subject(`Welcome to ApplyUniNow`)
            .html(htmlContent);
    });
}
exports.sendExePasswordEmail = sendExePasswordEmail;
function sortCheckList(checklist) {
    let sortedFields = [];
    for (let field of ORDERED_CHECKLIST) {
        let isFind = checklist.find((x) => x.name === field);
        if (isFind) {
            sortedFields.push(isFind);
        }
    }
    return sortedFields;
}
exports.sortCheckList = sortCheckList;
const getFilesToLocal = (url, path) => {
    return new Promise((resolve, _reject) => {
        try {
            https_1.default
                .request(url, function (response) {
                var data = new stream_1.Transform();
                response.on('data', function (chunk) {
                    data.push(chunk);
                });
                response.on('end', async function () {
                    let err = await fs_1.default.writeFileSync(path, data.read());
                    if (!err)
                        resolve(true);
                });
            })
                .end();
        }
        catch (e) {
            console.log(e);
        }
    });
};
exports.getFilesToLocal = getFilesToLocal;
function zipDirectory(sourceDir, outPath) {
    const archive = archiver('zip', { zlib: { level: 9 } });
    const stream = fs_1.default.createWriteStream(outPath);
    return new Promise((resolve, reject) => {
        archive
            .directory(sourceDir, false)
            .on('error', (err) => reject(err))
            .pipe(stream);
        stream.on('close', () => resolve(true));
        archive.finalize();
    });
}
exports.zipDirectory = zipDirectory;
async function base64ToNode(buffer) {
    return buffer.toString('base64');
}
exports.base64ToNode = base64ToNode;
const rmdir = function (dir) {
    var list = fs_1.default.readdirSync(dir);
    for (var i = 0; i < list.length; i++) {
        var filename = path_1.default.join(dir, list[i]);
        var stat = fs_1.default.statSync(filename);
        if (filename == '.' || filename == '..') {
        }
        else if (stat.isDirectory()) {
            (0, exports.rmdir)(filename);
        }
        else {
            fs_1.default.unlinkSync(filename);
        }
    }
    fs_1.default.rmdirSync(dir);
};
exports.rmdir = rmdir;
exports.APPLICATION_PROCESS_LIST = [
    {
        step: "GATHER_CHECKLIST",
        name: " Gathering Checklists",
        slug: "Gathering Checklist",
        status: "gatherchecklist",
        config: "COMMON",
    },
    {
        step: "UNIVERSITY_SELECTION",
        status: "universityies",
        name: "University Application",
        slug: "University Application",
        config: "CUSTOM",
    },
    {
        step: "FINANCIAL_EVIDENCE",
        status: "financial_evidence",
        name: "Financial Evidence",
        slug: "Financial Evidence",
        config: "CUSTOM",
    },
    {
        step: "AFTERI20",
        status: "after_i20",
        slug: "After I-20",
        name: "After I-20",
        config: "COMMON",
    },
    {
        step: "PRE_CAS_PROCESS",
        status: "pre_cas_process",
        name: "Pre-CAS Process",
        slug: "Pre-CAS Process",
        config: "COMMON",
    },
    {
        step: "VISA_APPLICATION",
        status: "visa_application",
        name: "Visa Application",
        slug: "Visa Application",
        config: "COMMON",
    },
    {
        step: "PREDEPEATURE",
        status: "predepeature",
        slug: "Pre-Departure",
        name: "Pre-Departure",
        config: "COMMON",
    },
    {
        step: "ONARRIVAL",
        status: "on_arrival",
        name: "On-Arrival",
        slug: "On-Arrival",
        config: "COMMON",
    },
    {
        step: "PRE_REQUISITE",
        status: "predepeature",
        name: "Pre Requisite",
        config: "CUSTOM",
        slug: "Pre Requisite",
    },
];
//# sourceMappingURL=helpers.js.map