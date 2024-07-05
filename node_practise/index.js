import express from "express";
import AdminRouter from "./routes/v1/admins/index.js";
import UserRouter from "./routes/v1/users/index.js";

import { connectDb } from "./db/index.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();
const port = 3001;

app.use(express.json());

app.use("/auth/admin/v1", AdminRouter);
app.use("/auth/api/v1", UserRouter);

app.use(errorHandler);

function startServer() {
  connectDb();
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

startServer();
