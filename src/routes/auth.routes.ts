import { Router } from "express";
import { signUp, signIn } from "../controllers/auth.controller";
import { validateSignUp, validateSignin } from "../validators/users.validator";

const router = Router();

router.post("/signup", validateSignUp, signUp);
router.post("/signin", validateSignin, signIn);

export { router };
