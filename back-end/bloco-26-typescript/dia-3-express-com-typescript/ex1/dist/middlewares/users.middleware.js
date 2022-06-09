"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const properties = ['name', 'email', 'password'];
function validateProperties(user) {
    for (let i = 0; i < properties.length; i += 1) {
        if (!Object.prototype.hasOwnProperty.call(user, properties[i])) {
            return [false, properties[i]];
        }
    }
    return [true, null];
}
function validateValues(user) {
    const entries = Object.entries(user);
    for (let i = 0; i < entries.length; i += 1) {
        const [property, value] = entries[i];
        if (!value) {
            return [false, property];
        }
    }
    return [true, null];
}
function validationUser(req, res, next) {
    const user = req.body;
    let [valid, property] = validateProperties(user);
    if (!valid) {
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send(`O campo ${property} é obrigatório.`);
    }
    [valid, property] = validateValues(user);
    if (!valid) {
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send(`O campo ${property} não pode ser nulo ou vazio.`);
    }
    if (user.name.length < 3) {
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send('O campo name deve ter no mínimo 3 caracteres');
    }
    if (user.password.length < 6 || user.password.length > 12) {
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send('O campo password deve ter no mínimo 6 caracteres e no máximo 12 caracteres');
    }
    const emailRegex = /^[a-z0-9._-]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    if (!emailRegex.test(user.email)) {
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send('O campo email deve ter um formato válido');
    }
    next();
}
exports.default = validationUser;
