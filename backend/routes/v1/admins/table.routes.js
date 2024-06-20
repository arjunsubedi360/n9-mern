import { Router } from "express";
import { createTable, deleteTable, getTable, updateTable } from "../../../controllers/index.js"; // Importing from the index.js of controllers

const router = Router();

router.post("/", createTable);
router.get("/:slug", getTable);
router.put("/:slug", updateTable); //update
router.delete("/:slug",deleteTable);


export default router;
