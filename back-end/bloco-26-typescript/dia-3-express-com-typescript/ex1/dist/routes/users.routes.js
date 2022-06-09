"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = __importDefault(require("../controllers/users.controller"));
const users_middleware_1 = __importDefault(require("../middlewares/users.middleware"));
const router = (0, express_1.Router)();
const usersController = new users_controller_1.default();
router.get('/users', usersController.getAll);
router.post('/users', users_middleware_1.default, usersController.create);
router.get('/users/:id', usersController.getById);
router.put('/users/:id', users_middleware_1.default, usersController.update);
router.delete('/users/:id', usersController.remove);
exports.default = router;
