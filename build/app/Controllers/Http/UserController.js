"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = global[Symbol.for('ioc.use')]("App/Helpers/helpers");
const Role_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Role"));
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
const moment_1 = __importDefault(require("moment"));
const Validator = require('validatorjs');
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
const Application_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Application"));
const Helpers_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Helpers");
const upload_1 = global[Symbol.for('ioc.use')]("App/Helpers/upload");
const UserSession_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/UserSession"));
const Log_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Log"));
const UserPayslip_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/UserPayslip"));
const Hash_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Hash"));
class UserController {
    async index({ request, response }) {
        try {
            const users = await User_1.default.listing(request);
            return response.json(users);
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async store(ctx) {
        return this.save(ctx);
    }
    async update(ctx) {
        const { user } = ctx.request;
        return this.save(ctx, user);
    }
    async save({ request, response }, record = null) {
        const data = request.only([
            'name',
            'email',
            'phone',
            'role_id',
            'emg_contact_name',
            'emg_contact_phone',
            'emg_contact_email',
            'address',
            'city',
            'state',
            'user_type',
            'image',
            'offer_letter',
        ]);
        const rules = {
            name: 'required|string|max:150',
            email: 'required|max:150|email',
            phone: 'required|max:15',
            role_id: 'integer|required',
            emg_contact_name: 'max:150',
            emg_contact_phone: 'max:15',
            emg_contact_email: 'max:150|email',
            address: 'string|max:500',
            city: 'string|max:50',
            state: 'string|max:50',
            user_type: 'required',
        };
        const validation = new Validator(request.all(), rules);
        if (validation.fails()) {
            return response.badRequest(validation.errors.errors);
        }
        const uploadSchema = Validator_1.schema.create({
            user_image: Validator_1.schema.file.optional({
                size: '5mb',
                extnames: ['jpeg', 'jpg', 'jfif', 'png'],
            }),
            user_offer_letter: Validator_1.schema.file.optional({
                size: '5mb',
                extnames: ['pdf'],
            }),
        });
        const payload = await request.validate({ schema: uploadSchema });
        if (payload.user_image) {
            const fileName = `${(0, Helpers_1.cuid)()}.${payload.user_image.extname}`;
            await payload.user_image.move(Application_1.default.tmpPath('uploads'), {
                name: fileName,
            });
            data['image'] = await (0, upload_1.toS3)(Application_1.default.tmpPath('uploads') + '/' + fileName);
        }
        if (payload.user_offer_letter) {
            const fileName = `${(0, Helpers_1.cuid)()}.${payload.user_offer_letter.extname}`;
            await payload.user_offer_letter.move(Application_1.default.tmpPath('uploads'), {
                name: fileName,
            });
            data['offer_letter'] = await (0, upload_1.toS3)(Application_1.default.tmpPath('uploads') + '/' + fileName);
        }
        const existingUserByEmail = await User_1.default.query().where('email', data.email).first();
        let password = (0, helpers_1.generatePassword)();
        let user = record;
        if (record === null) {
            user = new User_1.default();
            user.password = password;
            user.first_time = data.role_id != 1 ? true : false;
            user.email = data.email;
        }
        if (existingUserByEmail && existingUserByEmail.id !== user.id) {
            if (existingUserByEmail.email.toLowerCase() === data.email.toLowerCase()) {
                return response.badRequest({ message: 'User already exists for given email address.' });
            }
        }
        if (record && data['image']) {
            data['image'] = data['image'];
        }
        if (record && data['offer_letter']) {
            data['offer_letter'] = data['offer_letter'];
        }
        for (let [key, value] of Object.entries(data)) {
            user[key] = value;
        }
        await user.save();
        if (!record) {
            (0, helpers_1.sendExePasswordEmail)(user, password);
        }
        return response.json({ message: `User  ${record ? 'Updated' : 'Created'} Successfully` });
    }
    async show({ request, response }) {
        try {
            let user = await User_1.default.query()
                .preload('role', (query) => {
                query.select('name');
            })
                .preload('payslips')
                .where('id', request.param('id'))
                .first()
                .then((serialize) => serialize?.toJSON());
            if (!user) {
                return response.notFound({ message: `User not found.` });
            }
            let session = await UserSession_1.default.query()
                .where('user_id', user.id)
                .orderBy('id', 'desc')
                .first();
            user.session = session;
            if (user.kyc_documents && !user.kyc_documents.length) {
                user.kyc_documents = [
                    {
                        name: 'Address proof',
                        type: 1,
                        updtated_at: '',
                        url: '',
                    },
                    {
                        name: 'Pan Card',
                        type: 2,
                        updtated_at: '',
                        url: '',
                    },
                    {
                        name: 'Other proof',
                        type: 3,
                        updtated_at: '',
                        url: '',
                    },
                ];
            }
            return response.json(user);
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async updateStatus({ request, response }) {
        try {
            const payload = request.body();
            let user = await User_1.default.findOrFail(request.param('id'));
            user.active = payload.active == true ? 1 : 0;
            await user.save();
            return response.json({ message: 'Status Update Successfully' });
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async rolesDropdown({ response }) {
        try {
            let roles = await Role_1.default.dropdown();
            return response.json(roles);
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async usersDropdown({ response }) {
        try {
            let users = await User_1.default.dropdown();
            return response.json(users);
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async updatePolicyAccept({ response, auth }) {
        try {
            const user = await User_1.default.query().where('id', auth.user.id).preload('role').first();
            if (!user) {
                return response.badRequest({ message: 'Invalid User Access' });
            }
            user.is_agreed_policy = '1';
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
                show_policy_model: false,
            };
            return response.json(obj);
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async destroy({ request, response }) {
        try {
            const { user } = request;
            user['deleted_at'] = (0, moment_1.default)().utcOffset('+05:30').format('YYYY-MM-DD HH:mm:ss');
            user.active = false;
            await user.save();
            return response.json({ message: 'deleted Successfully' });
        }
        catch (exception) {
            console.log(exception);
            return response.internalServerError({ message: exception.message });
        }
    }
    async getLogs({ request, response }) {
        try {
            let { page = 1, start_date = '', end_date = '' } = request.qs();
            const limit = 10;
            let query = Log_1.default.query().where('user_id', request.params().id);
            if (start_date && end_date) {
                let start = (0, moment_1.default)(start_date)
                    .utcOffset('+05:30')
                    .startOf('day')
                    .format('YYYY-MM-DD HH:mm:ss');
                let end = (0, moment_1.default)(end_date).utcOffset('+05:30').endOf('day').format('YYYY-MM-DD HH:mm:ss');
                query.where('created_at', '>=', start);
                query.where('created_at', '<=', end);
            }
            let data = await query
                .preload('user', (query) => {
                query.select('id', 'name', 'image');
            })
                .orderBy('id', 'desc')
                .paginate(page, limit);
            return response.json(data);
        }
        catch (excepiton) {
            return response.internalServerError({ message: excepiton.message });
        }
    }
    async addUserPaySlip({ request, response }) {
        try {
            const data = request.only(['user_id', 'payslip_month']);
            const rules = {
                payslip_month: 'required|string',
                user_id: 'required',
            };
            const validation = new Validator(data, rules);
            if (validation.fails()) {
                return response.badRequest(validation.errors.errors);
            }
            const uploadSchema = Validator_1.schema.create({
                payslip: Validator_1.schema.file({
                    size: '5mb',
                    extnames: ['pdf'],
                }),
            });
            const payload = await request.validate({ schema: uploadSchema });
            const fileName = `${(0, Helpers_1.cuid)()}.${payload.payslip.extname}`;
            await payload.payslip.move(Application_1.default.tmpPath('uploads'), {
                name: fileName,
            });
            let url = await (0, upload_1.toS3)(Application_1.default.tmpPath('uploads') + '/' + fileName);
            let payslip = await UserPayslip_1.default.create({
                user_id: data.user_id,
                payslip_month: (0, moment_1.default)(data.payslip_month).utcOffset('+05:30').format('YYYY-MM-DD HH:mm:ss'),
                payslip_url: url,
            });
            return response.json(payslip);
        }
        catch (excepiton) {
            return response.internalServerError({ message: excepiton });
        }
    }
    async deleteUserPaySlip({ request, response }) {
        try {
            const { userpayslip } = request;
            await userpayslip.delete();
            return response.json({ message: `Payslip deleted Successfully` });
        }
        catch (excepiton) {
            return response.internalServerError({ message: excepiton.message });
        }
    }
    async changePassword({ auth, request, response }) {
        try {
            const user = auth.user;
            const rules = {
                password: 'required|min:8|max:14|confirmed',
            };
            const validation = new Validator(request.all(), rules);
            if (validation.fails()) {
                return response.badRequest(validation.errors.errors);
            }
            const { password } = request.all();
            if (await Hash_1.default.verify(user.password, password)) {
                return response.badRequest({ message: 'New password not same as old password!' });
            }
            user.password = password;
            await user.save();
            await auth.use('api').revoke();
            return response.send({ message: 'Password Updated successfully.' });
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async updateProfile({ auth, request, response }) {
        try {
            const user = auth.user;
            const rules = {
                name: 'required|max:150',
                phone: 'required|max:10|max:10',
            };
            const { name, phone, image } = request.all();
            const validation = new Validator(request.all(), rules);
            if (validation.fails()) {
                return response.badRequest(validation.errors.errors);
            }
            const uploadSchema = Validator_1.schema.create({
                user_image: Validator_1.schema.file.optional({
                    size: '5mb',
                    extnames: ['jpeg', 'jpg', 'jfif', 'png'],
                }),
            });
            const payload = await request.validate({ schema: uploadSchema });
            if (payload.user_image) {
                const fileName = `${(0, Helpers_1.cuid)()}.${payload.user_image.extname}`;
                await payload.user_image.move(Application_1.default.tmpPath('uploads'), {
                    name: fileName,
                });
                user['image'] = await (0, upload_1.toS3)(Application_1.default.tmpPath('uploads') + '/' + fileName);
            }
            else {
                user.image = image;
            }
            user.name = name;
            user.phone = phone;
            await user.save();
            return response.send({ message: 'Profile Updated successfully.' });
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async getAuthProfile({ auth, response }) {
        try {
            let user = await User_1.default.query()
                .preload('role', (query) => {
                query.select('name');
            })
                .preload('payslips')
                .where('id', auth.user.id)
                .first()
                .then((serialize) => serialize?.toJSON());
            if (!user) {
                return response.notFound({ message: `User not found.` });
            }
            let session = await UserSession_1.default.query()
                .where('user_id', user.id)
                .orderBy('id', 'desc')
                .first();
            user.session = session;
            if (user.kyc_documents && !user.kyc_documents.length) {
                user.kyc_documents = [
                    {
                        name: 'Address proof',
                        type: 1,
                        updtated_at: '',
                        url: '',
                    },
                    {
                        name: 'Pan Card',
                        type: 2,
                        updtated_at: '',
                        url: '',
                    },
                    {
                        name: 'Other proof',
                        type: 3,
                        updtated_at: '',
                        url: '',
                    },
                ];
            }
            return response.json(user);
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async updateKYCDocuments({ request, response, auth }) {
        const data = request.only(['name', 'type']);
        const rules = {
            name: 'required|string',
            type: 'required',
        };
        const validation = new Validator(request.all(), rules);
        if (validation.fails()) {
            return response.badRequest(validation.errors.errors);
        }
        const uploadSchema = Validator_1.schema.create({
            image: Validator_1.schema.file.optional({
                size: '5mb',
                extnames: ['pdf'],
            }),
        });
        const payload = await request.validate({ schema: uploadSchema });
        let key_document = '';
        if (payload.image) {
            const fileName = `${(0, Helpers_1.cuid)()}.${payload.image.extname}`;
            await payload.image.move(Application_1.default.tmpPath('uploads'), {
                name: fileName,
            });
            key_document = await (0, upload_1.toS3)(Application_1.default.tmpPath('uploads') + '/' + fileName);
        }
        let user = auth.user;
        let list = user.kyc_documents
            ? JSON.parse(user.kyc_documents)
            : [
                {
                    name: 'Address proof',
                    type: 1,
                    updtated_at: '',
                    url: '',
                },
                {
                    name: 'Pan Card',
                    type: 2,
                    updtated_at: '',
                    url: '',
                },
                {
                    name: 'Other proof',
                    type: 3,
                    updtated_at: '',
                    url: '',
                },
            ];
        let index = list.findIndex((x) => x.name == data.name && x.type == data.type);
        if (index != -1) {
            list[index].url = key_document;
            list[index].updtated_at = (0, moment_1.default)().utcOffset('+05:30').format('YYYY-MM-DD HH:mm:ss');
        }
        user.kyc_documents = list;
        await user.save();
        return response.json({ message: `KYC Documents Updated Successfully!` });
    }
    async deleteKYCDocuments({ request, response }) {
        const { user } = request;
        const data = request.only(['name', 'type']);
        const rules = {
            name: 'required|string',
            type: 'required',
        };
        const validation = new Validator(request.all(), rules);
        if (validation.fails()) {
            return response.badRequest(validation.errors.errors);
        }
        let list = user.kyc_documents
            ? JSON.parse(user.kyc_documents)
            : [
                {
                    name: 'Address proof',
                    type: 1,
                    updtated_at: '',
                    url: '',
                },
                {
                    name: 'Pan Card',
                    type: 2,
                    updtated_at: '',
                    url: '',
                },
                {
                    name: 'Other proof',
                    type: 3,
                    updtated_at: '',
                    url: '',
                },
            ];
        let index = list.findIndex((x) => x.name == data.name && x.type == data.type);
        if (index != -1) {
            list[index].url = '';
            list[index].updtated_at = '';
        }
        user.kyc_documents = list;
        await user.save();
        return response.json({ message: `KYC Document Deleted Successfully!` });
    }
    async updateKYCStatus({ request, response }) {
        const { user } = request;
        const data = request.only(['status']);
        const rules = {
            status: 'required',
        };
        const validation = new Validator(data, rules);
        if (validation.fails()) {
            return response.badRequest(validation.errors.errors);
        }
        user.document_status = data.status;
        await user.save();
        return response.json({ message: `Status changed to ${user.status}` });
    }
}
exports.default = UserController;
//# sourceMappingURL=UserController.js.map