import express from "express";
import { HttpStatusEnum } from "./status-enum.js";
import { lang, successResponseData } from "./successResponseData.js";
import { users } from "../nabin/users.js";
// import { notFound } from "./notFound.js";
// import { errorHandlerMiddleware } from "./error-handle.js";

const app = express();
const port = 3001;

// Middleware to parse JSON bodies
app.use(express.json());

// //Not found route
// app.use(notFound);

// app.use(errorHandlerMiddleware);
/* 
request: {},
response: users <list of users>
*/
app.get("/users", (request, response) => {
  successResponseData({
    message: lang.LIST("Users"),
    data: users,
    response,
    statusCode: HttpStatusEnum.OK,
  });
});

// Read operation - Get a single user by ID
app.get("/users/:id", (request, response) => {
  const id = request.params.id;
  const user = users.filter((item) => item.id == id);
  console.log(user);
  if (!user.length > 0) {
    response.status(404).json({ message: "User not found" });
  } else {
    response
      .status(200)
      .json({ message: "User fetched successfully", data: user });
  }
});

// Create operation - Add a new user
app.post("/users", (request, response) => {
  users.push(request.body);
  response.status(201).json(users);
});

// Update operation - Update an existing user
app.put("/users/:id", (request, response) => {
  const userId = request.params.id;
  const updatedUser = request.body; // Assuming request body contains updated user data
  const index = data.findIndex((user) => user.id == userId);
  if (index == -1) {
    response.status(404).json({ message: "User not found" });
  } else {
    users[index] = { ...users[index], ...updatedUser };
    response.json({ message: "User updated successfully", data: users[index] });
  }
});

// Delete operation - Delete a user by ID
app.delete("/users/:id", (request, response) => {
  const userId = parseInt(request.params.id);
  const index = data.findIndex((user) => user.id === userId);
  if (index == -1) {
    response.status(404).json({ message: "User not found" });
  } else {
    const deletedUser = users.splice(index, 1);
    response.json({ message: "User deleted successfully", data: deletedUser });
  }
});

/* DRY = Donot Repeat Yourself */
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
