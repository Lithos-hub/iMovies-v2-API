import { Router } from "express";
import {
  deleteMovie,
  postMovie,
  getMoviesByUserId,
} from "../controllers/movies.controller";
import { checkJwt } from "../middlewares/session.middleware";

const router = Router();

router.get("/:id", getMoviesByUserId);
router.post("/favourite", checkJwt, postMovie);
router.post("/wishlist", checkJwt, postMovie);
router.delete("/favourite", checkJwt, deleteMovie);
router.delete("/wishlist", checkJwt, deleteMovie);

export { router };
