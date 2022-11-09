import { Router } from "express";
import { readdirSync } from "fs";
import "./guard";

const cleanFileName = (fileName: string) => fileName.split(".").shift();

const PATH_ROUTER = `${__dirname}`;
const router = Router();

readdirSync(PATH_ROUTER).forEach((filename) => {
  const cleanName = cleanFileName(filename);
  if (cleanName !== "index" && cleanName !== "guard") {
    import(`./${cleanName}.routes`).then((moduleRouter) => {
      router.use(`/api/v1/${cleanName}`, moduleRouter.router);
    });
  }
});

export default router;
