"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const standalone_1 = require("@adonisjs/core/build/standalone");
const nodemailer_1 = __importDefault(require("nodemailer"));
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
const Logger_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Logger"));
class TestSmtp extends standalone_1.BaseCommand {
    async run() {
        this.logger.info('\n🔍 Testing Office365 SMTP Connection...\n');
        this.logger.info('='.repeat(60));
        const smtpConfig = {
            host: Env_1.default.get('SMTP_HOST', 'smtp.office365.com'),
            port: Env_1.default.get('SMTP_PORT', 587),
            secure: false,
            auth: {
                user: Env_1.default.get('MAIL_USERNAME', 'NoReply@applyuninow.com'),
                pass: Env_1.default.get('MAIL_PASSWORD', 'Pan72128'),
            },
            tls: {
                rejectUnauthorized: false,
            },
        };
        this.logger.info('📋 Configuration:');
        this.logger.info(`   Host: ${smtpConfig.host}`);
        this.logger.info(`   Port: ${smtpConfig.port}`);
        this.logger.info(`   Username: ${smtpConfig.auth.user}`);
        this.logger.info(`   Password: ${smtpConfig.auth.pass ? '***' + smtpConfig.auth.pass.slice(-4) : 'Not set'}`);
        this.logger.info('='.repeat(60));
        this.logger.info('\n');
        try {
            this.logger.info('1️⃣ Creating SMTP transporter...');
            const transporter = nodemailer_1.default.createTransport(smtpConfig);
            this.logger.success('   ✅ Transporter created\n');
            this.logger.info('2️⃣ Verifying SMTP connection...');
            await transporter.verify();
            this.logger.success('   ✅ SMTP connection verified successfully!\n');
            this.logger.info('3️⃣ Connection test complete!\n');
            this.logger.info('='.repeat(60));
            this.logger.success('✅ SUCCESS: SMTP connection is working!');
            this.logger.info('='.repeat(60));
            this.logger.info('\n💡 The account credentials are valid and can connect to Office365.');
            this.logger.info('💡 If emails are not being sent, check:');
            this.logger.info('   - Email quota limits in Office365 admin center');
            this.logger.info('   - Spam/junk folder in recipient inbox');
            this.logger.info('   - Application logs for specific error messages\n');
        }
        catch (error) {
            this.logger.error('='.repeat(60));
            this.logger.error('❌ ERROR: SMTP connection failed!');
            this.logger.error('='.repeat(60));
            this.logger.error('\n📋 Error Details:');
            this.logger.error(`   Message: ${error.message}`);
            if (error.code) {
                this.logger.error(`   Code: ${error.code}`);
            }
            if (error.response) {
                this.logger.error(`   Response: ${error.response}`);
            }
            this.logger.error('\n🔍 Common Issues:');
            if (error.message.includes('Invalid login') || error.message.includes('authentication')) {
                this.logger.error('   ❌ Invalid credentials - Check username and password');
                this.logger.info('   💡 Make sure you\'re using the correct email and password');
                this.logger.info('   💡 If MFA is enabled, use an App Password instead');
            }
            else if (error.message.includes('quota') || error.message.includes('limit') || error.message.includes('exceeded')) {
                this.logger.error('   ❌ Email quota exceeded - Account may have hit sending limits');
                this.logger.info('   💡 Check Office365 admin center for quota limits');
                this.logger.info('   💡 Wait 24 hours for quota to reset, or upgrade plan');
            }
            else if (error.message.includes('timeout') || error.message.includes('ECONNREFUSED')) {
                this.logger.error('   ❌ Connection timeout - Network or firewall issue');
                this.logger.info('   💡 Check if port 587 is open');
                this.logger.info('   💡 Verify SMTP_HOST is correct');
            }
            else if (error.message.includes('certificate') || error.message.includes('TLS')) {
                this.logger.error('   ❌ TLS/SSL certificate issue');
                this.logger.info('   💡 This might be a network/proxy issue');
            }
            else {
                this.logger.error('   ❌ Unknown error - Check the error message above');
                this.logger.info('   💡 Review Office365 account settings');
                this.logger.info('   💡 Check if SMTP is enabled for this account');
            }
            this.logger.info('\n📚 How to check Office365 quota:');
            this.logger.info('   1. Go to: https://admin.microsoft.com');
            this.logger.info('   2. Navigate to: Reports → Usage → Email activity');
            this.logger.info('   3. Check for quota limits or restrictions');
            this.logger.info('   4. Look for any account restrictions or blocks');
            this.logger.info('   5. Check: Admin center → Users → Active users → Select user → Mail tab\n');
            Logger_1.default.error('SMTP connection test failed:', error);
            throw error;
        }
    }
}
exports.default = TestSmtp;
TestSmtp.commandName = 'test:smtp';
TestSmtp.description = 'Test Office365 SMTP connection and verify credentials';
TestSmtp.settings = {
    loadApp: true,
    stayAlive: false,
};
//# sourceMappingURL=TestSmtp.js.map