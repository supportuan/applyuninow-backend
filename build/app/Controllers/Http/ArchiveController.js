"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AdditionalService_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/AdditionalService"));
const Chat_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Chat"));
const ContactRequest_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/ContactRequest"));
const Feedback_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Feedback"));
const Log_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Log"));
const Notification_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Notification"));
const Resource_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Resource"));
const Student_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Student"));
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
const UserPayslip_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/UserPayslip"));
const UserSession_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/UserSession"));
class ArchiveController {
    async leadsList({ request, response }) {
        try {
            const leads = await ContactRequest_1.default.archiveListing(request);
            return response.json(leads);
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async restoreLead({ request, response }) {
        try {
            let lead = await ContactRequest_1.default.find(request.body().id);
            if (!lead) {
                return response.notFound({ message: `Lead not found.` });
            }
            lead.deleted_at = null;
            await lead.save();
            return response.json({ message: 'Lead Restored Successfully!' });
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async deleteLead({ request, response }) {
        try {
            await Student_1.default.query().where('lead_id', request.body().id).update({ lead_id: null });
            await ContactRequest_1.default.query().where('id', request.body().id).delete();
            return response.json({ message: 'Lead Deleted Successfully!' });
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async restoreAddOn({ request, response }) {
        try {
            let addon = await AdditionalService_1.default.find(request.body().id);
            if (!addon) {
                return response.notFound({ message: `AddOn not found.` });
            }
            addon.deleted_at = null;
            await addon.save();
            return response.json({ message: 'AddOn Restored Successfully!' });
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async deleteAddOn({ request, response }) {
        try {
            await AdditionalService_1.default.query().where('id', request.body().id).delete();
            return response.json({ message: 'AddOn Deleted Successfully!' });
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async addOnList({ request, response }) {
        try {
            const addOn = await AdditionalService_1.default.archiveListing(request);
            return response.json(addOn);
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async applicationList({ request, response, auth }) {
        try {
            let user = await User_1.default.query()
                .where('id', auth.user.id)
                .preload('role')
                .first()
                .then((x) => x?.serialize());
            const leads = await Student_1.default.archiveListing(request, user);
            return response.json(leads);
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async restoreApplication({ request, response }) {
        try {
            let student = await Student_1.default.find(request.body().id);
            if (!student) {
                return response.notFound({ message: `Applcation not found.` });
            }
            let exists = await Student_1.default.query()
                .where('id', '!=', student.id)
                .where('email', student.email)
                .whereNull('deleted_at')
                .first();
            if (exists) {
                return response.notFound({ message: `you cannot restore. Student already existing with the same email.` });
            }
            student.deleted_at = null;
            await User_1.default.query().where('email', student.email).where('active', 0).update({
                deleted_at: null,
                active: 1
            });
            await student.save();
            return response.json({ message: 'Applcation Restored Successfully!' });
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async deleteApplication({ request, response }) {
        try {
            let student = await Student_1.default.query().where('id', request.body().id).first();
            if (!student) {
                return response.notFound({ message: `Applcation not found.` });
            }
            await student?.related('checklist').detach();
            await student?.related('universities').detach();
            await Chat_1.default.query().where('application_id', student?.id).delete();
            await Log_1.default.query().where('user_id', student.user_id).delete();
            await Feedback_1.default.query().where('student_id', student.id).delete();
            await student?.delete();
            await Notification_1.default.query().where('receiver_id', student.user_id).delete();
            await UserSession_1.default.query().where('user_id', student.user_id).delete();
            await UserPayslip_1.default.query().where('user_id', student.user_id).delete();
            await User_1.default.query().where('id', student.user_id).delete();
            return response.json({ message: 'Application Deleted Successfully!' });
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async usersList({ request, response }) {
        try {
            const users = await User_1.default.archiveListing(request);
            return response.json(users);
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async restoreUser({ request, response }) {
        try {
            let user = await User_1.default.find(request.body().id);
            if (!user) {
                return response.notFound({ message: `User not found.` });
            }
            let exists = await User_1.default.query()
                .where('email', user.email)
                .where('id', '!=', user.id)
                .whereNull('deleted_at').first();
            if (exists) {
                return response.notFound({ message: `you cannot restore. User already existing with the same email.` });
            }
            user.deleted_at = null;
            await user.save();
            return response.json({ message: 'User Restored Successfully!' });
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async deleteUser({ request, response }) {
        try {
            let user = await User_1.default.query().where('id', request.body().id).first();
            if (!user) {
                return response.notFound({ message: `User not found.` });
            }
            await Student_1.default.query().where('contact_id', user.id).update('contact_id', null);
            await ContactRequest_1.default.query().where('assigned_to', user.id).update('assigned_to', null);
            await Notification_1.default.query().where('receiver_id', user.id).delete();
            await UserSession_1.default.query().where('user_id', user.id).delete();
            await UserPayslip_1.default.query().where('user_id', user.id).delete();
            await Log_1.default.query().where('user_id', user.id).delete();
            await user.delete();
            return response.json({ message: 'User Deleted Successfully!' });
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async resourcesList({ request, response }) {
        try {
            const leads = await Resource_1.default.deleteFiles(request);
            return response.json(leads);
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async restoreResource({ request, response }) {
        try {
            let resource = await Resource_1.default.find(request.body().id);
            if (!resource) {
                return response.notFound({ message: `Resource not found.` });
            }
            resource.deleted_at = null;
            await resource.save();
            return response.json({ message: 'Resource Restored Successfully!' });
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async deleteResource({ request, response }) {
        try {
            await Resource_1.default.query().where('id', request.body().id).delete();
            return response.json({ message: 'Resource Deleted Successfully!' });
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
}
exports.default = ArchiveController;
//# sourceMappingURL=ArchiveController.js.map