import multer, { diskStorage } from "multer";

const PATH_STORAGE = `${process.cwd()}/src/public`;

console.log("PATH STORAGE: ", PATH_STORAGE);

const storage = diskStorage({
  destination(_, __, cb: any) {
    cb(null, PATH_STORAGE);
  },
  filename(_, file: Express.Multer.File, cb: any) {
    const ext = file.originalname.split(".").pop();
    const fileNameRandom = `image-${Date.now()}.${ext}`;
    cb(null, fileNameRandom);
  },
});

const fileMiddleware = multer({ storage });

export default fileMiddleware;
