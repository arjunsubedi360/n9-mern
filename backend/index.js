import express from "express";
import cors from 'cors';
import morgan from 'morgan';
import AdminRouter from "./routes/v1/admins/index.js";
import UserRouter from "./routes/v1/users/index.js";

import { notFound } from "./middlewares/notFound.js";
import { connectDb } from "./db/index.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { port } from "./config/index.js";

const app = express();
const PORT = port || 4000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.use("/auth/admin/v1", AdminRouter);
app.use("/auth/api/v1", UserRouter)

app.use(notFound);
app.use(errorHandler);

function startServer() {
  connectDb()
  app.listen(PORT, () => {
    console.log(`Example app listening on PORT ${PORT}`);
  });
}

startServer();
