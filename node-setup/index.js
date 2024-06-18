import express from "express";
import { users } from "./models/users.js";
import { posts } from "./models/posts.js";

const app = express();
const port = 4000;

app.get("/users", (request, response) => {
  console.log(users);
  response.json(users);
});
app.get("/posts", (req, res) => {
  console.log(posts);
  res.json(posts);
});

app.listen(4000, function () {
  console.log("I am running at port 4000")
})
