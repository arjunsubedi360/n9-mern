// const express = require("express");
import express, { request, response } from "express";
import { HttpStatusEnum } from "./status-enums.js";
import { lang, successResponseData } from "./successResponse.js";
import { data } from "./data.js";
import { failResponseData } from "./failResponse.js";
import { posts } from "./posts.js";
import { notFound } from "./notFound.js";

const app = express();
const port = 3000;

app.use(express.json()); //should be used to define the data to be received is in json format
// app.use(notFound); //using imported function which displays error message for not found rfedirections

// all users CRUD operations

app.get("/users", (requset, response) => {
  successResponseData({
    message: lang.LIST("Users"),
    data,
    response,
    statusCode: HttpStatusEnum.OK,
  });
});

app.get("/users/:id", (request, response) => {
  lang;
  const id = request.params.id;
  const user = data.filter((item) => item.id == id);
  console.log(user);
  if ((!user.length > 0) & (id == user.length)) {
    failResponseData({
      message: lang.SINGLE("User"),
      statusCode: HttpStatusEnum.OK,
      response,
    });
  } else {
    successResponseData({
      message: lang.SINGLE("User"),
      data: user,
      statusCode: HttpStatusEnum.OK,
      response,
    });
  }
});

app.post("/users", (request, response) => {
  const newUser = request.body;
  const index = data.length + 1;
  newUser.id = index;
  data.push(newUser);
  try {
    successResponseData({
      statusCode: HttpStatusEnum.CREATED,
      message: lang.CREATE("User"),
      data: data[index - 1],
      response,
    });
  } catch (error) {
    failResponseData({
      statusCode: HttpStatusEnum.BAD_GATEWAY,
      message: lang.CREATE("User"),
      response,
    });
  }
});

app.put("/users/:id", (request, response) => {
  const id = request.params.id;
  const addData = request.body;
  const index = data.findIndex((user) => user.id == id);
  data[index] == { ...data[index], ...addData };
  try {
    successResponseData({
      statusCode: HttpStatusEnum.OK,
      message: lang.UPDATE("User"),
      data: data[index],
      response,
    });
  } catch (error) {
    failResponseData({
      statusCode: HttpStatusEnum.NO_CONTENT,
      message: lang.UPDATE,
      response,
    });
  }
});

app.delete("/users/:id", (request, response) => {
  const id = request.params.id;
  const index = data.findIndex((index) => index.id == id);
  data.splice(index, 1);
  try {
    successResponseData({
      statusCode: HttpStatusEnum.OK,
      message: lang.DELETE("User"),
      data,
      response,
    });
  } catch (error) {
    failResponseData({
      statusCode: HttpStatusEnum.NOT_FOUND,
      message: lang.DELETE,
      response,
    });
  }
});

// all post CRUD operations

app.get("/posts", (request, response) => {
  try {
    successResponseData({
      statusCode: HttpStatusEnum.OK,
      message: lang.LIST,
      data: posts,
      response,
    });
  } catch (error) {
    failResponseData({
      statusCode: HttpStatusEnum.NOT_FOUND,
      response,
      message: lang.LIST,
    });
  }
});

app.get("/posts/:id", (request, response) => {
  const id = request.params.id;
  const post = posts.filter((post) => post.id == id);
  try {
    successResponseData({
      message: lang.LIST,
      data: post,
      response,
      statusCode: HttpStatusEnum.OK,
    });
  } catch (error) {
    failResponseData({
      message: lang.LIST,
      response,
      statusCode: HttpStatusEnum.NOT_FOUND,
    });
  }
});

app.post("/posts", (request, response) => {
  const newPost = request.body;
  posts.push(newPost);
  const len = posts.length + 1;
  try {
    successResponseData({
      data: posts,
      message: lang.CREATE("Post"),
      statusCode: HttpStatusEnum.CREATED,
      response,
    });
  } catch (error) {
    failResponseData({
      statusCode: HttpStatusEnum.NO_CONTENT,
      message: lang.CREATE("Post"),
      response,
    });
  }
});

app.put("/posts/:id", (request, response) => {
  const id = request.params.id;
  const newPost = request.body;
  const index = posts.findIndex((index) => index.id == id);
  posts[index] = { ...posts[index], ...newPost };
  successResponseData({
    statusCode: HttpStatusEnum.CREATED,
    message: lang.UPDATE("Post"),
    response,
    data: posts[index],
  });
});

app.delete("/posts/:id", (request, response) => {
  const id = request.params.id;
  const index = posts.findIndex((post) => posts.id == id);
  posts.splice(index, 1);
  successResponseData({
    message: lang.DELETE("Posts"),
    statusCode: HttpStatusEnum.OK,
    data: posts,
    response,
  });
});

//users/id/posts CRUD

app.get("/users/:id/posts", (request, response) => {
  const id = request.params.id;
  const user = users.filter((index) => index.id == id);
  response.json({ users: user });
});

app.delete("/users/:id/posts", (request, response) => {
  const id = request.params.id;
  const index = users.findIndex((user) => user.id == id);
  users.splice(index, 1);
  response.status(200).json({ users: users });
});

app.listen(port, () => {
  console.log(`example app listening on port ${port}`);
});
