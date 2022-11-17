import { Storage } from "../interfaces/storage.interface";
import StorageModel from "../models/storage.model";

const uploadFile = async ({ fileName, idUser, path }: Storage) => {
  return await StorageModel.create({ fileName, idUser, path });
};

const getFileByName = async (name: string) =>
  await StorageModel.findOne({ fileName: name });

export { uploadFile, getFileByName };
