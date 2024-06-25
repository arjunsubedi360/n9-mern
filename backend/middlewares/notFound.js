import { HttpStatusEnum } from "../enums/status-enum.js";

<<<<<<< HEAD
export const notFound = (req, res) => {
  res.status(HttpStatusEnum.NOT_FOUND).json({ message: "Route does not exist" });
};
=======
export function notFound(req, res) {
  res.status(HttpStatusEnum.NOT_FOUND).json({
    success: false,
    code: HttpStatusEnum.NOT_FOUND,
    message: "Not Found",
  });
}
>>>>>>> a7a95580f27e8e00908c80dcd96044232e10ee41
