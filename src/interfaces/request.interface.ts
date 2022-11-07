import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export interface ExtendedRequest extends Request {
  user?: string | JwtPayload;
}
