"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Page_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Page"));
class PageController {
    async index({ request, response }) {
        try {
            console.log(request.param('id'));
            console.log('sssssssssss');
            const pageDetail = await Page_1.default.query().where('page_slug', request.param('id')).first();
            return response.json(pageDetail);
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
}
exports.default = PageController;
//# sourceMappingURL=PageController.js.map