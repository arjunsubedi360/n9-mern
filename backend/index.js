import express from "express";
import AdminRouter from "./routes/v1/admins/index.js";
import { connectDb } from "./db/index.js";

const app = express();
const port = 3001;


app.use(express.json());

app.use("/auth/admin/v1", AdminRouter);

function startServer() {
  connectDb()
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}


startServer()
