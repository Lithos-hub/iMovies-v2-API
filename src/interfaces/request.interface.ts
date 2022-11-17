import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export interface ExtendedRequest extends Request {
  user?: JwtPayload | { _id: string };
}
