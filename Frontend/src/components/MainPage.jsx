
import MainPageCard from './MainPageCard.jsx';
import { supabase } from '../../backend/client.js';
import { useEffect, useState, useRef } from 'react'
import './MainPage.css'


const MainPage = () => {
  const [recipes, setRecipes] = useState([]);
  const cardsContainerRef = useRef(null);


    useEffect(()=>{
        // Function to fetch recipes from the API
      const fetchRecipes = async () => {
        try {
          const {data:recipeData, error} = await supabase 
            .from("recipes")
            .select()
            .order('id', { ascending: true })
          console.log(recipeData)
          setRecipes(recipeData)
  
        } catch (error) {
          console.error('Error fetching recipes:', error);
        }
      };
      fetchRecipes()
    },[])

    const scroll = (direction) => {
      const { current: container } = cardsContainerRef;
      const scrollAmount = container.offsetWidth;
      container.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
    };


  return (
    // <div className='mainPage'>
    //     <h1 className='mainPage-header'>HomePage</h1>
    //     {recipes ? (
    //     recipes.map(recipe => (
    //         <MainPageCard key={recipe.id} name={recipe.title} imageUrl={recipe.image} />
    //     ))
    // ) : (
    //     <h2>Recipes not loading</h2>
    // )}
    // </div>
    <div className='mainPage'>
    <h1>HomePage</h1>
    <div className="scroll-button left" onClick={() => scroll('left')}>&lt;</div>
    <div className="cards-container" ref={cardsContainerRef}>
      {recipes.length > 0 ? (
        recipes.map(recipe => (
          <div className="card-wrapper" key={recipe.id}> {/* Move the key prop here */}
            <MainPageCard name={recipe.title} imageUrl={recipe.image} />
          </div>
        ))
      ) : (
        <h2>Recipes not loading</h2>
      )}
    <div>
      <input class="searchbar" type="text" placeholder="What would you like to eat?"></input>
    </div>
    <div className="scroll-button right" onClick={() => scroll('right')}>&gt;</div>
    </div>
  </div>
  )


}

export default MainPage
