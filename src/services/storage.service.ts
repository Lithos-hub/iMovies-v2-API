import { Storage } from "../interfaces/storage.interface";
import StorageModel from "../models/storage.model";

const registUpload = async ({ fileName, idUser, path }: Storage) =>
  await StorageModel.create({ fileName, idUser, path });

export { registUpload };
