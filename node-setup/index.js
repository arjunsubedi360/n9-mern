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

app.delete("/users/:id", (req, res)=> {
  const { id } = req.params;

  const user = users.filter((user)=> user.login !== id);

  res.status(201).json(user);
});
app.listen(port, function () {
  console.log(`I am running at port ${port}`);
});
