import { Request, Response, Router } from "express";
import handleHttp from "../utils/error.handle";

const router = Router();

const getUser = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_GET_USER", error);
  }
};
const getUsers = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_GET_USERS", error);
  }
};
const updateUser = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_PUT_USERS", error);
  }
};
const deleteUser = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_DELETE_USERS", error);
  }
};

export { getUser, getUsers, updateUser, deleteUser };
