const express = require('express');
const { uuid } = require('uuidv4');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(cors());

app.use((req, res, next) => {
  console.log(`Request id: ${uuid()}, method: ${req.method}, url: ${req.url}`);

  next();
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('*', function(req, res){
  res.status(404).send('not found');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});