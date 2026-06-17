import { BaseCommand, args } from '@adonisjs/core/build/standalone'
import User from 'App/Models/User'
import Mail from '@ioc:Adonis/Addons/Mail'
import Logger from '@ioc:Adonis/Core/Logger'
import crypto from 'crypto'

export default class ResetPassword extends BaseCommand {
  public static commandName = 'reset:password'
  public static description = 'Reset password for an existing user. Generates reset token and sends email, or sets password directly if provided.'

  @args.string({ description: 'Email address of the user' })
  public email: string

  @args.string({ description: 'Optional: New password to set directly (admin use)', required: false })
  public newPassword?: string

  public static settings = {
    loadApp: true,
    stayAlive: false,
  }

  public async run() {
    try {
      this.logger.info(`🔍 Looking up user: ${this.email}...`)
      
      const user = await User.query()
        .where('email', this.email)
        .whereNull('deleted_at')
        .preload('role')
        .first()

      if (!user) {
        this.logger.error(`❌ Error: No registered user found with email: ${this.email}`)
        this.logger.info('\n💡 Tip: Users must be registered first before password reset is allowed.')
        process.exit(1)
      }

      this.logger.success(`✅ User found: ${user.name} (ID: ${user.id}, Role: ${user.role?.name || 'N/A'})`)

      if (this.newPassword) {
        // Direct password reset (admin use)
        this.logger.info(`\n🔐 Setting new password directly...`)
        user.password = this.newPassword
        user.token = null as any // Clear any existing reset token
        await user.save()
        this.logger.success(`✅ Password has been reset successfully!`)
        this.logger.info(`\n📧 New password: ${this.newPassword}`)
        this.logger.warning(`\n⚠️  Please share this password securely with the user.`)
      } else {
        // Generate reset token and send email
        this.logger.info(`\n🔑 Generating reset token...`)
        const token = crypto.randomBytes(20).toString('hex')
        user.token = token
        await user.save()

        const frontendUrl = process.env.FRONTEND_APP_URL || 'http://localhost:3000'
        const url = `${frontendUrl}/reset-password?email=${this.email}&token=${token}`
        
        const htmlContent = `Hi ${user.name},<br/><br/>
          We have received password reset request for your account. To reset your password, click on the link below:<br/><br/>
          <a href="${url}" style="background-color: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Reset Password</a><br/><br/>
          Or copy and paste this link into your browser:<br/>
          ${url}<br/><br/>
          Thank you,<br/>
          Team ApplyUniNow<br/><br/>
          <small>If you didn't request this password reset, please ignore this email.</small>`

        this.logger.info(`\n📧 Sending password reset email...`)
        
        try {
          await Mail.send((message) => {
            message
              .from('NoReply@applyuninow.com')
              .to(this.email)
              .subject(`ApplyUniNow - Password Reset Request`)
              .html(htmlContent)
          })
          
          this.logger.success(`✅ Password reset email sent successfully!`)
          this.logger.info(`\n📋 Reset link: ${url}`)
          this.logger.info(`\n💡 The user can now click the link to reset their password.`)
        } catch (mailError) {
          this.logger.error(`\n❌ Failed to send email: ${mailError.message}`)
          this.logger.info(`\n📋 However, the reset token has been generated.`)
          this.logger.info(`\n🔗 Reset URL: ${url}`)
          this.logger.info(`\n💡 You can manually share this link with the user.`)
          Logger.error('Password reset email error:', mailError)
        }
      }

      this.logger.success(`\n✅ Process completed successfully!\n`)
    } catch (error) {
      this.logger.error(`\n❌ Error: ${error.message}`)
      Logger.error('Password reset command error:', error)
      process.exit(1)
    }
  }
}
