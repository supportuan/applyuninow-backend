import User from 'App/Models/User'
import Hash from '@ioc:Adonis/Core/Hash'
const Validator = require('validatorjs')
import crypto from 'crypto'
import Mail from '@ioc:Adonis/Addons/Mail'
import Logger from '@ioc:Adonis/Core/Logger'
import UserSession from 'App/Models/UserSession'
import moment from 'moment'
import RoleModule from 'App/Models/RoleModule'
import Permission from 'App/Models/Permission'

export default class AuthController {
  /**
   *
   * @param request
   * @param response
   * @param auth
   */
  async login({ request, response, auth, location, device }) {
    try {
      const rules = {
        email: 'required|max:150|email',
        password: 'required|min:8|max:15',
        type:'required'
      }

      const validation = new Validator(request.all(), rules)
      if (validation.fails()) {
        return response.badRequest(validation.errors.errors)
      }

      let { email, password, type } = request.all()

      const user = await User.query()
        .where('email', email)
        .whereNull('deleted_at')
        .preload('role')
        .first()

      if (!user) {
        return response.badRequest({ message: 'No registered user found for the given email' })
      }

      if (user && type === 'student' && user.role.slug !== 'student') {
        return response.badRequest({ message: 'No registered user found for the given email' })
      }

      if (user && type === 'admin_users' && user.role.slug === 'student') {
        return response.badRequest({ message: 'No registered user found for the given email' })
      }

      if (user && !user.active) {
        return response.badRequest({ message: 'User Access disabled Please Contact Admin!' })
      }

      if (!(await Hash.verify(user.password, password))) {
        return response.badRequest({ message: 'Invalid credentials' })
      }

      const token = await auth.use('api').generate(user, {
        expiresIn: '8hours',
      })

      let modules = await RoleModule.query().where({})
      let user_permissions: any = await Permission.query()
        .preload('module')
        .where({ role_id: user?.role_id })

      user_permissions = user_permissions.map((y) => {
        let module = modules.find((x) => x.id === y.module_id)
        return {
          module: module?.name,
          is_read: y.is_read,
          is_write: y.is_write,
          is_delete: y.is_delete,
          is_update: y.is_update,
          slug: module?.slug,
          parent_id: module?.parent_id,
        }
      })

      await (await user.save()).serialize()
      let obj = {
        name: user.name,
        email: user.email,
        token: token,
        id: user.id,
        first_time: user.first_time ? true : false,
        role_id: user.role.id,
        role_slug: user.role.slug,
        show_policy_model: user.role.slug === 'student' && !user.is_agreed_policy ? true : false,
        user_permissions: user_permissions,
      }

      await UserSession.create({
        user_id: user.id,
        device_info: device,
        location: location,
        user_ip: request.ip(),
        is_logged_out: false,
        signin_at: moment().utcOffset('+05:30').format('YYYY-MM-DD HH:mm:ss'),
      })

      return response.json(obj)
    } catch (exception) {
      Logger.error('Login error: %o', {
        message: exception?.message,
        code: exception?.code,
        stack: exception?.stack,
      })
      return response.internalServerError({
        message: exception?.message || exception?.code || 'Unexpected error during login',
      })
    }
  }

