import express, { request, response } from "express";
import { posts } from "./posts.js";

const app = express();
const port = 4000;

app.use(express.json());

app.get("/users/:id/posts", (request, response) => {
  const user = request.params.id;
  console.log("user", user);
  const result = posts.filter((item) => item.createdBy == user);
  response.status(200).json({ data: result });
});

app.get("/posts", (request, response) => {
  response.status(200).json({ posts });
});

app.post("/posts", (request, response) => {
  posts.push(request.body);
  response.status(201).json(posts);
});

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
