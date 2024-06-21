import { Router } from "express";
import CategoryRouter from "./category.routes.js";

import TableRouter from "./table.routes.js";
import UserRouter from "./user.router.js"


import TableRouter from './table.routes.js';
import MenuRouter from './menu.routes.js';

const router = Router();

router.use("/categories", CategoryRouter);
router.use("/tables", TableRouter);

router.use("/users",UserRouter)

router.use("/menus", MenuRouter);


export default router;
