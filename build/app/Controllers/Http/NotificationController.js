"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Notification_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Notification"));
class NotificationController {
    async index({ request, response, auth }) {
        try {
            const list = await Notification_1.default.listing(request, auth.user.id);
            const count = await Notification_1.default.query()
                .where('receiver_id', auth.user.id)
                .where('read', 0)
                .count('id as total')
                .first();
            return response.send({ data: list, count: count?.$extras.total });
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async clearAllNotifications({ response, auth }) {
        try {
            await Notification_1.default.query().where('receiver_id', auth.user.id).update('active', 0);
            return response.json({ message: 'Notification Cleared SuccessFully' });
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async markAsReadNotifications({ response, auth }) {
        try {
            await Notification_1.default.query().where('receiver_id', auth.user.id).update('read', 1);
            return response.json({ message: 'Notification Mark As Read SuccessFully.' });
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
}
exports.default = NotificationController;
//# sourceMappingURL=NotificationController.js.map