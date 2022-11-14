import { Request, Response } from "express";

import { registerUser, loginUser } from "../services/auth.service";

const signUp = async ({ body }: Request, res: Response) => {
  const response = await registerUser(body);
  if (response === "USER_ALREADY_EXISTS") {
    res.status(401);
    res.send(new Error(response));
  } else {
    res.send(response);
  }
};

const signIn = async ({ body }: Request, res: Response) => {
  const response = await loginUser(body);

  if (response === "INCORRECT_PASSWORD OR USER_NOT_FOUND") {
    res.status(406);
    res.send(new Error(response));
  } else {
    res.send(response);
  }
};

export { signUp, signIn };
