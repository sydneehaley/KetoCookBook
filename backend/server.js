const express = require('express');
const port = 5000;
const app = express();
require('dotenv').config();
const cors = require('cors');
const Datastore = require('nedb');
const database = new Datastore('database.db');

app.use(cors());

database.loadDatabase();
database.insert({ title: 'Recipe Test', author: 'Sydnee' });

const collections = require('./routes/collections');
app.use('/collections', collections);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
