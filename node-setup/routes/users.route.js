import { Router } from "express";
import { getSingleUser,deleteSingleUser } from "../controllers/user.controller.js";

const router = Router()

router.get("/users/:id", getSingleUser);
router.delete("/users/:id",deleteSingleUser);

export default router;