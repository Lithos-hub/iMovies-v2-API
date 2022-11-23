import { Router } from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/users.controller";
import { checkJwt, checkStoreToken } from "../middlewares/session.middleware";

const router = Router();

router.get("/", checkJwt, getUsers);
router.get("/:id", getUser);
router.put("/:id", checkStoreToken, updateUser);
router.delete("/:id", deleteUser);

export { router };
