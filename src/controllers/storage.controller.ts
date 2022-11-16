import { Response } from "express";
import { ExtendedRequest } from "../interfaces/request.interface";
import { Storage } from "../interfaces/storage.interface";
import { uploadFile } from "../services/storage.service";
import handleHttp from "../utils/error.handle";

const getFile = async ({ user, file }: ExtendedRequest, res: Response) => {
  try {
    const response: Storage = await uploadFile({
      fileName: String(file?.filename),
      idUser: String(user?.id),
      path: String(file?.path),
    });
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_GET_FILE", 500, error);
  }
};
export { getFile };
