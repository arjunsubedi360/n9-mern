import express from "express";

const app = express();
const port = 3001;

//middleware to parse JSON bodies
app.use(express.json());

app.listen(port, ()=> {
    console.log(`Server started on port ${port}`);
});