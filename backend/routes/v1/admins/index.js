import UserRouter from "./user.routes.js";
import PostRouter from "./post.routes.js";

const AdminRouter = [
  UserRouter,
  PostRouter
];

export { AdminRouter };
