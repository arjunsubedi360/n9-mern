import express, { response } from "express";
import {HtppStatusEnum} from "./status-enum.js";
import { data } from "./data.js";

const app = express();
const port = 3002;

app.get("/users", (request, response) => {
    response.status(2000).json(users);
});

app.get("/users/:id", (request, response) => {
    const id = request.params.id;
    const user = users.filter((item) => item.data == id);
    console.log(user);

    if(!user.length > 0) {
        response.status(404).json({message: "user not found"});
    } else {
        response
        .status(200)
        .json({message: "user fetched successfully", data:user});
    };
});

app.post("/users", (request, response) => {
    uers.push(request.body);
    response.status(201).json(users);
});

app.put("/users/:id", (request, response)=> {
    const userId = request.params.id;
    const updatedUser = request.body;
    const index = data.findIndex((user) => user.id == userId);
    if(index == -1) {
        response.status(404).json({message:"user not found"});
    }else {
        user[index] = {...users[index], ...updatedUser};
        response.json({message: "user updated sucessfully", data: users[index]});

    };
});