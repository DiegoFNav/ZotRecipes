import dotenv from 'dotenv'
dotenv.config()
import { supabase } from './client.js'

const spoonacularApiKey = '9c4a7ac652404239b01cc2749aeafd5f'

"<ol><li>1. Add mussels and sauce packets into boiling water. Let boil with mussels about 5 minutes to cook and deepen the broth. If using fresh mussels, wait until they open and discard closed mussels.</li><li>2. Include the noodles and cook for a 2, 3 minutes. Add the beaten egg while stirring noodles in a circular motion for even, flaky egg drops. If wanting a poached egg, carefully add the egg off to the side of the pot.</li><li>3. Meanwhile, cut scallion into thin pieces along with gim (seaweed) sheet.</li><li>4. Transfer to a serving bowl and add the scallions and gim (seaweed).</li></ol>"

const getData = (url, apiKey=spoonacularApiKey) => {
  return fetch(`${url}?apiKey=${apiKey}`)
    .then( repsonse =>  repsonse.json() )
    .then( data => {
      console.log(data.recipes[0])
      return data.recipes[0] })
    .catch( error => console.log(error) )
}

const getRandomRecipe = () => {
  const randomRecipeURL = 'https://api.spoonacular.com/recipes/random'
  console.log('getData', getData(randomRecipeURL))
  return getData(randomRecipeURL)
}

const saveRecipe = (data) => {
  let { id, title, image, glutenFree, cuisines, readyInMinutes, veryHealthy, preparationMinutes, summary, servings, vegan, vegetarian, extendedIngredients, instructions } = data

  console.log('data: ', data)
  let description = getElementBeforeFirstPeriod(summary)
  console.log("description", description, "summary", summary)
  
  let ingredientIds = [];
  data.extendedIngredients.map((ingredient) => {
    ingredientIds.push(ingredient.id)
    // TODO: Ingredient's table 
    /* 
    Add and run a function that puts each ingredient into ingredient's table
    Name of Table: ingredients
    Copy the following attributes
    id
    name
    */
  })

  // TODO: Instructions table
  /* 
  Name of Table: instructions
  Copy id --> recipe_id
  Parse Instructions as a list of strings
  Instructions has elements in it list <li>, <p>
  */

  const saveToRecipe = async () => {
    const { data, error } = await supabase
    .from('recipes')
    .insert([
      { id: id, title: title, description: description, image: image, glutenFree: glutenFree, cuisines: cuisines, readyInMinutes: readyInMinutes, veryHealthy: veryHealthy, preparationMinutes: preparationMinutes, servings: servings, vegan: vegan, vegetarian: vegetarian, instructionsIds: [parseInt(id)], ingredientIds: ingredientIds }
    ])
    .select()
    
    if (error) {
      console.log(error)
    } else {  
      console.log('savetorecipe runs', data)
    }

  }
  saveToRecipe()
}
saveRecipe(getRandomRecipe())


// const ReturnRecipe = async () => {
//   const recipeData = await getRandomRecipe();
//   console.log(recipeData)

//   const savedData = () => {
//     saveRecipe(recipeData);
//   }

//   return (
//     <>
//     <p>{recipeData && savedData()}</p>
//     </>
//   )
// }

export default ReturnRecipe


/* recipes db attributes
id, title, description, image_url, protein, calories, fat, sodium, gluten_free, dairy_free, cuisine, cooking_minutes, cheap, health_score, preparation_minutes, servings, vegan, vegetarian, ingredientIds, instructionIds




*/
