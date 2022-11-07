import { Router } from "express";
import {
  getMovies,
  getMovie,
  deleteMovie,
  postMovie,
  updateMovie,
} from "../controllers/movies.controller";
import { logMiddleware } from "../middlewares/log.middleware";

const router = Router();

router.get("/", logMiddleware, getMovies);
router.get("/:id", getMovie);
router.put("/:id", updateMovie);
router.post("/", postMovie);
router.delete("/:id", deleteMovie);

export { router };
