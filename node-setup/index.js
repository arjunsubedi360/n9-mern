import express from "express";
import { users } from "./models/users.js";
import UserRouter from "./routes/users.route.js";

const app = express();
const port = 4000;

app.use(express.json());

app.use("/auth/api/v1", UserRouter);

app.get("/users/:username", (request, response) => {
  try {
    const username = request.params.username; // req.params
    // console.log("id", id)
    // const queryUserName = request.query.username; //req.query localhost:4000/users?username="arjunsubedi360"
    // console.log("queryUserName", username);
    const input = request.body;
    console.log(input);
    const user = users.filter((user) => user.login == username);

    if (user.length === 0) {
      throw new Error("No user found");
    }
    response.json(user);
  } catch (error) {
    console.log(error);
    response.status(400).json({ message: error.message });
  }
});

app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const input = req.body;


  const updateUser = {
    ...user,
    ...input
  };

  res.status(201).json(updateUser);
});

app.delete("/auth/api/v1", UserRouter);
app.listen(port, function () {
  console.log(`I am running at port ${port}`);
});
