// import { Router } from "express";

// const router = Router();

// import { signIn, signUp } from "../controllers/user.controller";

// router.post("/signup", signUp);
// router.post("/signin", signIn);

// export default router;

import { Request, Response, Router } from "express";
import { signUp, signIn } from "../controllers/auth.controller";

const router = Router();

router.post("/signup", signUp);
router.post("/signin", signIn);

export { router };
