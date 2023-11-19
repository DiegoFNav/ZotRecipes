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

export const RecipeObject = (props) => {
  const [recipeData, setRecipeData] = useState(null)
  const [ingredientData, setIngredientData] = useState([])
  const [currentIngredient, setCurrentIngredient] = useState('')
  const [instructionData, setInstructionData] = useState(null)

  const [recipeObject, setRecipeObject] = useState(null)
  const [ initializeRecipeObject, setIntializeRecipeObject] = useState(false)
  const { recipe_id } = props

  const getTableData = async (tableName, id, setState) => {
    let { data, error } = await supabase
    .from(tableName)
    .select('*')
    .eq('id', id)
    if (error) {
      console.log(error)
    } else {
      console.log(data)
      setState(data[0])
    }
  }

  useEffect( () => {
    getTableData('recipes', recipe_id, setRecipeData)
  }, [])

  useEffect( () => {
    if (recipeData === null) {
      console.log('recipe data runs wen null')
      return
    }

    const instruction_id = recipeData.instructionsIds[0]
    getTableData('instructions', instruction_id, setInstructionData)

    recipeData.ingredientIds.map((ingredient_id, index) => {
      getTableData('ingredients', ingredient_id, setCurrentIngredient)
      console.log('currentingreidnt', currentIngredient)

      if (index === recipeData.ingredientIds.length-1) {
        setIntializeRecipeObject(true)
      }
    })

  }, [recipeData])

  useEffect( () => {
    if (currentIngredient === '') {
      return
    }
    setIngredientData([...ingredientData, currentIngredient.name])
  }, [currentIngredient])



  //console.log('recipedata: ', recipeData)
  //console.log('instruction: ', instructionData)
  console.log('ingredients: ', ingredientData)

  useEffect(() => {
    if (!(initializeRecipeObject && instructionData && recipeData && ingredientData.length === recipeData.ingredientIds.length)) {
      return
    }

    console.log('data: ', instructionData)
    const { id, title, description, image, cuisines, glutenFree, preparationMinutes, 
      readyInMinutes, servings, vegan, vegetarian, veryHealthy} = recipeData
    const { step_number, instruction } = instructionData
  
    setRecipeObject( {
      title: title,
      description: description, 
      image: image,
      cuisines: cuisines,
      glutenFree: glutenFree,
      preparationMinutes: preparationMinutes,
      readyInMinutes: readyInMinutes,
      servings: servings,
      vegan: vegan,
      vegetarian: vegetarian,
      veryHealthy: veryHealthy,
      step_number: step_number,
      instruction: instruction,
      ingredients: ingredientData
    })

  }, [initializeRecipeObject, instructionData, recipeData, ingredientData])

  return recipeData
}

