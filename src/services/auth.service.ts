import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user.model";

import { encrypt, verified } from "../utils/bcrypt.handle";
import { genToken } from "../utils/jwt.handle";

const checkUserAlreadyExists = async (email: string) =>
  await UserModel.findOne({ email });

const registerUser = async ({ email, password, name, birthday }: User) => {
  const userAlreadyExists = await checkUserAlreadyExists(email);
  if (userAlreadyExists) return "USER_ALREADY_EXISTS";

  const encryptedPass: string = await encrypt(password);

  return await UserModel.create({
    email,
    password: encryptedPass,
    name,
    birthday,
  });
};

const loginUser = async ({ email, password }: Auth) => {
  const userAlreadyExists = await checkUserAlreadyExists(email);
  const encryptedPass = userAlreadyExists?.password || "";
  const isCorrect =
    (await verified(password, encryptedPass as string)) && userAlreadyExists;
  if (!isCorrect) {
    return "INCORRECT_PASSWORD OR USER_NOT_FOUND";
  } else {
    const { _id, name, birthday, email, createdAt } = userAlreadyExists;
    return {
      token: genToken(userAlreadyExists["_id"]),
      user: {
        _id,
        name,
        birthday,
        email,
        createdAt,
      },
    };
  }
};

export { registerUser, loginUser };
