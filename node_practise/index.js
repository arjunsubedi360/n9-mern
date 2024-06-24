import express, { request, response } from "express";
import { users } from "./models/user";
const app = express();
const port = 4000;

app.get("/user", (request, response) => {
  console.log(users);
  response.json(users);
});
app.get("/users/:id", (request, response) => {
  const id = request.params.id;
  const user = users.filter((user) => user.login == id);
  response.json(users);
});

app.listen(port, function () {
  console.log(`hello world i am port ${port}`);
});
