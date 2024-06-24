import { HttpStatusEnum } from "../enums/status.enum.js";
import { getUser, deleteUser } from "../services/user.service.js";

const getSingleUser = (req, res) => {
  const id = req.params.id;
  const data = getUser(id);
  res.status(HttpStatusEnum.OK).json(data);
};
const deleteSingleUser = (req, res)=> {
  const { id } = req.params.id;
  const delData= deleteUser(id);
  res.status(HttpStatusEnum.OK).json(delData);}


export {getSingleUser,deleteSingleUser
}
