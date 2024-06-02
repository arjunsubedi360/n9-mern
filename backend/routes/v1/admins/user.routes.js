import { Router } from "express";
import { getUser } from "../../../controllers/index.js"; // Importing from the index.js of controllers

const router = Router();

router.get("/users", getUser);

export default router;
