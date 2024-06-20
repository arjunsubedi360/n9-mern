import { HttpStatusEnum } from "../enums/status-enum.js";

export const notFound = (req, res) => {
  res.status(HttpStatusEnum.NOT_FOUND).json({ message: "Route does not exist" });
};
