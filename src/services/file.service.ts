import { File } from "../interfaces/file.interface";
import FileModel from "../models/file.model";

const uploadFile = async ({ fileName, idUser, path, mimeType, size }: File) => {
  return await FileModel.create({ fileName, idUser, path, mimeType, size });
};

const getFileByName = async (name: string) =>
  await FileModel.findOne({ fileName: name });

export { uploadFile, getFileByName };
