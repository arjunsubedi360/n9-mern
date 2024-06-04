import express from "express";
import AdminRouter from "./routes/v1/admins/index.js";
import { notFound } from "./middlewares/notFound.js";

const app = express();
const port = 3001;

// Middleware to parse JSON bodies
app.use(express.json());

app.use("/api/v1/admins", AdminRouter);

app.use(notFound);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
