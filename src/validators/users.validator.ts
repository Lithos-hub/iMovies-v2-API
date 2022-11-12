import { check } from "express-validator";
import { NextFunction, Request, Response } from "express";
import validate from "../utils/validator.handle";

const validateUser = [
  check("name").exists().notEmpty(),
  check("email").exists().notEmpty().isEmail(),
  check("password").exists().notEmpty().isLength({ min: 8 }),
  (req: Request, res: Response, next: NextFunction) => validate(req, res, next),
];

export default validateUser;
