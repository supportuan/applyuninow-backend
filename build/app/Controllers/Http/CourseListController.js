"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CourseList_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/CourseList"));
class CourseListController {
    async courseCart({ request, response }) {
        try {
            const list = await CourseList_1.default.listing(request);
            return response.json(list);
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
}
exports.default = CourseListController;
//# sourceMappingURL=CourseListController.js.map