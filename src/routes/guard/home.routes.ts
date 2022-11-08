import { Router } from "express";
import { getRoute } from "../../controllers/guard.controller";

const router = Router();

router.get("/", getRoute);

export { router };
