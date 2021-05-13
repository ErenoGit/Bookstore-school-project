const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const loadRoutes = require('./routes/index.js');

app.listen(5000, () => {
  loadRoutes(app);
  console.log('Serwer wystartował!');
});

