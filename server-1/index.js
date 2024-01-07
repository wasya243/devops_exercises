const express = require('express');
const { uuid } = require('uuidv4');
const cors = require('cors');
const fetch = require('node-fetch');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT;
const SECOND_SERVER_URL = process.env.SERVER_TWO_URL;

app.use(cors());

app.use((req, res, next) => {
  console.log(`Request id: ${uuid()}, method: ${req.method}, url: ${req.url}`);

  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/avg-grades', async (req, res) => {
  const response = await fetch(`${SECOND_SERVER_URL}/users`);
  const parsed = await response.json();

  const result = parsed.map(u => {
    return {
      _id: u._id,
      name: u.name,
      avg_grade: (u.grades.reduce((ac, cv) => ac + cv)) / u.grades.length
    }
  });

  res.send(result);
});

app.get('*', function(req, res){
  res.status(404).send('not found');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});