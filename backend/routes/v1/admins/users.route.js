import { Router } from "express";
import { userControllerGet } from "../../../controllers/users.controller.js";

const router = Router();

router.get("/users", userControllerGet);

export default router;
