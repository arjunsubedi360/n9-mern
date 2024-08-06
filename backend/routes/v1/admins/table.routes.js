import { Router } from "express";
import { createTable, getTable, updateTable } from "../../../controllers/index.js"; // Importing from the index.js of controllers

const router = Router();

router.post("/", createTable);
router.get("/:slug", getTable);
router.put("/:slug", updateTable); //update



export default router;
