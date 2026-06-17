"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Feedback_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Feedback"));
const Student_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Student"));
const Validator = require('validatorjs');
class FeedbackController {
    async index({ request, response }) {
        try {
            const list = await Feedback_1.default.listing(request);
            return response.send(list);
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async checkFeedBackStatus({ response, auth }) {
        let user = auth.user;
        let student = await Student_1.default.query().where('user_id', user.id).first();
        if (!student) {
            return response.notFound({ message: `student not found.` });
        }
        let exists = await Feedback_1.default.findBy('student_id', student.id);
        return response.send({ status: exists ? 'disabled' : 'enabled' });
    }
    async createOrUpdateFeedback({ request, response, auth }) {
        const rules = {
            rating: 'required',
            feedback: 'required|max:1000',
        };
        const validation = new Validator(request.all(), rules);
        if (validation.fails()) {
            return response.badRequest(validation.errors.errors);
        }
        let user = auth.user;
        let student = await Student_1.default.query().where('user_id', user.id).first();
        if (!student) {
            return response.notFound({ message: `student not found.` });
        }
        const payload = request.body();
        const searchCriteria = {
            student_id: student.id,
        };
        const savePayload = {
            student_id: student.id,
            rating: payload.rating,
            feedback: payload.feedback,
        };
        await Feedback_1.default.updateOrCreate(searchCriteria, savePayload);
        return response.json({ status: 'disabled' });
    }
}
exports.default = FeedbackController;
//# sourceMappingURL=FeedbackController.js.map