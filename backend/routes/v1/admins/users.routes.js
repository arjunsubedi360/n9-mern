import { Router } from "express";
import { createUser } from "../../../controllers/index.js"; // Importing from the index.js of controllers

const router = Router();

router.post("/", createUser);



export default router;
