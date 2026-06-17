"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Page_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Page"));
class PagesController {
    async index({ request, response }) {
        try {
            console.log(request.param('slug'));
            console.log('sssssssssss');
            const pageDetail = await Page_1.default.query().where('page_slug', request.param('slug')).first();
            return response.json(pageDetail);
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
}
exports.default = PagesController;
//# sourceMappingURL=PagesController.js.map