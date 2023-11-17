import { supabase } from './client.js'
import React, { useState, useEffect } from 'react'

/* 
TODO: Return objects with the following attributes given the recipe id
title (name)
description (text)
image (string of image url)

servings (int)
readyInMinutes (int)
preperationMinutes (int)

vegan (bool)
vegetarian (bool)
glutenFree (bool)
veryHealthy (bool)

ingredientIds (array of ingredient id strings)
instructionIds (array of instruction id strings)

*/

const RecipeObject = (props) => {
  const [recipeData, setRecipeData] = useState(null)
  const [ingredientData, setIngredientData] = useState(null)
  const [instructionData, setInstructionData] = useState(null)
  const { recipe_id } = props

  const getRecipeData = async () => {
    let { data, error } = await supabase
    .from('recipes')
    .select('*')
    .eq('id', recipe_id)
    if (error) {
      console.log(error)
    } else {
      setRecipeData(data)
    }
  }

  const getIngredientData = async (id) => {
    let { data, error } = await supabase
    .from('ingredients')
    .select('*')
    .eq('id', recipe_id)
  }

  useEffect( () => {
    getRecipeData()
  }, [])

  useEffect( () => {
    if (recipeData === null) {
      return
    }

  }, [recipeData])



  console.log('recipedata: ', recipeData)

  return (
    <>
      <p>hello</p>
    </>
  )
}

export default RecipeObject