const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send({ message: "Hello World!" });
  // console.log("Hello world");
});

app.listen(port, () => { // listens to the given port
  console.log(`Example app listening on port ${port}`);
});
