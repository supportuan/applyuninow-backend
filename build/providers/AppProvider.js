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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const geoip_lite_1 = __importDefault(require("geoip-lite"));
const DeviceDetector = require("device-detector-js");
class AppProvider {
    constructor(app) {
        this.app = app;
    }
    register() {
    }
    async boot() {
        const HttpContext = this.app.container.use('Adonis/Core/HttpContext');
        HttpContext.getter('location', function location() {
            const nginxRealIp = this.request.header('x-forwarded-for');
            let ip = nginxRealIp || this.request.ip();
            return geoip_lite_1.default.lookup(ip);
        }, true);
        HttpContext.getter('device', function device() {
            const deviceDetector = new DeviceDetector();
            const UserAgent = this.request.header('User-Agent');
            return deviceDetector.parse(UserAgent || '');
        }, true);
        const Response = this.app.container.use('Adonis/Core/Response');
        Response.macro('json', function (data) {
            this.status(200).send({ status: true, data });
        });
        Response.macro('notFound', function (errors) {
            this.status(404).send({ status: false, errors });
        });
        Response.macro('badRequest', function (errors) {
            this.status(400).send({ status: false, errors });
        });
        Response.macro('unauthorized', function (errors) {
            this.status(401).send({ status: false, errors });
        });
        Response.macro('notAcceptable', function (errors) {
            this.status(406).send({ status: false, errors });
        });
        Response.macro('created', function (data = {}) {
            this.status(201).send({ status: true, data });
        });
        Response.macro('noContent', function (data = {}) {
            this.status(204).send({ status: true, data });
        });
        Response.macro('forbidden', function (data = {}) {
            this.status(403).send({ status: false, data });
        });
        Response.macro('internalServerError', function (data = {}) {
            this.status(500).send({ status: false, data });
        });
    }
    async ready() {
        await Promise.resolve().then(() => __importStar(require('../start/socket')));
    }
    async shutdown() {
    }
}
exports.default = AppProvider;
//# sourceMappingURL=AppProvider.js.map