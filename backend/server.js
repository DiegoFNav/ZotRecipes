import dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import fetch from 'node-fetch';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.SB_URL;
const supabaseKey = process.env.SB_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const app = express();
const spoonacularApiKey = process.env.SPOONACULAR_API_KEY;

app.use(express.json()); // for parsing application/json

// Utility function to fetch data from Spoonacular
const getData = (url, apiKey = spoonacularApiKey) => {
  return fetch(`${url}?apiKey=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      console.log(data.recipes[0]);
      return data.recipes[0];
    })
    .catch(error => console.error(error));
};

// Endpoint to get a random recipe
app.get('/random-recipe', async (req, res) => {
  const randomRecipeURL = 'https://api.spoonacular.com/recipes/random';
  try {
    const recipe = await getData(randomRecipeURL);
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint to save a recipe to Supabase
app.post('/save-recipe', async (req, res) => {
  const recipeData = req.body;
  // ... extract the properties from recipeData as done in your saveRecipe function
  // ... and then use Supabase client to insert the data
  
  try {
    const { data, error } = await supabase
      .from('recipes')
      .insert([recipeData]);

    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
