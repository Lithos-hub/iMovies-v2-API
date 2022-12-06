import { ObjectId } from "mongoose";

export interface MoviesData {
  userId: ObjectId;
  id: number;
  category: string;
}
