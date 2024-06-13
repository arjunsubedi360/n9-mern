import {
  createAdmin,
  getAdmin,
  getAdmins,
  deleteAdmin,
} from "../../../controllers/admin.controller.js";

import Router from "express";
const AdminRouter = Router();
AdminRouter.post("/Create", createAdmin);
AdminRouter.get("/admins", getAdmins);
AdminRouter.get("/admins/:id", getAdmin);
AdminRouter.delete("/admins/:id", deleteAdmin);
export default AdminRouter;
