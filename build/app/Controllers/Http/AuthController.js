"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
const Hash_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Hash"));
const Validator = require('validatorjs');
const crypto_1 = __importDefault(require("crypto"));
const Mail_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Addons/Mail"));
const Logger_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Logger"));
const UserSession_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/UserSession"));
const moment_1 = __importDefault(require("moment"));
const RoleModule_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/RoleModule"));
const Permission_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Permission"));
class AuthController {
    async login({ request, response, auth, location, device }) {
        try {
            const rules = {
                email: 'required|max:150|email',
                password: 'required|min:8|max:15',
                type: 'required'
            };
            const validation = new Validator(request.all(), rules);
            if (validation.fails()) {
                return response.badRequest(validation.errors.errors);
            }
            let { email, password, type } = request.all();
            const user = await User_1.default.query()
                .where('email', email)
                .whereNull('deleted_at')
                .preload('role')
                .first();
            if (!user) {
                return response.badRequest({ message: 'No registered user found for the given email' });
            }
            if (user && type === 'student' && user.role.slug !== 'student') {
                return response.badRequest({ message: 'No registered user found for the given email' });
            }
            if (user && type === 'admin_users' && user.role.slug === 'student') {
                return response.badRequest({ message: 'No registered user found for the given email' });
            }
            if (user && !user.active) {
                return response.badRequest({ message: 'User Access disabled Please Contact Admin!' });
            }
            if (!(await Hash_1.default.verify(user.password, password))) {
                return response.badRequest({ message: 'Invalid credentials' });
            }
            const token = await auth.use('api').generate(user, {
                expiresIn: '8hours',
            });
            let modules = await RoleModule_1.default.query().where({});
            let user_permissions = await Permission_1.default.query()
                .preload('module')
                .where({ role_id: user?.role_id });
            user_permissions = user_permissions.map((y) => {
                let module = modules.find((x) => x.id === y.module_id);
                return {
                    module: module?.name,
                    is_read: y.is_read,
                    is_write: y.is_write,
                    is_delete: y.is_delete,
                    is_update: y.is_update,
                    slug: module?.slug,
                    parent_id: module?.parent_id,
                };
            });
            await (await user.save()).serialize();
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
            };
            await UserSession_1.default.create({
                user_id: user.id,
                device_info: device,
                location: location,
                user_ip: request.ip(),
                is_logged_out: false,
                signin_at: (0, moment_1.default)().utcOffset('+05:30').format('YYYY-MM-DD HH:mm:ss'),
            });
            return response.json(obj);
        }
        catch (exception) {
            Logger_1.default.error('Login error: %o', {
                message: exception?.message,
                code: exception?.code,
                stack: exception?.stack,
            });
            return response.internalServerError({
                message: exception?.message || exception?.code || 'Unexpected error during login',
            });
        }
    }
    async forgotPassword({ request, response }) {
        try {
            const rules = {
                email: 'required|max:150|email',
            };
            const validation = new Validator(request.all(), rules);
            if (validation.fails()) {
                return response.badRequest(validation.errors.errors);
            }
            const { email } = request.all();
            Logger_1.default.info(`Password reset requested for ${email}`);
            const user = await User_1.default.query()
                .where('email', email)
                .whereNull('deleted_at')
                .preload('role')
                .first();
            if (!user) {
                Logger_1.default.warn(`Password reset attempted for non-existent email: ${email}`);
                return response.badRequest({ message: 'No registered user found for the given email' });
            }
            const token = crypto_1.default.randomBytes(20).toString('hex');
            user.token = token;
            await user.save();
            const url = `${process.env.FRONTEND_APP_URL}/reset-password?email=${email}&token=${token}`;
            let htmlContent = `Hi,<br/><br/>
        We have received password reset request from you. Inorder to reset your password, click on the link below<br/><br/>
        ${url} 
        <br/><br/>
        Thank you,<br/>
        Team Scube
        <br/><br/>
        <small>If it wasn't you who requested for password reset, then no action is required to perform</small>`;
            try {
                await Mail_1.default.send((message) => {
                    message
                        .from('NoReply@applyuninow.com')
                        .to(email)
                        .subject(`Applyuninow Reset Password!`)
                        .html(htmlContent);
                });
                Logger_1.default.info(`Password reset email sent successfully to ${email}`);
                return response.json({
                    data: {
                        message: 'Reset instructions sent to registered email!'
                    }
                });
            }
            catch (mailError) {
                Logger_1.default.error(`Failed to send password reset email to ${email}:`, mailError);
                Logger_1.default.error(`Mail error details:`, {
                    message: mailError.message,
                    stack: mailError.stack,
                    code: mailError.code
                });
                return response.internalServerError({
                    message: `Failed to send reset email: ${mailError.message}. Please check mail configuration or try again later.`
                });
            }
        }
        catch (exception) {
            Logger_1.default.error(`Error in forgotPassword for ${request.all().email}:`, exception);
            return response.internalServerError({ message: exception.message });
        }
    }
    async resetPassword({ request, response }) {
        const rules = {
            email: 'required|max:150|email',
            password: 'required',
            token: 'required',
        };
        const validation = new Validator(request.all(), rules);
        if (validation.fails()) {
            return response.badRequest(validation.errors.errors);
        }
        const { email, password, token } = request.all();
        const user = await User_1.default.query()
            .where('email', email)
            .whereNull('deleted_at')
            .preload('role')
            .first();
        if (!user) {
            return response.badRequest({ message: 'No registered user found for the given email' });
        }
        if (user.token !== token)
            return response.badRequest({ token: 'Incorrect token supplied.' });
        user.password = password;
        user.token = null;
        await user.save();
        return response.json({ message: 'Password Reset SuccessFully' });
    }
    async password({ request, response, auth }) {
        const user = await User_1.default.query().where('id', auth.user.id).preload('role').first();
        if (!user) {
            return response.badRequest({ message: 'Invalid User Access' });
        }
        const rules = {
            password: 'required',
        };
        const validation = new Validator(request.all(), rules);
        if (validation.fails()) {
            return response.badRequest(validation.errors.errors);
        }
        user.password = request.body().password;
        user.first_time = '0';
        const token = await auth.use('api').generate(user, {
            expiresIn: '8hours',
        });
        await (await user.save()).serialize();
        let obj = {
            name: user.name,
            email: user.email,
            token: token,
            id: user.id,
            first_time: false,
            role_id: user.role.id,
            role_slug: user.role.slug,
            show_policy_model: user.role.slug === 'student' && !user.is_agreed_policy ? true : false,
        };
        return response.json(obj);
    }
    async logout({ auth, response }) {
        try {
            let userSession = await UserSession_1.default.query()
                .where('user_id', auth.user.id)
                .andWhere('is_logged_out', false)
                .first();
            if (userSession) {
                userSession.is_logged_out = true;
                userSession.last_access_on = (0, moment_1.default)().utcOffset('+05:30').format('YYYY-MM-DD HH:mm:ss');
                await userSession.save();
            }
            await auth.use('api').revoke();
            return response.send({ message: 'User token revoked successfully.' });
        }
        catch (exception) {
            return response.unauthorized({ message: 'Token not found' });
        }
    }
}
exports.default = AuthController;
//# sourceMappingURL=AuthController.js.map