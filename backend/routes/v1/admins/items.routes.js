import { Router } from "express";
import { createItems, deleteItems, getItems, updateItems } from "../../../controllers";

const router = Router();

router.post("/", createItems);
router.get("/:id", getItems);
router.put("/:id", updateItems); 
router.delete("/:id", deleteItems)



export default router;