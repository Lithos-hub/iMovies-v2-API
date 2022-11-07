import { NextFunction, Request, Response } from "express";

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log(`LOG - ${req.headers["user-agent"]}`);
  next();
};

export { logMiddleware };
