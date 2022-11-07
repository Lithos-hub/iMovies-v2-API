import { Movie } from "../interfaces/movie.interface";
import MovieModel from "../models/movie.model";

const getMovies = async () => await MovieModel.find({});
const getMovie = async (id: string) => await MovieModel.findById(id);
const postMovie = async (movie: Movie) => await MovieModel.create(movie);
const updateMovie = async (id: string, data: Movie) => {
  return await MovieModel.findOneAndUpdate(
    {
      _id: id,
    },
    data,
    {
      new: true,
    }
  );
};
const deleteMovie = async (id: string) =>
  await MovieModel.findByIdAndDelete(id);

export { getMovies, getMovie, postMovie, updateMovie, deleteMovie };
