import express from "express";
import { data } from "./data.js";

const app = express();
const port = 3001;

app.get("/users", (request, response) => {
  response.json(data);
});

app.get("/users/:id", (request, response) => {
  console.log(request)
  const  userId = request.params.id;

  const user = data.filter((item) => item.id == userId);
  response.send({ message: "Users fetched successfully", data: user });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
