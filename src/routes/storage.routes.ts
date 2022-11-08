import { Router } from "express";
import { getFile } from "../controllers/storage.controller";
import multerMiddleware from "../middlewares/file.middleware";
import { checkJwt } from "../middlewares/session.middleware";

const router = Router();

router.post("/", checkJwt, multerMiddleware.single("myfile"), getFile);

export { router };
