"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StudyArea_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/StudyArea"));
const moment_1 = __importDefault(require("moment"));
const Validator = require('validatorjs');
class StudyAreaController {
    async index({ request, response }) {
        try {
            const studyAreaList = await StudyArea_1.default.listing(request);
            return response.json(studyAreaList);
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async store(ctx) {
        return this.save(ctx);
    }
    async update(ctx) {
        const { studyarea } = ctx.request;
        return this.save(ctx, studyarea);
    }
    async save({ request, response }, record = null) {
        const data = request.only(['name', 'industry_id', 'sub_industry_id']);
        const rules = {
            name: 'required|max:200',
        };
        const validation = new Validator(request.all(), rules);
        if (validation.fails()) {
            return response.badRequest(validation.errors.errors);
        }
        let studyarea = record;
        if (record === null) {
            studyarea = new StudyArea_1.default();
        }
        const existingRecord = await StudyArea_1.default.query()
            .where('name', data.name.trim())
            .where('industry_id', data.industry_id)
            .where('sub_industry_id', data.sub_industry_id)
            .whereNull('deleted_at')
            .first();
        if (existingRecord && existingRecord.id !== studyarea.id) {
            if (existingRecord.name.toLowerCase() === data.name.toLowerCase()) {
                return response.badRequest({ message: ' StudySubject already exists.' });
            }
        }
        for (let [key, value] of Object.entries(data)) {
            studyarea[key] = value;
        }
        await studyarea.save();
        studyarea = await studyarea.load('sub_industry');
        return response.json(studyarea);
    }
    async show({ request, response }) {
        try {
            const { studyarea } = request;
            return response.json(studyarea);
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async destroy({ request, response }) {
        try {
            const { studyarea } = request;
            studyarea.deleted_at = (0, moment_1.default)().utcOffset('+05:30').format('YYYY-MM-DD HH:mm:ss');
            await studyarea.save();
            return response.json({ message: 'deleted Successfully' });
        }
        catch (exception) {
            console.log(exception);
            return response.internalServerError({ message: exception.message });
        }
    }
    async dropdown({ response }) {
        try {
            const users = await StudyArea_1.default.dropdown();
            return response.json(users);
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
}
exports.default = StudyAreaController;
//# sourceMappingURL=StudyAreaController.js.map