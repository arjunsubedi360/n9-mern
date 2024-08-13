import { Router } from "express";
import { validate } from "../../../middlewares/validate.js";
import { createUser } from "../../../validations/user.validations.js";
import { authentication } from "../../../middlewares/authentication.js";
import { authorization } from "../../../middlewares/authorization.js";
import { createSingleCategory, deleteSingleCategory, getCategoryList } from "../../../controllers/category.controllers.js";

const router = Router();

router.post(
  "/",
  // validate(createCategory), //TODO:: add validation
  // authentication,
  // authorization,
  createSingleCategory
);

router.delete(
  "/:id",
  // authentication,
  // authorization,
  deleteSingleCategory
);

router.get(
  "/",
  getCategoryList
);
export default router;
