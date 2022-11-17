import { Schema, model } from "mongoose";
import { File } from "../interfaces/file.interface";

const FileSchema = new Schema<File>(
  {
    fileName: {
      type: String,
    },
    path: {
      type: String,
    },
    idUser: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const FileModel = model("File", FileSchema);

export default FileModel;
