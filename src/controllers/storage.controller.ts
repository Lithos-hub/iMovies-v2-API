import { Request, Response } from "express";
import { ExtendedRequest } from "../interfaces/request.interface";
import { Storage } from "../interfaces/storage.interface";
import { uploadFile, getFileByName } from "../services/storage.service";
import handleHttp from "../utils/error.handle";

const postFile = async ({ user, file }: ExtendedRequest, res: Response) => {
  try {
    const response: Storage = await uploadFile({
      fileName: String(file?.filename),
      idUser: String(user?._id),
      path: String(file?.path),
    });
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_GET_FILE", 500, error);
  }
};
const getFile = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getFileByName(id);
    res.send(response || "NOT_FOUND");
  } catch (error) {
    handleHttp(res, "ERROR_GET_USER", 500, error);
  }
};
export { postFile, getFile };
