import express from "express";

import posts from "./posts.js";

const app = express();
const port = 4000;

app.use(express.json());


app.get("/posts", (req, res) => {
  response.status(201).json(post);
});

app.post("/posts", (req, res) => {
  posts.push(req.body);
  console.log(posts);
  response.status(201).json(post);
});

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
