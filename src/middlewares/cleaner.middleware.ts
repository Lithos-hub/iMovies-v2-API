import { NextFunction, Response } from "express";
import fs from "fs";
import path from "path";
import { ExtendedRequest } from "../interfaces/request.interface";
import handleHttp from "../utils/error.handle";

const cleanImageDirectory = (
  { user }: ExtendedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const dir = `${process.cwd()}/src/public/${String(user?._id)}`;

    console.log("DIR TO CLEAN: ", dir);

    console.log("Dir files: ", fs.readdirSync(dir));
    if (fs.readdirSync(dir).length) {
      fs.readdirSync(dir).forEach((file) =>
        fs.unlinkSync(path.join(dir, file))
      );
    }
    next();
  } catch (err) {
    handleHttp(res, "INTERNAL_SERVER_ERROR", 500);
  }
};

export { cleanImageDirectory };
