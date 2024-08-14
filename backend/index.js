import express from "express";
import cors from "cors";
import morgan from "morgan";
import AdminRouter from "./routes/v1/admins/index.js";
import UserRouter from "./routes/v1/users/index.js";

import { connectDb } from "./db/index.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.use("/admin/v1", AdminRouter);
app.use("/api/v1", UserRouter);

app.use(errorHandler);

function startServer() {
  connectDb();
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
}

startServer();
