import express from 'express';
import { data } from './data.js';
import { successResponseData } from './successResponseData.js';
import { HttpStatusEnum } from './status-enum.js';

const app = express();
const port = 3001;

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/users', (request, response) => {
  response.json(data);
});

app.get('/users/:id', (request, response) => {
  const userId = request.params.id;
  const user = data.filter((item) => item.id == userId);
  response.json({ message: 'Users fetched successfully', data: user });
});

app.get('/old-route', (req, res) => {
  res.redirect('/new-route');
});

app.get('/new-route', (req, res) => {
  res.send({ message: 'I am new route' });
});

app.post('/users', (req, res) => {
  console.log('Request Body:', req.body);
  const payload = req.body;
  
  successResponseData({
    data: payload,
    message: 'User created successfully',
    res,
    statusCode: HttpStatusEnum.CREATED,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
