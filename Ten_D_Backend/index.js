import express from "express";

import posts from "./posts.js";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is the home page");
});
app.get("/posts", (req, res) => {
  res.json(posts);
});

app.post("/posts", (req, res) => {
  //   const { id, title, content, createdBy } = req.body;
  //   posts.id = id;
  //   posts.title = title;
  //   posts.content = content;
  //   posts.createdBy = createdBy;
  //   console.log(posts);
  posts.push(req.body);
  console.log(posts);
  res.send("Data added successfully");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
