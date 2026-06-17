"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const University_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/University"));
const moment_1 = __importDefault(require("moment"));
const Validator = require('validatorjs');
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
const Application_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Application"));
const Helpers_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Helpers");
const upload_1 = global[Symbol.for('ioc.use')]("App/Helpers/upload");
class UniversityController {
    async index({ request, response }) {
        try {
            const users = await University_1.default.listing(request);
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
        const { university } = ctx.request;
        return this.save(ctx, university);
    }
    async save({ request, response }, record = null) {
        const data = request.only(['name', 'country_id', 'city', 'location']);
        const rules = {
            name: 'required|max:150',
            country_id: 'integer|required',
            location: 'string|max:100',
            city: 'string|max:100',
        };
        const validation = new Validator(request.all(), rules);
        if (validation.fails()) {
            return response.badRequest(validation.errors.errors);
        }
        const uploadSchema = Validator_1.schema.create({
            university_logo: Validator_1.schema.file.optional({
                size: '5mb',
                extnames: ['jpeg', 'jpg', 'png'],
            }),
        });
        const payload = await request.validate({ schema: uploadSchema });
        if (payload.university_logo) {
            const fileName = `${(0, Helpers_1.cuid)()}.${payload.university_logo.extname}`;
            await payload.university_logo.move(Application_1.default.tmpPath('uploads'), {
                name: fileName,
            });
            data['logo'] = await (0, upload_1.toS3)(Application_1.default.tmpPath('uploads') + '/' + fileName);
        }
        let university = record;
        if (record && !request.body().image && !data.logo) {
            data['logo'] = '';
        }
        if (record === null) {
            university = new University_1.default();
        }
        for (let [key, value] of Object.entries(data)) {
            university[key] = value;
        }
        await university.save();
        return response.json(university);
    }
    async show({ request, response }) {
        try {
            const { university } = request;
            return response.json(university);
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async destroy({ request, response }) {
        try {
            const { university } = request;
            university['deleted_at'] = (0, moment_1.default)().utcOffset('+05:30').format('YYYY-MM-DD HH:mm:ss');
            await university.save();
            return response.json({ message: 'deleted Successfully' });
        }
        catch (exception) {
            console.log(exception);
            return response.internalServerError({ message: exception.message });
        }
    }
    async dropdown({ request, response }) {
        try {
            const list = await University_1.default.dropdown(request.qs().country_id);
            return response.json(list);
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async city({ request, response }) {
        try {
            const list = await University_1.default.getCity(request.qs().country_id);
            return response.json(list);
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
}
exports.default = UniversityController;
//# sourceMappingURL=UniversityController.js.map