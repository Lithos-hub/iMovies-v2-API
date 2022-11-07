import { Schema, Types, model, Model } from "mongoose";
import { Movie } from "../interfaces/movie.interface";

const MovieSchema = new Schema<Movie>(
  {
    movie_id: {
      type: Number,
    },
    title: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const MovieModel = model("movies", MovieSchema);

export default MovieModel;
