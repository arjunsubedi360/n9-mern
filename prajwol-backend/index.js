import express from "express";
import posts from "./posts.js";

const app = express();
const port = 4001;

app.use(express.json());

app.get("/posts", (request, response) => {
  response.status(200).json(posts);
});


app.get("/posts/:id", (request, response) => {
  const postId = parseInt(request.params.id, 10);
  const post = posts.find(p => p.id === postId);

  if (post) {
    response.status(200).json(post);
  } else {
    response.status(404).json({ error: "Post not found" });
  }
});

app.post("/posts", (request, response) => {
  const newPost = request.body;

  
  if (!newPost.title || !newPost.content) {
    return response.status(400).json({ error: "Invalid post data. Title and content are required." });
  }

  newPost.id = posts.length > 0 ? posts[posts.length - 1].id + 1 : 1;
  posts.push(newPost);
  console.log("New post added:", newPost);
  response.status(201).json(newPost);
});

app.delete("/posts/:id", (request, response) => {
  const postId = parseInt(request.params.id, 10);
  const postIndex = posts.findIndex(p => p.id === postId);

  if (postIndex !== -1) {
    const deletedPost = posts.splice(postIndex, 1);
    console.log("Post deleted:", deletedPost);
    response.status(200).json(deletedPost);
  } else {
    response.status(404).json({ error: "Post not found" });
  }
});

app.put("/posts/:id", (request, response) => {
  const postId = parseInt(request.params.id, 10);
  const postIndex = posts.findIndex(p => p.id === postId);

  if (postIndex !== -1) {
    const updatedPost = request.body;

    
    if (!updatedPost.title || !updatedPost.content) {
      return response.status(400).json({ error: "Invalid post data. Title and content are required." });
    }

    updatedPost.id = postId; 
    posts[postIndex] = updatedPost;
    console.log("Post updated:", updatedPost);
    response.status(200).json(updatedPost);
  } else {
    response.status(404).json({ error: "Post not found" });
  }
});

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
