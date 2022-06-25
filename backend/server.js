const express = require('express');
const port = 5000;
const app = express();
require('dotenv').config();
const cors = require('cors');
const Datastore = require('nedb');
const database = new Datastore('database.db');

console.log(process.env);

app.use(express.static('public'));
app.use(cors());

database.loadDatabase();
database.insert({ title: 'Recipe 1', author: 'Sydnee' });

const breakfastCollection = require('./routes/collections');
app.use('/collections', breakfastCollection);

// app.get('/collections/breakfast', async (req, res) => {
//   const api_url = `https://api.spoonacular.com/recipes/complexSearch?type=breakfast&diet=ketogenic&apiKey=245c1de7e3dd44bcaad22cb705677483`;
//   const fetch_response = await fetch(api_url);
//   const json = await fetch_response.json();
//   res.json(json);
// });

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
