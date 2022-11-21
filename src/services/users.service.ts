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
const getUser = async (id: string): Promise<any> => {
  return (await UserModel.findById(id)) || "NOT_FOUND";
};
const updateUser = async (id: string, data: User) => {
  let password;
  let dataToSend = {
    ...data,
  };
  if (data.password) {
    password = await encrypt(data.password);
    dataToSend.password = password;
  }
  await UserModel.findOneAndUpdate(
    {
      _id: id,
    },
    dataToSend,
    {
      new: true,
    }
  );
  const userAlreadyExists = await checkUserAlreadyExists(id);
  if (userAlreadyExists) {
    const { _id, name, dateOfBirth, email, createdAt, avatar } =
      userAlreadyExists;
    return {
      token: genToken(userAlreadyExists["_id"]),
      user: {
        _id,
        name,
        dateOfBirth,
        email,
        createdAt,
        avatar,
      },
    };
  }
};
const deleteUser = async (id: string) => await UserModel.findByIdAndDelete(id);

export { getUsers, getUser, updateUser, deleteUser };
