"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AdditionalService_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/AdditionalService"));
const Validator = require('validatorjs');
const Application_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Application"));
const Helpers_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Helpers");
const upload_1 = global[Symbol.for('ioc.use')]("App/Helpers/upload");
const moment_1 = __importDefault(require("moment"));
class AdditionalServiceController {
    async index({ request, response }) {
        try {
            const studyAreaList = await AdditionalService_1.default.listing(request);
            return response.json(studyAreaList);
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async create({ request, response }) {
        try {
            const rules = {
                first_name: 'required|max:200',
                last_name: 'required|max:200',
                email: 'required|email',
                phone: 'required|max:10|min:10',
                dob: 'required',
                gender: 'required',
                present_status: 'required',
                selected_service: 'required',
                country_id: 'required',
            };
            const validation = new Validator(request.body(), rules);
            if (validation.fails()) {
                return response.badRequest(validation.errors.errors);
            }
            const data = request.only([
                'first_name',
                'last_name',
                'email',
                'phone',
                'alternate_phone',
                'dob',
                'gender',
                'passport_no',
                'present_status',
                'selected_service',
                'notes',
                'country_id',
            ]);
            const images = [];
            if (request.files('images')) {
                const docs = request.files('images', {
                    size: '5mb',
                    extnames: ['pdf', 'png', 'jpeg', 'jpg'],
                });
                for (let i = 0; i < docs.length; i++) {
                    if (docs[i].isValid) {
                        const fileName = `${(0, Helpers_1.cuid)()}.${docs[i].extname}`;
                        await docs[i].move(Application_1.default.tmpPath('uploads'), {
                            name: fileName,
                        });
                        let url = await (0, upload_1.toS3)(Application_1.default.tmpPath('uploads') + '/' + fileName);
                        images.push({ label: JSON.parse(request.body().labels)[i], url: url });
                    }
                }
            }
            if (images.length) {
                data['images'] = images;
            }
            let additionalservice = new AdditionalService_1.default();
            for (let [key, value] of Object.entries(data)) {
                additionalservice[key] = value;
            }
            additionalservice.status = 'NOT_CONTACTED';
            await additionalservice.save();
            console.log('additionalservice');
            return response.json({ message: 'Additional Service Requsted Successfully' });
        }
        catch (exception) {
            console.log(exception);
            return response.internalServerError({ message: exception.message });
        }
    }
    async store(ctx) {
        return this.save(ctx);
    }
    async update(ctx) {
        const { additionalservice } = ctx.request;
        return this.save(ctx, additionalservice);
    }
    async save({ request, response, auth }, record = null) {
        try {
            const data = request.only([
                'first_name',
                'last_name',
                'email',
                'phone',
                'alternate_phone',
                'dob',
                'gender',
                'passport_no',
                'present_status',
                'selected_service',
                'notes',
                'country_id',
            ]);
            const rules = {
                first_name: 'required|max:200',
                last_name: 'required|max:200',
                email: 'required|email',
                phone: 'required|max:10|min:10',
                dob: 'required',
                gender: 'required',
                present_status: 'required',
                selected_service: 'required',
                country_id: 'required',
            };
            const validation = new Validator(request.all(), rules);
            if (validation.fails()) {
                return response.badRequest(validation.errors.errors);
            }
            let images = [];
            if (request.files('images')) {
                const docs = request.files('images', {
                    size: '5mb',
                    extnames: ['pdf', 'png', 'jpeg', 'jpg'],
                });
                for (let i = 0; i < docs.length; i++) {
                    if (docs[i].isValid) {
                        const fileName = `${(0, Helpers_1.cuid)()}.${docs[i].extname}`;
                        await docs[i].move(Application_1.default.tmpPath('uploads'), {
                            name: fileName,
                        });
                        let url = await (0, upload_1.toS3)(Application_1.default.tmpPath('uploads') + '/' + fileName);
                        images.push({ label: JSON.parse(request.body().labels)[i], url: url });
                    }
                }
            }
            if (images.length) {
                data['images'] = images;
            }
            if (request.body().old_files && record) {
                let old_files = JSON.parse(request.body().old_files);
                data['images'] = [
                    ...(Array.isArray(data['images']) ? data['images'] : []),
                    ...old_files,
                ];
            }
            if (record && !request.body().old_files) {
                data['images'] = images.length ? images : [];
            }
            let additionalservice = record;
            if (record === null) {
                additionalservice = new AdditionalService_1.default();
            }
            for (let [key, value] of Object.entries(data)) {
                additionalservice[key] = value;
            }
            await additionalservice.save();
            if (record) {
                await additionalservice.log(auth.user, {
                    message: `updated the user details`,
                    type: 'ACTION',
                });
            }
            return response.json({ message: `AddOn  ${record ? 'Updated' : 'Created'} Successfully` });
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async show({ request, response }) {
        try {
            let additionalservice = await AdditionalService_1.default.query()
                .preload('country', (query) => {
                query.select('name');
            })
                .where('id', request.param('id'))
                .first();
            if (!additionalservice) {
                return response.notFound({ message: `User Not Found` });
            }
            if (request.qs().fetch_logs) {
                additionalservice.logs = await additionalservice.getLogs();
            }
            return response.json(additionalservice);
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async updateStatus({ request, response, auth }) {
        try {
            const additionalservice = request.additionalservice;
            const data = request.only(['status', 'call_back_time', 'notes']);
            const rules = {
                status: 'required',
                notes: 'required|max:500',
            };
            if (data.status === 'CALL_BACK') {
                rules['call_back_time'] = 'required|date';
            }
            const validation = new Validator(data, rules);
            if (validation.fails()) {
                return response.badRequest(validation.errors.errors);
            }
            additionalservice.status = data.status;
            if (data.call_back_time) {
                additionalservice.call_back_time = (0, moment_1.default)(data.call_back_time)
                    .utcOffset('+05:30')
                    .format('YYYY-MM-DD HH:mm:ss');
            }
            await additionalservice.save();
            await Promise.all([
                additionalservice.log(auth.user, { message: data.notes, type: 'NOTE' }),
                additionalservice.log(auth.user, {
                    message: `<strong>${auth.user.name}</strong> modified the status to <span>${data.status}</span>`,
                    type: 'STATUS',
                }),
            ]);
            return response.json({ message: `Status changed to ${additionalservice.status}` });
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async destroy({ request, response }) {
        try {
            const { additionalservice } = request;
            if (additionalservice.deleted_at) {
                return response.notFound({ message: `AddOn Deleted Already!` });
            }
            additionalservice['deleted_at'] = (0, moment_1.default)().utcOffset('+05:30').format('YYYY-MM-DD HH:mm:ss');
            await additionalservice.save();
            return response.json({ message: 'AddOn Deleted Successfully' });
        }
        catch (exception) {
            console.log(exception);
            return response.internalServerError({ message: exception.message });
        }
    }
    async statistics({ request, response }) {
        try {
            const stats = await AdditionalService_1.default.stats(request);
            return response.send({
                status: true,
                message: 'Stats information',
                data: {
                    total_leads: stats.total_leads || 0,
                    contacted: stats.contacted || 0,
                    not_contacted: stats.not_contacted || 0,
                    in_progress: stats.in_progress || 0,
                    completed: stats.completed || 0,
                },
            });
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
}
exports.default = AdditionalServiceController;
//# sourceMappingURL=AdditionalServiceController.js.map