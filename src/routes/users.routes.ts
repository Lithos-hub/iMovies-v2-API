import { Router } from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/users.controller";
import { checkJwt } from "../middlewares/session.middleware";

const router = Router();

router.get("/", checkJwt, getUsers);
router.get("/:id", checkJwt, getUser);
router.put("/:id", checkJwt, updateUser);
router.delete("/:id", checkJwt, deleteUser);

export { router };
