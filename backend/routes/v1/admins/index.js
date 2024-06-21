import { Router } from "express";
import UserRouter from "./user.routes.js";
import CategoryRouter from "./category.routes.js";
<<<<<<< HEAD
import TableRouter from "./table.routes.js";
import OrderRouter from "./order.routes.js";

=======
import TableRouter from './table.routes.js';
import MenuRouter from './menu.routes.js';
>>>>>>> 324f4fad88bc8af6f825e10d280719b3733081c2
const router = Router();

router.use("/users", UserRouter);
router.use("/categories", CategoryRouter);
router.use("/tables", TableRouter);
<<<<<<< HEAD
router.use("/orders", OrderRouter);
=======
router.use("/menus", MenuRouter);
>>>>>>> 324f4fad88bc8af6f825e10d280719b3733081c2

export default router;
