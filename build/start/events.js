"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Event_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Event"));
const Mail_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Addons/Mail"));
Event_1.default.on('forgot-password', async ({ email, token }) => {
    const url = `${process.env.FRONTEND_APP_URL}/reset-password?email=${email}&token=${token}`;
    let htmlContent = `Hi,<br/><br/>
    We have received password reset request from you. Inorder to reset your password, click on the link below<br/><br/>
    ${url} 
    <br/><br/>
    Thank you,<br/>
    Team Scube
    <br/><br/>
    <small>If it wasn't you who requested for password reset, then no action is required to perform</small>`;
    Mail_1.default.sendLater((message) => {
        message
            .from('NoReply@applyuninow.com')
            .to(email)
            .subject(`Forgot Password - ApplyUniNow`)
            .html(htmlContent);
    });
});
Event_1.default.on('account-password', async ({ user, password }) => {
    let htmlContent = `Hi, ${user.name}<br/><br/>
     Welcome to ApplyUniNow.
    Bellow you can find the Temporary Password
    <h2> ${password}</h2>
    <br/><br/>
    <p>Please Login to Admin Panel</p> <br/>
    <p> website: https://www.applyuninow.com/login </p> <br/>

    
    Thank you, <br/>
    Team Applyuninow <br/>
    <br/><br/>`;
    Mail_1.default.sendLater((message) => {
        message
            .from('NoReply@applyuninow.com')
            .to(user.email)
            .subject(`Welcome to ApplyUniNow!`)
            .html(htmlContent);
    });
});
//# sourceMappingURL=events.js.map