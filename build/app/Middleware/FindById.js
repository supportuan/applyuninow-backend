"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
class FindById {
    async handle({ request, response }, next, guards) {
        var _a;
        const model = guards;
        const { id } = request.params();
        const Instance = (await (_a = `../Models/${model}`, Promise.resolve().then(() => __importStar(require(_a))))).default;
        let record = await Instance.query().where('id', id).first();
        if (!record) {
            return response.notFound({ message: `${model} not found.` });
        }
        if (typeof record.getLogs === 'function' && request.method() === 'GET') {
            const logs = await record.getLogs();
            record.logs = logs;
        }
        if (model) {
            request[String(model).toLowerCase()] = record;
        }
        await next();
    }
}
exports.default = FindById;
//# sourceMappingURL=FindById.js.map