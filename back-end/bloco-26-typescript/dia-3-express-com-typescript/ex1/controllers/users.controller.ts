import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import UserService from "../services/users.service";

class UsersController {
  constructor(private userService = new UserService()) { }

  public getAll = async (req: Request, res: Response) => {
    const users = await this.userService.getAll();
    res.status(StatusCodes.OK).json(users);
  };

  public getById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const user = await this.userService.getById(id);
    if (!user) return res.status(StatusCodes.NOT_FOUND).json({ message: 'User not found' });
    return res.status(StatusCodes.OK).json(user);
  }

  public create = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    const user = await this.userService.create({ name, email, password });
    return res.status(StatusCodes.CREATED).json(user);
  }

  public update = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const { name, email, password } = req.body;
    await this.userService.update(id, { name, email, password });
    return res.status(StatusCodes.NO_CONTENT).end();
  }

  public remove = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    await this.userService.remove(id);
    return res.status(StatusCodes.OK).json({ message: 'User deleted sucessfully' });
  }
}

export default UsersController;
