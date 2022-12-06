import { ObjectId } from "mongodb";
import { Schema, model } from "mongoose";
import { MoviesData } from "../interfaces/movies.interface";

const moviesSchema = new Schema<MoviesData>(
  {
    userId: {
      type: ObjectId,
    },
    category: {
      type: String,
    },
    id: {
      type: Number,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const moviesModel = model("movies", moviesSchema);

export default moviesModel;
