import { Schema, Types, model, Model } from "mongoose";
import { User } from "../interfaces/user.interface";

const UserSchema = new Schema<User>(
  {
    name: {
      required: true,
      type: String,
      trim: true,
    },
    password: {
      required: true,
      type: String,
      trim: true,
    },
    email: {
      required: true,
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
    },
    avatar: {
      required: false,
      type: String,
    },
    birthday: {
      required: false,
      type: String,
      default: "unknown",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const UserModel = model("User", UserSchema);

export default UserModel;
