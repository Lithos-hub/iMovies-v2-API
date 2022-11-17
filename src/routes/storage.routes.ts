import { Router } from "express";
import { postFile, getFile } from "../controllers/storage.controller";
import multerMiddleware from "../middlewares/file.middleware";
import { checkJwt } from "../middlewares/session.middleware";

const router = Router();

router.post("/", checkJwt, multerMiddleware.single("file"), postFile);
router.get("/:id", checkJwt, getFile);

export { router };
