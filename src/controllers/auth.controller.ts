import { Request, Response } from "express";

import { registerUser, loginUser } from "../services/auth.service";

const signUp = async ({ body }: Request, res: Response) => {
  const response = await registerUser(body);
  if (response === "USER_ALREADY_EXISTS") {
    res.status(401).json({ error: "The user already exists" });
  } else {
    res.send(response);
  }
};

const signIn = async ({ body }: Request, res: Response) => {
  const response = await loginUser(body);
  if (response === "INCORRECT_PASSWORD OR USER_NOT_FOUND") {
    res.status(406).json({ error: "Incorrect password or user not found" });
  } else {
    res.send(response);
  }
};

export { signUp, signIn };
