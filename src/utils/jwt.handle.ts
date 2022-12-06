import { sign, verify } from "jsonwebtoken";
import { ObjectId } from "mongodb";

const JWT_SECRET = process.env.JWT_SECRET as string;

const genToken = (_id: ObjectId) =>
  sign({ _id }, JWT_SECRET, {
    expiresIn: 86400,
  });

const verifyToken = (jwt: string) => verify(jwt, JWT_SECRET);

export { genToken, verifyToken };
