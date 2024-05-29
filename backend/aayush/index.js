import express, { request, response } from "express";
import {post} from "./post.js";

const app = express();
const port = 4000; 

app.use(express.json());

app.get("/posts",(request, response) => {
    response.status(200).json({post});
})

app.get("/users/:id/posts",(request, response) => {
    userID = request.params.id;
    
})

app.post("/posts",(request, response) => {
    post.push(request.body);
    response.status(201).json(post);
})

app.listen(port, ()=> {
    console.log(`Listening at port ${port}`);
});