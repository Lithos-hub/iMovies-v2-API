// import { Request, Response } from "express";
// import jwt from "jsonwebtoken";
// import User, { IUser } from "../models/user";
// import config from "../config/config";

import { Request, Response } from "express";

// // ******************* TOKEN CREATION ******************* //

// const createToken = (user: IUser) =>
//   jwt.sign({ id: user.id, email: user.email }, config.jwSecret, {
//     expiresIn: 86400,
//   });

// // ******************* SIGNUP ******************* //

// export const signUp = async (
//   req: Request,
//   res: Response
// ): Promise<Response> => {
//   if (!req.body.email || !req.body.password) {
//     return res.status(400).json({ msg: "Email and password are required" });
//   }
//   const existingUser = await User.findOne({ email: req.body.email });
//   if (existingUser) {
//     return res.status(400).json({ msg: "The user already exists" });
//   }
//   const newUser = new User(req.body);
//   await newUser.save();

//   return res.status(201).json(newUser);
// };

// // ******************* SIGNIN ******************* //

// export const signIn = async (req: Request, res: Response) => {
//   if (!req.body.email || !req.body.password) {
//     return res.status(400).json({ msg: "Email and password are required" });
//   }

//   const existingUser = await User.findOne({ email: req.body.email });

//   if (!existingUser) {
//     return res.status(404).json({ msg: "The user does not exist" });
//   }

//   const isMatch = await existingUser.comparePassword(req.body.password);

//   if (isMatch) {
//     return res.status(200).json({ token: createToken(existingUser) });
//   }

//   return res.status(400).json({
//     msg: "Email or password are incorrect",
//   });
// };

import { registerUser, loginUser } from "../services/auth.service";

const signUp = async ({ body }: Request, res: Response) => {
  const response = await registerUser(body);
  res.send(response);
};

const signIn = async ({ body }: Request, res: Response) => {
  const response = await loginUser(body);

  if (response === "INCORRECT_PASSWORD") {
    res.status(403);
    res.send(response);
  } else {
    res.send(response);
  }
};

export { signUp, signIn };
