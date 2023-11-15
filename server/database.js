const spoonacularapiKey = '9c4a7ac652404239b01cc2749aeafd5f'
const spoonacularURL = ''

const randomRecipeURL = 'https://api.spoonacular.com/recipes/random'


const getData = (url, apiKey=spoonacularapiKey) => {
  return fetch(`${url}?apiKey=${apiKey}`)
    .then( repsonse =>  repsonse.json() )
    .then( data => {
      console.log(data)
      return data })
    .catch( error => console.log(error) )
}



getData(randomRecipeURL)
/* 

*/
