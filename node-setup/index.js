import express from "express";
import { users } from "./models/users.js";
import { posts } from "./models/posts.js";

const app = express();
const port = 4000;

app.get("/users", (request, response) => {
  response.json(users);
});

app.get("/users/:username", (request, response) => {
  try {
    const username = request.params.username; // req.params
    // console.log("id", id)
    // const queryUserName = request.query.username; //req.query localhost:4000/users?username="arjunsubedi360"
    // console.log("queryUserName", username);
    const input = request.body;
    console.log(input);
    const user = users.filter((user) => user.login == username);

    if (user.length === 0) {
      throw new Error("No user found");
    }
    response.json(user);
  } catch (error) {
    console.log(error);
    response.status(400).json({ message: error.message });
  }
});

app.listen(4000, function () {
  console.log("I am running at port 4000")
})

/* 
Http method
1. Get (single)    /users/:id
2. Post            /users (Create new record)
3. Put             /users/:id  body = {}
4. Delete          /users/:id 
5. Get (all data)  /users 
6. Patch           /users/:id   status: active 
*/
