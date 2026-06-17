"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Chat_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Chat"));
const Student_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Student"));
const Validator = require('validatorjs');
const Ws_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Services/Ws"));
class ChatController {
    async index({ request, response, auth }) {
        try {
            if (auth.user.user_type == 3) {
                let student = await Student_1.default.findBy('user_id', auth.user.id);
                request.qs().student_id = student.id;
            }
            const list = await Chat_1.default.listing(request);
            return response.send(list);
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async store({ request, response, auth }) {
        const rules = {
            message: 'required|max:1000',
        };
        console.log(auth.user.user_type);
        if (auth.user.user_type != 3) {
            rules['student_id'] = 'required';
        }
        const validation = new Validator(request.all(), rules);
        if (validation.fails()) {
            return response.badRequest(validation.errors.errors);
        }
        const payload = request.body();
        let student = '';
        if (auth.user.user_type != 3) {
            student = await Student_1.default.find(payload.student_id);
        }
        else if (auth.user.user_type == 3) {
            student = await Student_1.default.findBy('user_id', auth.user.id);
        }
        if (!student) {
            return response.badRequest({ message: 'Invalid Application ID' });
        }
        let chat = await Chat_1.default.create({
            author_id: auth.user.id,
            message: payload.message,
            application_id: student.id,
        });
        await chat.load('author', (query) => {
            query.select('name');
        });
        Ws_1.default.io.emit('APPLICATION_INNER_CHAT', {
            application_id: student.id,
            meta: chat,
            application_user_id: student.user_id,
        });
        return response.send(chat);
    }
}
exports.default = ChatController;
//# sourceMappingURL=ChatController.js.map