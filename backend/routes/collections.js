const router = require('express').Router();

const fetch = require('node-fetch');

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', (req, res) => {
  res.send('Breakfast home page');
});
// define the about route
router.get('/breakfast', async (req, res) => {
  const api_url = `https://api.spoonacular.com/recipes/complexSearch?type=breakfast&diet=ketogenic&apiKey=${process.env.SPOONACULAR_API_KEY}`;
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  res.json(json);
  res.send(json);
});

module.exports = router;
