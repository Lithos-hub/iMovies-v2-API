import { NextFunction, Request, Response } from "express";
import { ExtendedRequest } from "../interfaces/request.interface";
import handleHttp from "../utils/error.handle";
import { verifyToken } from "../utils/jwt.handle";
import store from "store2";

const checkJwt = (req: ExtendedRequest, res: Response, next: NextFunction) => {
  try {
    if (!req.headers.authorization) {
      handleHttp(res, "NOT_TOKEN", 401);
      return;
    }
    const jwtByUser = req.headers.authorization || "";
    const token = jwtByUser.split(" ").pop(); // => remove 'bearer' from the token string
    const dataToken = verifyToken(String(token)) as { _id: string };

    if (!dataToken._id) {
      handleHttp(res, "ERROR_ID_TOKEN", 401);
      return;
    }
    store.set(String(dataToken._id), token);

    req.user = dataToken;
    next();
  } catch (error) {
    handleHttp(res, "INVALID_SESSION_JWT", 401);
  }
};

const checkStoreToken = (
  { params, headers }: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = headers.authorization?.split(" ").pop() as string;
    const { id } = params;
    const correctToken = verifyToken(token);

    if (!correctToken) throw new Error("INVALID_TOKEN");

    const matchTokens = token === store.get(String(id));
    if (matchTokens) next();
  } catch (err) {
    handleHttp(res, "INVALID_MATCH_TOKEN", 403);
  }
};

export { checkJwt, checkStoreToken };
