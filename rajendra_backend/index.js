
import express, { request,response } from 'express';
import { HttpStatusEnum } from "./status-enum.js";
import { lang, successResponseData } from "./successResponseData.js";
import { posts } from './posts.js';
import { users } from "./users.js";

const app = express();
const port = 3000;

app.use(express.json())

app.get("/posts", (request, response) => {
  response.json(posts);
});

app.get("/posts/:postId", (request, response) => {
  const postId = request.params.postId;
  const post = posts.filter((item) => item.id == postId);
  console.log(posts);
  if (!posts.length > 0) {
    response.status(404).json({ message: "User not found" });
  } else {
    response
      .status(200)
      .json({ message: "User fetched successfully", post: post});
  }

});
app.post("/posts", (request, response) => {
  // const {id,name,email,age}=request.data;
  posts.push(request.body);
  console.log(request.body);
  console.log(posts);
  response.status(201).json(posts);
});

app.put("/posts/:id",(request, response) => {
  const postId = request.params.id;
  const updatedPost = request.body;
  const index = posts.findIndex((post) => post.id == postId);
  if (index == -1) {
    response.status(404).json({ message: "Post not found" });
  } else {
    posts[index] = { ...posts[index], ...updatedPost};
    response.json({ message: "Post updated successfully", post: posts[index] });
  }
});

app.delete("/posts/:id", (request, response) => {
  const postId = parseInt(request.params.id);
  const index = posts.findIndex((post) => post.id === postId);
  if (index == -1) {
    response.status(404).json({ message: "User not found" });
  } else {
    const deletedUser = posts.splice(index, 1);
    response.json({ message: "User deleted successfully", post: deletedUser });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
