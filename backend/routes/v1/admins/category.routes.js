import { Router } from "express";
import { createCategory, getCategory } from "../../../controllers/index.js"; // Importing from the index.js of controllers
import { createCategory, getCategory } from "../../../controllers/index.js"; // Importing from the index.js of controllers

const router = Router();

router.post("/", createCategory);
router.get("/:name", getCategory);

export default router;
