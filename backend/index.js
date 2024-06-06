import express from "express";
import AdminRouter from "./routes/v1/admins/index.js";
import { notFound } from "./middlewares/notFound.js";
import { connectDb } from "./db/index.js";
import { dbName } from "./config/index.js";

const app = express();
const port = 3001;

console.log(dbName)
// Middleware to parse JSON bodies
app.use(express.json());

// this.app.use("/auth/public/v1", ProxyRouterPublic.map());
// this.app.use("/auth/api/v1", ProxyRouterUser.map());
// this.app.use("/auth/admin/v1", ProxyRouterAdmin.map());
app.use("/auth/admin/v1", AdminRouter);

app.use(notFound);

function startServer() {
  connectDb()
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}


startServer()
