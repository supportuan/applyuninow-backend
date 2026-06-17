"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StudyIndustry_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/StudyIndustry"));
const moment_1 = __importDefault(require("moment"));
const Validator = require('validatorjs');
class StudyIndustryController {
    async index({ request, response }) {
        try {
            const studyList = await StudyIndustry_1.default.listing(request);
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
        const { studyindustry } = ctx.request;
        return this.save(ctx, studyindustry);
    }
    async save({ request, response }, record = null) {
        const data = request.only(['name']);
        const rules = {
            name: 'required|max:200',
        };
        const validation = new Validator(request.all(), rules);
        if (validation.fails()) {
            return response.badRequest(validation.errors.errors);
        }
        let studyindustry = record;
        if (record === null) {
            studyindustry = new StudyIndustry_1.default();
        }
        const existingRecord = await StudyIndustry_1.default.query()
            .whereNull('deleted_at')
            .where('name', data.name.trim()).first();
        if (existingRecord && existingRecord.id !== studyindustry.id) {
            if (existingRecord.name.toLowerCase() === data.name.toLowerCase()) {
                return response.badRequest({ message: ' StudyIndustryName already exists.' });
            }
        }
        for (let [key, value] of Object.entries(data)) {
            studyindustry[key] = value;
        }
        await studyindustry.save();
        return response.json(studyindustry);
    }
    async show({ request, response }) {
        try {
            const { studyindustry } = request;
            return response.json(studyindustry);
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async destroy({ request, response }) {
        try {
            const { studyindustry } = request;
            studyindustry['deleted_at'] = (0, moment_1.default)().utcOffset('+05:30').format('YYYY-MM-DD HH:mm:ss');
            await studyindustry.save();
            return response.json({ message: 'deleted Successfully' });
        }
        catch (exception) {
            console.log(exception);
            return response.internalServerError({ message: exception.message });
        }
    }
    async dropdown({ response }) {
        try {
            const list = await StudyIndustry_1.default.dropdown();
            return response.json(list);
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
}
exports.default = StudyIndustryController;
//# sourceMappingURL=StudyIndustryController.js.map