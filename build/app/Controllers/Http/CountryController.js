"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Country_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Country"));
class CountryController {
    async index({ response }) {
        try {
            const users = await Country_1.default.dropdown();
            return response.json(users);
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
}
exports.default = CountryController;
//# sourceMappingURL=CountryController.js.map