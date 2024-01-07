const express = require('express');
const { uuid } = require('uuidv4');
const cors = require('cors');

const { USERS } = require('./users');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());

app.use((req, res, next) => {
  console.log(`Request id: ${uuid()}, method: ${req.method}, url: ${req.url}`);

  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/users', (req, res) => {
  // probably can substitute with file, later mongodb
  res.send(USERS);
});

app.get('*', function(req, res){
  res.status(404).send('not found');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});