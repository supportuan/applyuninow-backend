"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validator = require('validatorjs');
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
const Application_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Application"));
const Helpers_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Helpers");
const upload_1 = global[Symbol.for('ioc.use')]("App/Helpers/upload");
const Resource_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Resource"));
const moment_1 = __importDefault(require("moment"));
class ResourceController {
    async index({ request, response }) {
        try {
            const list = await Resource_1.default.listing(request);
            return response.json(list);
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async create({ request, response }) {
        const rules = {
            name: 'required|max:200',
        };
        const validation = new Validator(request.body(), rules);
        if (validation.fails()) {
            return response.badRequest(validation.errors.errors);
        }
        const uploadSchema = Validator_1.schema.create({
            file: Validator_1.schema.file.optional({
                size: '10mb',
                extnames: ['jpeg', 'jpg', 'png', 'jfif'],
            }),
        });
        const payload = await request.validate({ schema: uploadSchema });
        let fileUrl = '';
        if (payload.file) {
            const fileName = `${(0, Helpers_1.cuid)()}.${payload.file.extname}`;
            await payload.file.move(Application_1.default.tmpPath('uploads'), {
                name: fileName,
            });
            fileUrl = await (0, upload_1.toS3)(Application_1.default.tmpPath('uploads') + '/' + fileName);
        }
        const body = request.body();
        body['slug'] = body.name.toLowerCase().replace(/\s/g, '-').replace(/\//g, '-');
        const resourceNameExists = await Resource_1.default.query()
            .where('name', body.slug)
            .whereNull('deleted_at')
            .first();
        if (resourceNameExists) {
            return response.badRequest({
                message: 'Resource name already exists',
            });
        }
        let resource = new Resource_1.default();
        resource.name = body.name;
        resource.folder_image = fileUrl;
        resource.user_type = request.qs().type;
        resource.is_folder = true;
        resource.slug = body.slug;
        await resource.save();
        return response.json(resource);
    }
    async update({ request, response }) {
        const { resource } = request;
        const rules = {
            name: 'required|max:200',
        };
        const validation = new Validator(request.body(), rules);
        if (validation.fails()) {
            return response.badRequest(validation.errors.errors);
        }
        const uploadSchema = Validator_1.schema.create({
            file: Validator_1.schema.file.optional({
                size: '10mb',
                extnames: ['jpeg', 'jpg', 'png', 'jfif'],
            }),
        });
        const payload = await request.validate({ schema: uploadSchema });
        let fileUrl = '';
        if (payload.file) {
            const fileName = `${(0, Helpers_1.cuid)()}.${payload.file.extname}`;
            await payload.file.move(Application_1.default.tmpPath('uploads'), {
                name: fileName,
            });
            fileUrl = await (0, upload_1.toS3)(Application_1.default.tmpPath('uploads') + '/' + fileName);
        }
        const body = request.body();
        if (!fileUrl) {
            resource.folder_image = body.image || '';
        }
        else {
            resource.folder_image = fileUrl;
        }
        body['slug'] = body.name.toLowerCase().replace(/\s/g, '-').replace(/\//g, '-');
        const resourceNameExists = await Resource_1.default.query()
            .where('name', body.slug)
            .whereNull('deleted_at')
            .first();
        if (resourceNameExists && resource.id != resourceNameExists.id) {
            return response.badRequest({
                message: 'Resource name already exists',
            });
        }
        resource.name = body.name;
        resource.user_type = body.type;
        resource.is_folder = true;
        resource.slug = body.slug;
        await resource.save();
        return response.json(resource);
    }
    async destroy({ request, response }) {
        try {
            const { resource } = request;
            resource['deleted_at'] = (0, moment_1.default)().utcOffset('+05:30').format('YYYY-MM-DD HH:mm:ss');
            await resource.save();
            return response.json({ message: 'deleted Successfully' });
        }
        catch (exception) {
            console.log(exception);
            return response.internalServerError({ message: exception.message });
        }
    }
    async subFileList({ request, response }) {
        try {
            const parent = await Resource_1.default.query()
                .where('slug', request.qs().slug)
                .whereNull('deleted_at')
                .first();
            if (!parent) {
                return response.badRequest({
                    message: 'Resource Folder Deleted! ',
                });
            }
            request.qs().parent_id = parent.id;
            const list = await Resource_1.default.subFileList(request);
            return response.json(list);
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async fileCreate({ request, response }) {
        const rules = {
            name: 'required|max:200',
        };
        const validation = new Validator(request.body(), rules);
        if (validation.fails()) {
            return response.badRequest(validation.errors.errors);
        }
        const uploadSchema = Validator_1.schema.create({
            file: Validator_1.schema.file.optional({
                size: '10mb',
                extnames: ['pdf'],
            }),
        });
        const body = request.body();
        const parent = await Resource_1.default.query().where('slug', body.slug).whereNull('deleted_at').first();
        if (!parent) {
            return response.badRequest({
                message: 'Resource Folder Deleted! ',
            });
        }
        const payload = await request.validate({ schema: uploadSchema });
        let fileUrl = '';
        if (payload.file) {
            const fileName = `${(0, Helpers_1.cuid)()}.${payload.file.extname}`;
            await payload.file.move(Application_1.default.tmpPath('uploads'), {
                name: fileName,
            });
            fileUrl = await (0, upload_1.toS3)(Application_1.default.tmpPath('uploads') + '/' + fileName);
        }
        let resource = new Resource_1.default();
        resource.name = body.name;
        resource.url = fileUrl;
        resource.user_type = request.qs().type;
        resource.is_folder = false;
        resource.slug = body.name.toLowerCase().replace(/\s/g, '-').replace(/\//g, '-') + 1;
        resource.parent_id = parent.id;
        await resource.save();
        return response.json(resource);
    }
    async fileDestroy({ request, response }) {
        try {
            const { resource } = request;
            resource['deleted_at'] = (0, moment_1.default)().utcOffset('+05:30').format('YYYY-MM-DD HH:mm:ss');
            await resource.save();
            return response.json({ message: 'deleted Successfully' });
        }
        catch (exception) {
            console.log(exception);
            return response.internalServerError({ message: exception.message });
        }
    }
}
exports.default = ResourceController;
//# sourceMappingURL=ResourceController.js.map