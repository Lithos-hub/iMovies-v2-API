import { Router } from "express";
import { getRoute } from "../../controllers/guard.controller";
import { checkJwt } from "../../middlewares/session.middleware";

const router = Router();

router.get("/", checkJwt, getRoute);

export { router };
