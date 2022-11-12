import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator/src/validation-result";

const validate = (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log("Validating: ", req);
    validationResult(req).throw();
    return next();
  } catch (error: any) {
    res.status(403);
    res.send({ errors: error.array() });
  }
};

export default validate;
