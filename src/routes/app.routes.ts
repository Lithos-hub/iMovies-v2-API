import { Router } from "express";
import { getRoute } from "../controllers/app.controller";
import { checkJwt } from "../middlewares/session.middleware";

const router = Router();

router.get("/home", checkJwt, getRoute);

export { router };
