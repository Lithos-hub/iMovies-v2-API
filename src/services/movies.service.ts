import { MoviesData } from "../interfaces/movies.interface";
import moviesModel from "../models/movies.model";

const getMoviesByUserId = async (userId: string) =>
  await moviesModel.find({ userId });

const postMovie = async (data: MoviesData) => {
  const userId = String(data.userId);
  await moviesModel.create({ ...data, userId });
};

const deleteMovie = async (data: MoviesData) => {
  const userId = String(data.userId);
  await moviesModel.findOneAndDelete({ ...data, userId });
};

export { getMoviesByUserId, postMovie, deleteMovie };
