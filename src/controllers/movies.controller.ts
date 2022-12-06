import { Request, Response } from "express";
import handleHttp from "../utils/error.handle";
import * as MovieServices from "../services/movies.service";
import { ExtendedRequest } from "../interfaces/request.interface";

const getMoviesByUserId = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await MovieServices.getMoviesByUserId(id);
    const mapped = response.map(({ category, id }) => {
      return {
        category,
        id,
      };
    });
    res.send(mapped);
  } catch (error) {
    handleHttp(res, "ERROR_GET_MOVIES_BY_ID", 500);
  }
};

const postMovie = async ({ user, body }: ExtendedRequest, res: Response) => {
  try {
    const userId = user?._id;
    const response = await MovieServices.postMovie({
      ...body,
      userId,
    });
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_POST_MOVIES", 500);
  }
};
const deleteMovie = async ({ user, body }: ExtendedRequest, res: Response) => {
  try {
    const userId = user?._id;
    const response = await MovieServices.deleteMovie({
      ...body,
      userId,
    });
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_DELETE_MOVIES", 500);
  }
};

export { getMoviesByUserId, postMovie, deleteMovie };
