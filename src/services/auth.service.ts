import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user.model";

import { encrypt, verified } from "../utils/bcrypt.handle";
import { genToken } from "../utils/jwt.handle";

const checkUserAlreadyExists = async (email: string) =>
  await UserModel.findOne({ email });

const registerUser = async ({ email, password, name, dateOfBirth }: User) => {
  const userAlreadyExists = await checkUserAlreadyExists(email);
  if (userAlreadyExists) return "USER_ALREADY_EXISTS";

  const encryptedPass: string = await encrypt(password);

  console.log("Encrypted pass: ", encryptedPass);

  return await UserModel.create({
    email,
    password: encryptedPass,
    name,
    dateOfBirth,
  });
};

const loginUser = async ({ email, password }: Auth) => {
  console.log(email, password);
  const userAlreadyExists = await checkUserAlreadyExists(email);
  const encryptedPass = userAlreadyExists?.password || "";
  const isCorrect =
    (await verified(password, encryptedPass as string)) && userAlreadyExists;
  console.log("User already exists? ", userAlreadyExists);
  console.log("isCorrect? ", await verified(password, encryptedPass));
  if (!isCorrect) {
    return "INCORRECT_PASSWORD OR USER_NOT_FOUND";
  } else {
    const { _id, name, dateOfBirth, email, createdAt } = userAlreadyExists;
    return {
      token: genToken(userAlreadyExists["_id"]),
      user: {
        _id,
        name,
        dateOfBirth,
        email,
        createdAt,
      },
    };
  }
};

export { registerUser, loginUser };