  /**
   *
   * @param request
   * @param response
   */
  async forgotPassword({ request, response }) {
    try {
      const rules = {
        email: 'required|max:150|email',
      }

      const validation = new Validator(request.all(), rules)
      if (validation.fails()) {
        return response.badRequest(validation.errors.errors)
      }

      const { email } = request.all()
      
      Logger.info(`Password reset requested for ${email}`)
      
      const user = await User.query()
        .where('email', email)
        .whereNull('deleted_at')
        .preload('role')
        .first()

      if (!user) {
        Logger.warn(`Password reset attempted for non-existent email: ${email}`)
        return response.badRequest({ message: 'No registered user found for the given email' })
      }

      const token = crypto.randomBytes(20).toString('hex')

      user.token = token
      await user.save()

      const url = `${process.env.FRONTEND_APP_URL}/reset-password?email=${email}&token=${token}`
      let htmlContent = `Hi,<br/><br/>
        We have received password reset request from you. Inorder to reset your password, click on the link below<br/><br/>
        ${url} 
        <br/><br/>
        Thank you,<br/>
        Team Scube
        <br/><br/>
        <small>If it wasn't you who requested for password reset, then no action is required to perform</small>`

      try {
        // Use Mail.send() for immediate error feedback instead of sendLater()
        // This ensures we catch configuration errors immediately
        await Mail.send((message) => {
          message
            .from('NoReply@applyuninow.com')
            .to(email)
            .subject(`Applyuninow Reset Password!`)
            .html(htmlContent)
        })
        
        Logger.info(`Password reset email sent successfully to ${email}`)
        
        return response.json({ 
          data: { 
            message: 'Reset instructions sent to registered email!' 
          } 
        })
      } catch (mailError) {
        Logger.error(`Failed to send password reset email to ${email}:`, mailError)
        Logger.error(`Mail error details:`, {
          message: mailError.message,
          stack: mailError.stack,
          code: mailError.code
        })
        
        // Return a more specific error message
        return response.internalServerError({ 
          message: `Failed to send reset email: ${mailError.message}. Please check mail configuration or try again later.` 
        })
      }
    } catch (exception) {
      Logger.error(`Error in forgotPassword for ${request.all().email}:`, exception)
      return response.internalServerError({ message: exception.message })
    }
  }

  async resetPassword({ request, response }) {
    const rules = {
      email: 'required|max:150|email',
      password: 'required',
      token: 'required',
    }

    const validation = new Validator(request.all(), rules)
    if (validation.fails()) {
      return response.badRequest(validation.errors.errors)
    }
    const { email, password, token } = request.all()

    const user: any = await User.query()
      .where('email', email)
      .whereNull('deleted_at')
      .preload('role')
      .first()

    if (!user) {
      return response.badRequest({ message: 'No registered user found for the given email' })
    }

    if (user.token !== token) return response.badRequest({ token: 'Incorrect token supplied.' })

    user.password = password

    /**
     * After user resets the password, we should make token as null
     * thus making the reset link sent as dead and invalid
     */
    user.token = null
    await user.save()
    return response.json({ message: 'Password Reset SuccessFully' })
  }

  async password({ request, response, auth }) {
    const user = await User.query().where('id', auth.user.id).preload('role').first()

    if (!user) {
      return response.badRequest({ message: 'Invalid User Access' })
    }

    const rules = {
      password: 'required',
    }

    const validation = new Validator(request.all(), rules)
    if (validation.fails()) {
      return response.badRequest(validation.errors.errors)
    }

    user.password = request.body().password
    user.first_time = '0'
    const token = await auth.use('api').generate(user, {
      expiresIn: '8hours',
    })

    await (await user.save()).serialize()
    let obj = {
      name: user.name,
      email: user.email,
      token: token,
      id: user.id,
      first_time: false,
      role_id: user.role.id,
      role_slug: user.role.slug,
      show_policy_model: user.role.slug === 'student' && !user.is_agreed_policy ? true : false,
    }
    return response.json(obj)
  }

  /**
   * REVOKE USER ACCESS TOKEN ON LOGOUT
   * @param request
   * @param response
   */
  async logout({ auth, response }) {
    try {
      let userSession = await UserSession.query()
        .where('user_id', auth.user!.id)
        .andWhere('is_logged_out', false)
        .first()
      if (userSession) {
        userSession.is_logged_out = true
        userSession.last_access_on = moment().utcOffset('+05:30').format('YYYY-MM-DD HH:mm:ss')
        await userSession.save()
      }
      await auth.use('api').revoke()
      return response.send({ message: 'User token revoked successfully.' })
    } catch (exception) {
      return response.unauthorized({ message: 'Token not found' })
    }
  }
}
