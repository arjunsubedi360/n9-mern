// server.js
const express = require('express');
const bodyParser = require('body-parser');
const menuRoutes = require('./routes/menuRoutes');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/menu', menuRoutes);

app.listen(port, () => {
  console.log(`Menu API is running at http://localhost:${port}`);
});
