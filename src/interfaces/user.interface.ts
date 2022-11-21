import { ObjectId } from "mongoose";
import { Auth } from "./auth.interface";

export interface User extends Auth {
  name: string;
  dateOfBirth: string;
  createdAt?: string;
  avatar?: string;
}

export interface LoginUser {
  _id: ObjectId;
  name: string;
  dateOfBirth: string;
  email: string;
  avatar: string;
  createdAt: string;
}

export interface UserPlusToken {
  token: string;
  user: LoginUser;
}
