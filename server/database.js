import { createClient } from '@supabase/supabase-js'

const supabaseURL = 'https://qsxiefmjzgwmrgwkpafw.supabase.co';
const supabaseApiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzeGllZm1qemd3bXJnd2twYWZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAwMjA3OTQsImV4cCI6MjAxNTU5Njc5NH0.SiLAgC3xZYYFxXqJCOhwT7y-byMfYNaeqDIiiN0VsSEe';

const supabase = createClient(supabaseURL, supabaseApiKey)

const spoonacularApiKey = '9c4a7ac652404239b01cc2749aeafd5f'
const spoonacularURL = ''


const getData = (url, apiKey=spoonacularApiKey) => {
  return fetch(`${url}?apiKey=${apiKey}`)
    .then( repsonse =>  repsonse.json() )
    .then( data => {
      console.log(data.recipes[0])
      return data })
    .catch( error => console.log(error) )
}

const getRandomRecipe = () => {
  const randomRecipeURL = 'https://api.spoonacular.com/recipes/random'
  return getData(randomRecipeURL)
}

const saveRecipe = (data) => {
  let { id, title, description, image_url, protein, calories, fat, sodium, gluten_free, dairy_free, cuisine, cooking_minutes, cheap, health_score, preparation_minutes, servings, vegan, vegetarian, extendedIngredients, instructions } = data

  instructions = instructions.split('\n')

  const saveToRecipe = async () => {
    const { data, error } = await supabase
    .from('recipes')
    .insert([
      { title: title, description: descript, image_url: image_url, protein, protein, calories: calories, fat: fat, sodium: sodium, gluten_free: gluten_free, dairy_free: dairy_free, cuisine: cuisine, cooking_minutes: cooking_minutes, cheap: cheap, health_score: health_score, preparation_minutes: preparation_minutes, servings: servings, vegan: vegan, vegetarian: vegetarian, instructions }
    ])
    .select()
    console.log(data)
  }
  // extendedIngredients is a list of objects with attributes about individual ingredients
  /* const { data, error } = await supabase
  .from('recipes')
  .insert([
    { some_column: 'someValue', other_column: 'otherValue' },
  ])
  .select()*/

}
saveRecipe(getRandomRecipe())
/* recipes db attributes
id, title, description, image_url, protein, calories, fat, sodium, gluten_free, dairy_free, cuisine, cooking_minutes, cheap, health_score, preparation_minutes, servings, vegan, vegetarian, ingredientIds, instructionIds



*/
