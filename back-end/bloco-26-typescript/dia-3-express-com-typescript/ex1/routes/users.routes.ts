import { Router } from "express";
import UsersController from "../controllers/users.controller";
import validationUser from "../middlewares/users.middleware";

const router = Router();

const usersController = new UsersController();

router.get('/users', usersController.getAll);

router.post('/users', validationUser, usersController.create);

router.get('/users/:id', usersController.getById);

router.put('/users/:id', validationUser, usersController.update);

router.delete('/users/:id', usersController.remove);

export default router;
