import { Router } from "express";
import { getUsers, createUser } from "../../../controllers/index.js"; // Importing from the index.js of controllers

const router = Router();

router.get("/:id", getUsers);
router.post("/", createUser);


export default router;
