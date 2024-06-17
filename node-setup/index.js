import express from "express";
import { users } from "./models/users.js";

const app = express();
const port = 4000;

app.get("/users", (request, response) => {
  console.log(users);
  response.json(users);
});

app.listen(port, function () {
  console.log(`I am running at port ${port}`);
});
