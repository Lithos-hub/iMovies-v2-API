import { Response } from "express";

const handleHttp = (
  res: Response,
  error: string,
  status: number,
  errorRaw?: any
) => {
  res.status(status);
  res.send({ error });
};

export default handleHttp;
