"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const standalone_1 = require("@adonisjs/core/build/standalone");
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
const Mail_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Addons/Mail"));
const Logger_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Logger"));
const crypto_1 = __importDefault(require("crypto"));
class ResetPassword extends standalone_1.BaseCommand {
    async run() {
        try {
            this.logger.info(`🔍 Looking up user: ${this.email}...`);
            const user = await User_1.default.query()
                .where('email', this.email)
                .whereNull('deleted_at')
                .preload('role')
                .first();
            if (!user) {
                this.logger.error(`❌ Error: No registered user found with email: ${this.email}`);
                this.logger.info('\n💡 Tip: Users must be registered first before password reset is allowed.');
                process.exit(1);
            }
            this.logger.success(`✅ User found: ${user.name} (ID: ${user.id}, Role: ${user.role?.name || 'N/A'})`);
            if (this.newPassword) {
                this.logger.info(`\n🔐 Setting new password directly...`);
                user.password = this.newPassword;
                user.token = null;
                await user.save();
                this.logger.success(`✅ Password has been reset successfully!`);
                this.logger.info(`\n📧 New password: ${this.newPassword}`);
                this.logger.warning(`\n⚠️  Please share this password securely with the user.`);
            }
            else {
                this.logger.info(`\n🔑 Generating reset token...`);
                const token = crypto_1.default.randomBytes(20).toString('hex');
                user.token = token;
                await user.save();
                const frontendUrl = process.env.FRONTEND_APP_URL || 'http://localhost:3000';
                const url = `${frontendUrl}/reset-password?email=${this.email}&token=${token}`;
                const htmlContent = `Hi ${user.name},<br/><br/>
          We have received password reset request for your account. To reset your password, click on the link below:<br/><br/>
          <a href="${url}" style="background-color: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Reset Password</a><br/><br/>
          Or copy and paste this link into your browser:<br/>
          ${url}<br/><br/>
          Thank you,<br/>
          Team ApplyUniNow<br/><br/>
          <small>If you didn't request this password reset, please ignore this email.</small>`;
                this.logger.info(`\n📧 Sending password reset email...`);
                try {
                    await Mail_1.default.send((message) => {
                        message
                            .from('NoReply@applyuninow.com')
                            .to(this.email)
                            .subject(`ApplyUniNow - Password Reset Request`)
                            .html(htmlContent);
                    });
                    this.logger.success(`✅ Password reset email sent successfully!`);
                    this.logger.info(`\n📋 Reset link: ${url}`);
                    this.logger.info(`\n💡 The user can now click the link to reset their password.`);
                }
                catch (mailError) {
                    this.logger.error(`\n❌ Failed to send email: ${mailError.message}`);
                    this.logger.info(`\n📋 However, the reset token has been generated.`);
                    this.logger.info(`\n🔗 Reset URL: ${url}`);
                    this.logger.info(`\n💡 You can manually share this link with the user.`);
                    Logger_1.default.error('Password reset email error:', mailError);
                }
            }
            this.logger.success(`\n✅ Process completed successfully!\n`);
        }
        catch (error) {
            this.logger.error(`\n❌ Error: ${error.message}`);
            Logger_1.default.error('Password reset command error:', error);
            process.exit(1);
        }
    }
}
ResetPassword.commandName = 'reset:password';
ResetPassword.description = 'Reset password for an existing user. Generates reset token and sends email, or sets password directly if provided.';
ResetPassword.settings = {
    loadApp: true,
    stayAlive: false,
};
__decorate([
    standalone_1.args.string({ description: 'Email address of the user' }),
    __metadata("design:type", String)
], ResetPassword.prototype, "email", void 0);
__decorate([
    standalone_1.args.string({ description: 'Optional: New password to set directly (admin use)', required: false }),
    __metadata("design:type", String)
], ResetPassword.prototype, "newPassword", void 0);
exports.default = ResetPassword;
//# sourceMappingURL=ResetPassword.js.map