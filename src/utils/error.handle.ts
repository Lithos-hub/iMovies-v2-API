import { Response } from "express";

const handleHttp = (res: Response, error: string, status: number) => {
  res.status(status).send({ error, status });
};

export default handleHttp;
