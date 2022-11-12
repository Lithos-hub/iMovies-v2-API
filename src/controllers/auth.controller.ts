import { Request, Response } from "express";

import { registerUser, loginUser } from "../services/auth.service";

const signUp = async ({ body }: Request, res: Response) => {
  const response = await registerUser(body);
  console.log("Response: ", response);
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
