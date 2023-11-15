const spoonacularapiKey = '9c4a7ac652404239b01cc2749aeafd5f'
const spoonacularURL = ''

const randomRecipeURL = 'https://api.spoonacular.com/recipes/random'


const getData = (url, apiKey={spoonacularapiKey}) => {
  let recipeData;
  fetch(`${randomRecipeURL}?apiKey=${spoonacularapiKey}`)
    .then( repsonse =>  repsonse.json() )
    .then( data => recipeData=data )
    .catch( error => console.log(error) )
  return recipeData;
}
