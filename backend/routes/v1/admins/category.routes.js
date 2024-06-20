import { Router } from "express";
import { createCategory, getCategory } from "../../../controllers/index.js"; // Importing from the index.js of controllers

const router = Router();

router.get("/:id", getCategory);
router.post("/", createCategory)

export default router;
