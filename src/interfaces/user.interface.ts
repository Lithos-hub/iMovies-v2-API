import { ObjectId } from "mongoose";
import { Auth } from "./auth.interface";

export interface User extends Auth {
  name: string;
  birthday: string;
  createdAt?: string;
  avatar?: string;
}

export interface LoginUser {
  _id: ObjectId;
  name: string;
  birthday: string;
  email: string;
  avatar: string;
  createdAt: string;
}

export interface UserPlusToken {
  token: string;
  user: LoginUser;
}
