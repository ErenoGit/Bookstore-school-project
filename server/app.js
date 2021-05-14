const express = require('express');
var bodyParser = require('body-parser')
const app = express();
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());

const loadRoutes = require('./routes/index.js');

app.listen(5000, () => {
  loadRoutes(app);
  console.log('Serwer wystartował!');
});

