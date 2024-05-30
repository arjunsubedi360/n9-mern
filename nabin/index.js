import express from 'express';
import { posts } from './posts.js';
const app = express();
const PORT = 8000;

app.use(express.json());

app.get("/posts", (request, response) => {
    response.json(posts)
});

app.post("/posts", (request, response) => {
    posts.push(request.body);
    response.json({posts})
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});