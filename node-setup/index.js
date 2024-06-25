import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import UserRouter from "./routes/users.route.js";

dotenv.config();

console.log(process.env.DB_URL)
const app = express();
const port = 3001;

app.use(express.json());

app.use("/auth/api/v1", UserRouter);

app.listen(port, function () {
  mongoose.connect(process.env.DB_URL)
  console.log(`I am running at port ${port}`);
});
