import express from "express";
import {data} from "./data";

const app = express();
const port = 3000;

app.get('/', (req, res)=> {
    res.send('hello');
});

app.listen(3000);