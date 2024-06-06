import { Router } from "express";
import { getUsers, createUser, getTables } from "../../../controllers/index.js"; // Importing from the index.js of controllers

const router = Router();

router.get("/", getTables);




export default router;
