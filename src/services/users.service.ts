import { User } from "../interfaces/user.interface";
import UserModel from "../models/user.model";

const getUsers = async () => {
  const response = await UserModel.find({});
  return response.map(({ _id, birthday, name }) => {
    return {
      _id,
      birthday,
      name,
    };
  });
};
const getUser = async (id: string): Promise<any> => {
  return (await UserModel.findById(id)) || "NOT_FOUND";
};
const updateUser = async (id: string, data: User) => {
  return await UserModel.findOneAndUpdate(
    {
      _id: id,
    },
    data,
    {
      new: true,
    }
  );
};
const deleteUser = async (id: string) => await UserModel.findByIdAndDelete(id);

export { getUsers, getUser, updateUser, deleteUser };
