import express from "express";
import { users } from "./models/users.js";
import UserRouter from "./routes/users.route.js";

const app = express();
const port = 4000;

app.use(express.json());

app.use("/auth/api/v1", UserRouter);

app.put("/users/:id", (req, res)=> {
  const { id } = req.params;
  const input = req.body;

  
  const updateUser = {
    ...user,
    ...input
  };

  res.status(201).json(updateUser);
});

app.delete("/auth/api/v1",UserRouter);
app.listen(port, function () {
  console.log(`I am running at port ${port}`);
});
