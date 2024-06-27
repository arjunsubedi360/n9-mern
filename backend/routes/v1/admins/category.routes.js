import { Router } from "express";
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategory,
  updateCategory,
} from "../../../controllers/index.js"; // Importing from the index.js of controllers
import { validate } from "../../../middlewares/validation.js";
import { categorySchema } from "../../../validations/category.validation.js";
import exceptionHandler from "../../../middlewares/exceptionalHandler.js";
import { authentication } from "../../../middlewares/authentication.js";
import { authorization } from "../../../middlewares/authorization.js";

const router = Router();

router.post(
  "/",
  authentication, //1st
  authorization, //2nd
  validate(categorySchema),
  exceptionHandler(createCategory)
);
router.get("/:id", getCategory);
router.get("/", getCategories);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

export default router;
