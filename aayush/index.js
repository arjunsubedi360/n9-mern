import express, { response } from "express";
import { posts } from "./posts.js";
import { users } from "./users.js"

const app = express();
const port = 5000;

app.use(express.json());


// for users CRUD

app.get("/users",(request, response)=>{
  response.status(200).json(users)
})

app.get("/users/:id",(request,response) =>{
  const id = request.params.id;
  const user = users.filter((item) => item.id == id);
  response.status(200).json({users: user});
})

app.post("/users", (request,response)=>{
  const newUser = request.body;
  newUser.id = users.length+1;
  users.push(newUser);
  response.status(201).json(newUser);
})

app.put("/users/:id",(request,response)=>{
  const id = request.params.id;
  const updateUser = request.body;
  const index = users.findIndex((user)=>user.id==id);
  users[index]={...users[index], ...updateUser};
  response.status(200).json(users[index]);
})

app.delete("/users/:id",(request, response) => {
  const id = request.params.id;
  const index = data.findIndex((user) => user.id == id);
  const deletedUser = data.splice(index,1);
  response.status(200).json({message: "deleted user data" ,users: users[index]});
})

// for posts curd

app.get("/posts", (request, response) => {
  response.status(200).json({ posts });
});

app.get("/posts/:id",(request,response) =>{
  const id = request.params.id;
  const post = posts.filter((item) => item.id == id);
  response.status(200).json({posts: post});
})

app.post("/posts", (request, response) => {
  posts.push(request.body);
  response.status(201).json(posts);
});

app.put("/posts/:id",(request,response)=>{
  const id = request.params.id;
  const updatePost = request.body;
  const index = posts.findIndex((post)=>post.id==id);
  users[index]={...posts[index], ...updatePost};
  response.status(200).json(posts[index]);
})

app.delete("/posts/:id",(request, response) => {
  const id = request.params.id;
  const index = data.findIndex((post) => post.id == id);
  const deletedPost = data.splice(index,1);
  response.status(200).json({message: "deleted user data" ,posts: posts[index]});
})

//user id post

app.get("/users/:id/posts", (request, response) => {
  const user = request.params.id;
  console.log("user", user);
  const result = posts.filter((item) => item.createdBy == user);
  response.status(200).json({ data: result });
});

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
