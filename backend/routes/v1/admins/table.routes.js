import { Router } from "express";
import { createTable, getTable } from "../../../controllers/index.js"; // Importing from the index.js of controllers

const router = Router();

router.post("/", createTable);
router.get("/:slug", getTable);



export default router;
