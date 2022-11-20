import { Request, Response } from "express";
import handleHttp from "../utils/error.handle";
import * as UserService from "../services/users.service";

const getUser = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await UserService.getUser(id);
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_GET_USER", 500);
  }
};
const getUsers = async ({ user }: Request, res: Response) => {
  try {
    const response = await UserService.getUsers();
    res.send({ user, response });
  } catch (error) {
    handleHttp(res, "ERROR_GET_USERS", 500);
  }
};
const updateUser = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await UserService.updateUser(id, body);
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_PUT_USERS", 500);
  }
};
const deleteUser = (_: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_DELETE_USERS", 500);
  }
};

export { getUser, getUsers, updateUser, deleteUser };
