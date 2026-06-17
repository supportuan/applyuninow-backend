"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Ws_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Services/Ws"));
Ws_1.default.boot();
Ws_1.default.io.on('connection', (socket) => {
    socket.on('join', function (data) {
        socket.join(data.id);
    });
    socket.on('leave', function (data) {
        socket.leave(data.id);
    });
});
//# sourceMappingURL=socket.js.map