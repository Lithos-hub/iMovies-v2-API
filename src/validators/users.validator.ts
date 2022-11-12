import { check } from "express-validator";
import { NextFunction, Request, Response } from "express";
import validate from "../utils/validator.handle";

const validateUser = [
  check("name").exists().trim().notEmpty(),
  check("email").exists().trim().notEmpty().isEmail(),
  check("password").exists().trim().notEmpty().isLength({ min: 8 }),
  check("birthday").exists().trim().notEmpty().isDate(),
  (req: Request, res: Response, next: NextFunction) => {
    validate(req, res, next);
  },
];

export default validateUser;
