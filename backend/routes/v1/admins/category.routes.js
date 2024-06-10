import { Router } from "express";
import { getCategory } from "../../../controllers/index.js"; // Importing from the index.js of controllers

const router = Router();

router.get("/:id", getCategory);

export default router;
