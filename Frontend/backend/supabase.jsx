import { supabase } from './client.js'
import React, { useState, useEffect } from 'react'

/*
spoonacular API Keys:

AVAIABLE AS OF 11/17:
73ee43c01e3b43a08fd690feeaca2ff9
d29bf06c4b974e4b83a389c598283e5e

USED ALL CALLS AS OF 11/17:
9c4a7ac652404239b01cc2749aeafd5f
*/

const spoonacularApiKey = '73ee43c01e3b43a08fd690feeaca2ff9'

// Parser that strips newlines and html elements
function stripHtmlTags(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const elements = doc.body.childNodes;

  const contentList = [];

  elements.forEach((element) => {
    if (element.textContent.trim() !== '') {
      contentList.push(element.textContent.trim());
    }
  });
  
  return contentList[0].split(/[.\n]/).flatMap((item) =>
  item.trim().length > 0 ? item.trim() : []
);
}

// Parser that gets sentence before first period
function getElementBeforeFirstPeriod(inputString) {
  const index = inputString.indexOf('.');
  if (index !== -1) {
      return inputString.substring(0, index);
  }
  return inputString;
}


const getData = (url, apiKey=spoonacularApiKey) => {
  return fetch(`${url}?apiKey=${apiKey}`)
    .then( repsonse =>  repsonse.json() )
    .then( data => {
      console.log(data.recipes[0])
      return data.recipes[0] })
    .catch( error => console.log(error) )
}

export const getRandomRecipe = () => {
  const randomRecipeURL = 'https://api.spoonacular.com/recipes/random'
  return getData(randomRecipeURL)
}

export const saveRecipe = (data) => {
  let { id, title, image, glutenFree, cuisines, readyInMinutes, veryHealthy, preparationMinutes, summary, servings, vegan, vegetarian, extendedIngredients, instructions } = data

  console.log('data: ', data)
  let description = getElementBeforeFirstPeriod(summary)
  console.log("description", description, "summary", summary)
  
  let ingredientIds = [];
  data.extendedIngredients.map((ingredient) => {
    ingredientIds.push(ingredient.id)
    const saveIngredients = async () => {
      const { data, error } = await supabase
      .from('ingredients')
      .insert([
        { id: ingredient.id, name: ingredient.name }
      ])
      .select()
      if (error) {
        if (error.code !== "23505") {
          console.log('ingreidents error at: ', error)
        }
      } else {
        console.log('save ingredients: ', data)
      }
      }
    saveIngredients()
  })

  const saveInstructions = async (id, instructions) => {
    const listOfInstructions = stripHtmlTags(instructions)
    const step_number = listOfInstructions.length
    const { data, error } = await supabase
    .from('instructions')
    .insert({
      id: id, instruction: listOfInstructions, step_number: step_number
    })
    .select()

    if (error) {
      console.log('error while saving instructions: ', error)
    } else {
      console.log('successfully saved instructions: ', data)
    }
  }



  const saveToRecipe = async () => {
    const { data, error } = await supabase
    .from('recipes')
    .insert([
      { id: id, title: title, description: description, image: image, glutenFree: glutenFree, cuisines: cuisines, readyInMinutes: readyInMinutes, veryHealthy: veryHealthy, preparationMinutes: preparationMinutes, servings: servings, vegan: vegan, vegetarian: vegetarian, instructionsIds: [parseInt(id)], ingredientIds: ingredientIds }
    ])
    .select()

    // TODO: fix if doesn't pass as a list of instructions
    console.log(stripHtmlTags(instructions))

    if (error) {
      console.log(error)
    } else {  
      console.log('savetorecipe runs', data)
    }

  }
  saveToRecipe()
  saveInstructions(id, instructions)


}


const ReturnRecipe = () => {
  const [recipeData, setRecipeData] = useState('')
  console.log('does this work')
  //uncomment if you want to see data in console
  useEffect( () => {
    console.log('does this work in use effect')
    const fetchData = async () => {
      const data = await getRandomRecipe();
      setRecipeData(data);
    };
    
    if (!recipeData) {
      fetchData()
      return
    }
    console.log('recipedata', recipeData)
    console.log("recipe data is : ", recipeData)
    saveRecipe(recipeData);

  }, [recipeData])
  return (
    <>
      <p>sup</p>
    </>
  )
}

export default ReturnRecipe

