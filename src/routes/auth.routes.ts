import { Router } from "express";
import { signUp, signIn, getSession } from "../controllers/auth.controller";
import { checkJwt } from "../middlewares/session.middleware";
import { validateSignUp, validateSignin } from "../validators/users.validator";

const router = Router();

router.post("/signup", validateSignUp, signUp);
router.post("/signin", validateSignin, signIn);
router.post("/session", checkJwt, getSession);

export { router };
