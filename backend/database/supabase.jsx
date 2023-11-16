import { supabase } from '../client.js'
import { useState, useEffect } from 'react'
//9c4a7ac652404239b01cc2749aeafd5f
//d29bf06c4b974e4b83a389c598283e5e
const spoonacularApiKey = '73ee43c01e3b43a08fd690feeaca2ff9'

function getElementBeforeFirstPeriod(inputString) {
  const index = inputString.indexOf('.');
  if (index !== -1) {
    return inputString.substring(0, index);
  }
  return inputString; // If no period is found, return the whole string
}


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
  })


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
//saveRecipe(getRandomRecipe())


const ReturnRecipe = () => {
  const [recipeData, setRecipeData] = useState(null)


  //uncomment if you want to see data in console
  /*useEffect( () => {
    const fetchData = async () => {
      const data = await getRandomRecipe();
      setRecipeData(data);
    };

    if (!recipeData) {
      fetchData()
      return
    }
    console.log("recipe data is : ", recipeData)
    saveRecipe(recipeData);

  }, [recipeData])*/


  return (
    <>
    <p>sup</p>
    </>
  )
}

export default ReturnRecipe


/* recipes db attributes
id, title, description, image_url, protein, calories, fat, sodium, gluten_free, dairy_free, cuisine, cooking_minutes, cheap, health_score, preparation_minutes, servings, vegan, vegetarian, ingredientIds, instructionIds




*/
