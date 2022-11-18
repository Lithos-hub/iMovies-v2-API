import { Request, Response } from "express";
import { ExtendedRequest } from "../interfaces/request.interface";
import { File } from "../interfaces/file.interface";
import { uploadFile, getFileByName } from "../services/file.service";
import handleHttp from "../utils/error.handle";

const postFile = async ({ user, file }: ExtendedRequest, res: Response) => {
  console.log("File: ", file);
  try {
    const response: File = await uploadFile({
      fileName: String(file?.filename),
      idUser: String(user?._id),
      path: String(file?.path),
      mimeType: String(file?.mimetype),
      size: Number(file?.size),
    });
    console.log("File response: ", response);
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
