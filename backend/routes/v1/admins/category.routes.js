import { Router } from "express";
import {
  createCategory,
  deleteCategory,
  getCategory,
  updateCategory,
} from "../../../controllers/index.js"; // Importing from the index.js of controllers
import { validate } from "../../../middlewares/validation.js";
import { categorySchema } from "../../../validations/category.validation.js";

const router = Router();

router.post("/", validate(categorySchema), createCategory);
router.get("/:id", getCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);


export default router;
