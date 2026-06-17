"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StudySubIndustry_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/StudySubIndustry"));
const moment_1 = __importDefault(require("moment"));
const Validator = require('validatorjs');
class StudySubIndustryController {
    async index({ request, response }) {
        try {
            const studyList = await StudySubIndustry_1.default.listing(request);
            return response.json(studyList);
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async store(ctx) {
        return this.save(ctx);
    }
    async update(ctx) {
        const { studysubindustry } = ctx.request;
        return this.save(ctx, studysubindustry);
    }
    async save({ request, response }, record = null) {
        const data = request.only(['name', 'industry_id']);
        const rules = {
            name: 'required|max:200',
        };
        const validation = new Validator(request.all(), rules);
        if (validation.fails()) {
            return response.badRequest(validation.errors.errors);
        }
        let studysubindustry = record;
        if (record === null) {
            studysubindustry = new StudySubIndustry_1.default();
        }
        const existingRecord = await StudySubIndustry_1.default.query()
            .where('name', data.name.trim())
            .whereNull('deleted_at')
            .where('industry_id', data.industry_id)
            .first();
        if (existingRecord && existingRecord.id !== studysubindustry.id) {
            if (existingRecord.name.toLowerCase() === data.name.toLowerCase()) {
                return response.badRequest({ message: ' StudyArea already exists.' });
            }
        }
        for (let [key, value] of Object.entries(data)) {
            studysubindustry[key] = value;
        }
        await studysubindustry.save();
        await studysubindustry.preload('industry');
        return response.json(studysubindustry);
    }
    async show({ request, response }) {
        try {
            const { studysubindustry } = request;
            return response.json(studysubindustry);
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async destroy({ request, response }) {
        try {
            const { studysubindustry } = request;
            studysubindustry['deleted_at'] = (0, moment_1.default)().utcOffset('+05:30').format('YYYY-MM-DD HH:mm:ss');
            await studysubindustry.save();
            return response.json({ message: 'deleted Successfully' });
        }
        catch (exception) {
            console.log(exception);
            return response.internalServerError({ message: exception.message });
        }
    }
    async dropdown({ request, response }) {
        try {
            const list = await StudySubIndustry_1.default.dropdown(request.param('id'));
            return response.json(list);
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
}
exports.default = StudySubIndustryController;
//# sourceMappingURL=StudySubIndustryController.js.map