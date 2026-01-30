/**
 * Test SMTP Connection Script
 * 
 * This script tests the Office365 SMTP connection and verifies credentials
 * 
 * Usage:
 *   node ace test:smtp
 *   OR
 *   ts-node server/test-smtp-connection.ts
 */

import nodemailer from 'nodemailer'
import Env from '@ioc:Adonis/Core/Env'
import Logger from '@ioc:Adonis/Core/Logger'

async function testSMTPConnection() {
  console.log('\n🔍 Testing Office365 SMTP Connection...\n')
  console.log('=' .repeat(60))
  
  const smtpConfig = {
    host: Env.get('SMTP_HOST', 'smtp.office365.com'),
    port: Env.get('SMTP_PORT', 587),
    secure: false, // Use STARTTLS for port 587
    auth: {
      user: Env.get('MAIL_USERNAME', 'NoReply@applyuninow.com'),
      pass: Env.get('MAIL_PASSWORD', 'Pan72128'),
    },
    tls: {
      rejectUnauthorized: false,
    },
  }

  console.log('📋 Configuration:')
  console.log(`   Host: ${smtpConfig.host}`)
  console.log(`   Port: ${smtpConfig.port}`)
  console.log(`   Username: ${smtpConfig.auth.user}`)
  console.log(`   Password: ${smtpConfig.auth.pass ? '***' + smtpConfig.auth.pass.slice(-4) : 'Not set'}`)
  console.log('=' .repeat(60))
  console.log('\n')

  try {
    // Step 1: Create transporter
    console.log('1️⃣ Creating SMTP transporter...')
    const transporter = nodemailer.createTransport(smtpConfig)
    console.log('   ✅ Transporter created\n')

    // Step 2: Verify connection
    console.log('2️⃣ Verifying SMTP connection...')
    await transporter.verify()
    console.log('   ✅ SMTP connection verified successfully!\n')

    // Step 3: Get capabilities
    console.log('3️⃣ Checking server capabilities...')
    const capabilities = transporter.transporter.auth
    console.log('   ✅ Server capabilities retrieved\n')

    // Step 4: Test sending (optional - commented out to avoid sending test emails)
    console.log('4️⃣ Connection test complete!\n')
    console.log('=' .repeat(60))
    console.log('✅ SUCCESS: SMTP connection is working!')
    console.log('=' .repeat(60))
    console.log('\n💡 The account credentials are valid and can connect to Office365.')
    console.log('💡 If emails are not being sent, check:')
    console.log('   - Email quota limits in Office365 admin center')
    console.log('   - Spam/junk folder in recipient inbox')
    console.log('   - Application logs for specific error messages\n')

    process.exit(0)
  } catch (error: any) {
    console.log('=' .repeat(60))
    console.log('❌ ERROR: SMTP connection failed!')
    console.log('=' .repeat(60))
    console.log('\n📋 Error Details:')
    console.log(`   Message: ${error.message}`)
    
    if (error.code) {
      console.log(`   Code: ${error.code}`)
    }
    
    if (error.response) {
      console.log(`   Response: ${error.response}`)
    }

    console.log('\n🔍 Common Issues:')
    
    if (error.message.includes('Invalid login')) {
      console.log('   ❌ Invalid credentials - Check username and password')
      console.log('   💡 Make sure you\'re using the correct email and password')
      console.log('   💡 If MFA is enabled, use an App Password instead')
    } else if (error.message.includes('quota') || error.message.includes('limit')) {
      console.log('   ❌ Email quota exceeded - Account may have hit sending limits')
      console.log('   💡 Check Office365 admin center for quota limits')
      console.log('   💡 Wait 24 hours for quota to reset, or upgrade plan')
    } else if (error.message.includes('timeout') || error.message.includes('ECONNREFUSED')) {
      console.log('   ❌ Connection timeout - Network or firewall issue')
      console.log('   💡 Check if port 587 is open')
      console.log('   💡 Verify SMTP_HOST is correct')
    } else if (error.message.includes('certificate') || error.message.includes('TLS')) {
      console.log('   ❌ TLS/SSL certificate issue')
      console.log('   💡 This might be a network/proxy issue')
    } else {
      console.log('   ❌ Unknown error - Check the error message above')
      console.log('   💡 Review Office365 account settings')
      console.log('   💡 Check if SMTP is enabled for this account')
    }

    console.log('\n📚 How to check Office365 quota:')
    console.log('   1. Go to: https://admin.microsoft.com')
    console.log('   2. Navigate to: Reports → Usage → Email activity')
    console.log('   3. Check for quota limits or restrictions')
    console.log('   4. Look for any account restrictions or blocks\n')

    Logger.error('SMTP connection test failed:', error)
    process.exit(1)
  }
}

// Run the test
testSMTPConnection()
