import { Response } from "express";
import { ExtendedRequest } from "../interfaces/request.interface";

const getRoute = (req: ExtendedRequest, res: Response) => {
  res.send({
    data: "ACCESS_GRANTED",
    user: req.user,
  });
};

export { getRoute };
