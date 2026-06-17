"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Faq_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Faq"));
const Student_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Student"));
const moment_1 = __importDefault(require("moment"));
const Validator = require('validatorjs');
class FaqController {
    async index({ request, response }) {
        try {
            const list = await Faq_1.default.listing(request);
            return response.json(list);
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async countryWiseForStudent({ request, response, auth }) {
        try {
            let user = auth.user;
            let student = await Student_1.default.query().where('user_id', user.id).first();
            if (!student) {
                return response.notFound({ message: `student not found.` });
            }
            request.qs().country_id = student.country_id;
            const list = await Faq_1.default.listing(request);
            return response.json(list);
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async store(ctx) {
        return this.save(ctx);
    }
    async update(ctx) {
        const { faq } = ctx.request;
        return this.save(ctx, faq);
    }
    async save({ request, response, auth }, record = null) {
        try {
            const data = request.only(['solution', 'query', 'country_id']);
            const rules = {
                country_id: 'required',
                query: 'required|max:200',
                solution: 'required|max:5000',
            };
            const validation = new Validator(request.all(), rules);
            if (validation.fails()) {
                return response.badRequest(validation.errors.errors);
            }
            let faq = record;
            if (record === null) {
                faq = new Faq_1.default();
            }
            for (let [key, value] of Object.entries(data)) {
                faq[key] = value;
            }
            await faq.save();
            if (record) {
                await faq.log(auth.user, {
                    message: `updated the user details`,
                    type: 'ACTION',
                });
            }
            return response.json(faq);
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async destroy({ request, response }) {
        try {
            const { faq } = request;
            if (faq.deleted_at) {
                return response.notFound({ message: `AddOn Deleted Already!` });
            }
            faq['deleted_at'] = (0, moment_1.default)().utcOffset('+05:30').format('YYYY-MM-DD HH:mm:ss');
            await faq.save();
            return response.json({ message: 'FAQ Deleted Successfully' });
        }
        catch (exception) {
            console.log(exception);
            return response.internalServerError({ message: exception.message });
        }
    }
    async countryWiseFaqs({ request, response }) {
        try {
            const country_name = request?.requestBody?.country_name;
            const list = await Faq_1.default
                .query()
                .preload('country', (query) => {
                query.select('name');
            })
                .whereHas('country', (query) => {
                query.where('name', country_name);
            });
            return response.json(list);
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
}
exports.default = FaqController;
//# sourceMappingURL=FaqController.js.map