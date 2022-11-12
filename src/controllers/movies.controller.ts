import { Request, Response } from "express";
import handleHttp from "../utils/error.handle";
import * as MovieServices from "../services/movies.service";

const getMovies = async (req: Request, res: Response) => {
  try {
    const response = await MovieServices.getMovies();
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_GET_MOVIES", 500, error);
  }
};
const postMovie = async ({ body }: Request, res: Response) => {
  try {
    const response = await MovieServices.postMovie(body);
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_POST_MOVIES", 500, error);
  }
};
const updateMovie = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await MovieServices.updateMovie(id, body);
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_PUT_MOVIES", 500, error);
  }
};
const deleteMovie = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await MovieServices.deleteMovie(id);
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_DELETE_MOVIES", 500, error);
  }
};

export { getMovies, postMovie, updateMovie, deleteMovie };
