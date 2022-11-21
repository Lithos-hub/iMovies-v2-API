import { Router } from "express";
import { postFile, getFile } from "../controllers/file.controller";
import fileMiddleware from "../middlewares/file.middleware";
import { checkJwt } from "../middlewares/session.middleware";
import { cleanImageDirectory } from "../middlewares/cleaner.middleware";

const router = Router();

router.post(
  "/",
  checkJwt,
  cleanImageDirectory,
  fileMiddleware.single("file"),
  postFile
);
router.get("/:id", checkJwt, getFile);

export { router };
