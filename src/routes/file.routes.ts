import { Router } from "express";
import { postFile, getFile } from "../controllers/file.controller";
import fileMiddleware from "../middlewares/file.middleware";
import { checkJwt } from "../middlewares/session.middleware";

const router = Router();

router.post("/", checkJwt, fileMiddleware.single("file"), postFile);
router.get("/:id", checkJwt, getFile);

export { router };
