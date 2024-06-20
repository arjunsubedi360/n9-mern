import express from "express";
import path from "path";
import { users } from "./models/users.js";
const app = express();
const port = 4000;

app.use(express.json());


app.get('/users', function(req, res) {
  res.json(users);
});

app.get("/users/:id", (request, response) => {
  const { id } = request.params;
  const { username, limit, sort } = request.query;
  console.log(username, limit, sort);
  response.json(users);
});

app.get("/users/:username", (request, response) => {
  try {
    const username = request.params.username; // req.params
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

app.post("/users", (req, res)=> {
    users.push(req.body);
    res.status(201).json(users);
})


app.put("/users/:id", (req, res)=> {
  const { id } = req.params;
  const input = req.body;

  const user = users.find((user)=> user.login == id);

  const updateUser = {
    ...user,
    ...input
  };

  res.status(201).json(updateUser);
});


app.delete("/users/:id", (req, res)=> {
  const { id } = req.params;

  const user = users.filter((user)=> user.login !== id);

  res.status(201).json(user);
});
app.listen(port, function () {
  console.log(`I am running at port ${port}`);
});

/* 
Http method
1. Get (single)    /users/:id
2. Post            /users (Create new record)
3. Put             /users/:id  body = {}
4. Delete          /users/:id 
5. Get (all data)  /users 
6. Patch           /users/:id   status: active 
*/

// params = "users/:userId/posts/:postId"

// browser "lcoalhost:4599/users/idjdjdjdj"
