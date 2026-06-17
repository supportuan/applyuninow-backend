"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const corsConfig = {
    enabled: true,
    origin: (origin, _ctx) => {
        const allowedOrigins = [
            'http://localhost:3000',
            'http://localhost:3001',
            'http://13.201.133.37:3000',
            'http://13.201.133.37',
            'https://dev-demo.scube.me',
            'https://applyuninow.com',
            'https://www.applyuninow.com',
            'https://dev.applyuninow.com',
        ];
        if (process.env.FRONTEND_URL && process.env.FRONTEND_URL.trim() !== '') {
            allowedOrigins.push(process.env.FRONTEND_URL);
        }
        if (origin) {
            return allowedOrigins.includes(origin) ? true : false;
        }
        return allowedOrigins;
    },
    methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'PATCH'],
    headers: true,
    exposeHeaders: [
        'cache-control',
        'content-language',
        'content-type',
        'expires',
        'last-modified',
        'pragma',
    ],
    credentials: true,
    maxAge: 90,
};
exports.default = corsConfig;
//# sourceMappingURL=cors.js.map