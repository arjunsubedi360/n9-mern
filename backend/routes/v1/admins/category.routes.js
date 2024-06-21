import { Router } from "express";
import {
  createCategory,
  deleteCategory,
  getCategory,
  updateCategory,
} from "../../../controllers/index.js"; // Importing from the index.js of controllers
import { validate } from "../../../middlewares/validation.js";
import { categorySchema } from "../../../validations/category.validation.js";
import exceptionHandler from "../../../middlewares/exceptionalHandler.js";

const router = Router();

router.post("/", validate(categorySchema), exceptionHandler(createCategory));
router.get("/:id", getCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);


export default router;
