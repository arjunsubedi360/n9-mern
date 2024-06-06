import { Router } from "express";
import { createTable } from "../../../controllers/index.js"; // Importing from the index.js of controllers

const router = Router();

router.post("/", createTable);


export default router;
