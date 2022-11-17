import { File } from "../interfaces/file.interface";
import FileModel from "../models/file.model";

const uploadFile = async ({ fileName, idUser, path }: File) => {
  return await FileModel.create({ fileName, idUser, path });
};

const getFileByName = async (name: string) =>
  await FileModel.findOne({ fileName: name });

export { uploadFile, getFileByName };
