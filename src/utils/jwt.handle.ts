import { sign, verify } from "jsonwebtoken";
import { ObjectId } from "mongodb";

const JWT_SECRET = process.env.JWT_SECRET || "token.000111";

const genToken = (id: ObjectId) =>
  sign({ id }, JWT_SECRET, {
    expiresIn: "1h",
  });

const verifyToken = (jwt: string) => verify(jwt, JWT_SECRET);

export { genToken, verifyToken };
