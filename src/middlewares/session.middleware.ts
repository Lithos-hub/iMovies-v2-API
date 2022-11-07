import { NextFunction, Request, Response } from "express";
import { ExtendedRequest } from "../interfaces/request.interface";
import { verifyToken } from "../utils/jwt.handle";

const checkJwt = (req: ExtendedRequest, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || "";
    const jwt = jwtByUser.split(" ").pop();
    const isUser = verifyToken(String(jwt));
    if (isUser) {
      req.user = isUser;
      next();
    }
  } catch (error) {
    res.status(401);
    res.send("INVALID_SESSION");
  }
};

export { checkJwt };
