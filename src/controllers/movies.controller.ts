import { Request, Response, Router } from "express";
import handleHttp from "../utils/error.handle";
import * as MovieServices from "../services/movies.service";

const getMovie = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await MovieServices.getMovie(id);
    res.send(response || "NOT_FOUND");
  } catch (error) {
    handleHttp(res, "ERROR_GET_MOVIE", error);
  }
};
const getMovies = async (req: Request, res: Response) => {
  try {
    const response = await MovieServices.getMovies();
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_GET_MOVIES", error);
  }
};
const postMovie = async ({ body }: Request, res: Response) => {
  try {
    const response = await MovieServices.postMovie(body);
    console.log(response);
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_POST_MOVIES", error);
  }
};
const updateMovie = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await MovieServices.updateMovie(id, body);
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_PUT_MOVIES", error);
  }
};
const deleteMovie = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await MovieServices.deleteMovie(id);
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_DELETE_MOVIES", error);
  }
};

export { getMovie, getMovies, postMovie, updateMovie, deleteMovie };
