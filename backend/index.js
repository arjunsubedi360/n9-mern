import express from "express";
import { errorHandler } from "./middlewares/errorHandler.js";
import { notFound } from "./middlewares/notFound.js";
import AdminRouter from "./routes/v1/admins/index.js";

const app = express();
const port = 3001;

// Middleware to parse JSON bodies
app.use(express.json());

app.use("/auth/admin/v1", AdminRouter);

app.use(notFound);
app.use(errorHandler);

function startServer() {
  connectDb()
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

startServer();
