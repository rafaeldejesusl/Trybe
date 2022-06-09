"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_status_codes_1 = require("http-status-codes");
require("express-async-errors");
const users_routes_1 = __importDefault(require("./routes/users.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 8000;
app.get('/', (req, res) => {
    res.status(http_status_codes_1.StatusCodes.OK).send('Express + TypeScript');
});
app.use(users_routes_1.default);
app.use((err, req, res, next) => {
    const { name, message, details } = err;
    console.log(`name: ${name}`);
    switch (name) {
        case 'ValidationError':
            res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({ message: details[0].message });
            break;
        case 'NotFoundError':
            res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({ message });
            break;
        case 'ConflictError':
            res.status(http_status_codes_1.StatusCodes.CONFLICT).json({ message });
            break;
        default:
            console.error(err);
            res.sendStatus(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR);
    }
    next();
});
app.listen(PORT, () => {
    console.log(`Escutando na porta ${PORT}`);
});
