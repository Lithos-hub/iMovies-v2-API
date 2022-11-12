import { Router } from "express";
import { signUp, signIn } from "../controllers/auth.controller";
import validateUser from "../validators/users.validator";

const router = Router();

router.post("/signup", validateUser, signUp);
router.post("/signin", signIn);

export { router };
