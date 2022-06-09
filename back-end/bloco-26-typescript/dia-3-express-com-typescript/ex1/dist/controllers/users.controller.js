"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const users_service_1 = __importDefault(require("../services/users.service"));
class UsersController {
    constructor(userService = new users_service_1.default()) {
        this.userService = userService;
        this.getAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const users = yield this.userService.getAll();
            res.status(http_status_codes_1.StatusCodes.OK).json(users);
        });
        this.getById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            const user = yield this.userService.getById(id);
            if (!user)
                return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({ message: 'User not found' });
            return res.status(http_status_codes_1.StatusCodes.OK).json(user);
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { name, email, password } = req.body;
            const user = yield this.userService.create({ name, email, password });
            return res.status(http_status_codes_1.StatusCodes.CREATED).json(user);
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            const { name, email, password } = req.body;
            yield this.userService.update(id, { name, email, password });
            return res.status(http_status_codes_1.StatusCodes.NO_CONTENT).end();
        });
        this.remove = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            yield this.userService.remove(id);
            return res.status(http_status_codes_1.StatusCodes.OK).json({ message: 'User deleted sucessfully' });
        });
    }
}
exports.default = UsersController;
