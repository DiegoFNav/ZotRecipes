import { supabase } from '../client.js'

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
  let { id, title, description, image_url, protein, calories, fat, sodium, gluten_free, dairy_free, cuisine, cooking_minutes, cheap, health_score, preparation_minutes, servings, vegan, vegetarian, extendedIngredients, instructions } = data


  console.log(data)
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
  saveToRecipe()
}
saveRecipe(getRandomRecipe())


const ReturnRecipe = async () => {
  const recipeData = await getRandomRecipe();
  console.log(recipeData)

  const savedData = () => {
    saveRecipe(recipeData);
  }

  return (
    <>
    <p>{recipeData && savedData()}</p>
    </>
  )
}

export default ReturnRecipe


/* recipes db attributes
id, title, description, image_url, protein, calories, fat, sodium, gluten_free, dairy_free, cuisine, cooking_minutes, cheap, health_score, preparation_minutes, servings, vegan, vegetarian, ingredientIds, instructionIds




*/
