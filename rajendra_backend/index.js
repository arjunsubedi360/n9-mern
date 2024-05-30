
import express from 'express';
import { posts } from './posts.js';
import { users } from "./users.js";

const app = express();
const port = 5000;
app.use(express.json())
app.get("/posts",(request, response) => {
response.json(posts);

});

app.post("/posts", (request, response) => {
  // const {id,name,email,age}=request.data;

  posts.push(request.body);
  console.log(request.body);
  console.log(posts);
  response.status(201).json(posts);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
 