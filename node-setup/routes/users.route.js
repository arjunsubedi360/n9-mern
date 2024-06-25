import { Router } from "express";
import {
  createSingleUser,
  updateSingleUser,
  getSingleUser,
  deleteSingleUser,
  getUsersList,
} from "../controllers/user.controller.js";

const router = Router();

router.post("/users", createSingleUser); //user create
router.get("/users", getUsersList); //get all users
router.get("/users/:id", getSingleUser); //user single get
router.put("/users/:id", updateSingleUser); // user update
router.delete("/users/:id", deleteSingleUser); //user delete

export default router;
