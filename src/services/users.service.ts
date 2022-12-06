import { User } from "../interfaces/user.interface";
import UserModel from "../models/user.model";
import { encrypt } from "../utils/bcrypt.handle";
import { genToken } from "../utils/jwt.handle";

const checkUserAlreadyExists = async (_id: string) =>
  await UserModel.findOne({ _id });

const getUsers = async () => {
  const response = await UserModel.find({});
  return response.map(({ _id, dateOfBirth, name }) => {
    return {
      _id,
      dateOfBirth,
      name,
    };
  });
};
const getUser = async (_id: string): Promise<any> => {
  const response = (await UserModel.findById(_id)) || "NOT_FOUND";
  if (response !== "NOT_FOUND") {
    const { _id, name, createdAt, avatar, email, dateOfBirth } = response;
    return {
      _id,
      name,
      createdAt,
      avatar,
      email,
      dateOfBirth,
    };
  }
};
const updateUser = async (id: string, data: User) => {
  const userAlreadyExists = await checkUserAlreadyExists(id);

  if (userAlreadyExists) {
    const { _id } = userAlreadyExists;

    let encryptedPassword;
    let dataToSend = {
      ...data,
    };

    if (data.password) {
      encryptedPassword = await encrypt(data.password);
      dataToSend.password = encryptedPassword;
    }

    const update = await UserModel.findByIdAndUpdate(
      {
        _id,
      },
      dataToSend,
      {
        new: true,
      }
    );

    const { name, dateOfBirth, email, createdAt, avatar } = update as User;

    return {
      token: genToken(_id),
      user: {
        _id: id,
        name,
        dateOfBirth,
        email,
        createdAt,
        avatar,
      },
    };
  } else {
    return "USER_NOT_FOUND";
  }
};
const deleteUser = async (id: string) => await UserModel.findByIdAndDelete(id);

export { getUsers, getUser, updateUser, deleteUser };
