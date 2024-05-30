import express from "express";

import posts from "./posts.js";

const app = express();
const port = 4000;

app.use(express.json());


app.get("/posts", (request, response) => {
  response.status(201).json(posts);
});

app.post("/posts", (request, response) => {
  posts.push(request.body);
  console.log(posts);
  response.status(201).json(posts);
});

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
