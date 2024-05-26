import express from "express";
import { data } from "./data.js";
import { lang, successResponseData } from "./successResponseData.js";
import { HttpStatusEnum } from "./status-enum.js";

const app = express();
const port = 3001;

// Middleware to parse JSON bodies
app.use(express.json());

// Read operation - Get all users
app.get("/users", (request, response) => {
  console.log(request.query);
  const { search } = request.query;

  const users = data.filter((item) => item.name == search);
  successResponseData({
    response,
    data: users,
    statusCode: HttpStatusEnum.OK,
    message: lang.CREATE("User"),
  });
});

// Read operation - Get a single user by ID
app.get("/users/:id", (request, response) => {
  const id = request.params.id;
  const user = data.filter((item) => item.id == id);
  console.log(user);
  if (!user.length > 0) {
    //(user.length > 0) value cha   || (!user.length > 0) value chaina
    response.status(404).json({ message: "User not found" });
  } else {
    response
      .status(200)
      .json({ message: "User fetched successfully", data: user });
  }
});

// Create operation - Add a new user
app.post("/users", (request, response) => {
  const newUser = request.body;
  console.log(request);
  console.log("newUser", newUser);

  // Assuming request body contains user data
  // Generating a unique ID for the new user (you can use a database for this in a real application)
  newUser.id = data.length + 1;
  data.push(newUser);
  response
    .status(201)
    .json({ message: "User created successfully", data: newUser });
});

// Update operation - Update an existing user
app.put("/users/:id", (request, response) => {
  const userId = request.params.id;
  const updatedUser = request.body; // Assuming request body contains updated user data
  const index = data.findIndex((user) => user.id == userId);
  if (index == -1) {
    response.status(404).json({ message: "User not found" });
  } else {
    data[index] = { ...data[index], ...updatedUser };
    response.json({ message: "User updated successfully", data: data[index] });
  }
});

// Delete operation - Delete a user by ID
app.delete("/users/:id", (request, response) => {
  const userId = parseInt(request.params.id);
  const index = data.findIndex((user) => user.id === userId);
  if (index == -1) {
    response.status(404).json({ message: "User not found" });
  } else {
    const deletedUser = data.splice(index, 1);
    response.json({ message: "User deleted successfully", data: deletedUser });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
