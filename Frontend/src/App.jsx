import './App.css'
import Sidebar from './components/Sidebar'
import { useRoutes } from 'react-router-dom'
import Stack from './components/Stack.jsx'
import MainPage from './components/MainPage.jsx'
import ReturnRecipe from '../backend/supabase.jsx'
import RecipeObject from '../backend/getData.jsx'

function App() {

  const routes = useRoutes([
    {
      path:  "/",
      element: <MainPage />
    },
    {
      path:  "/recipe-stack",
      element: <Stack />
    },    
    {
      path: '/testSavingRecipe',
      element: <ReturnRecipe/>
    },
    {
      path: '/testGetRecipe',
      element: <RecipeObject recipe_id='157375'/>
    },
    {
      path:  "*",
      element: <div><h3>Error Occured, please try again</h3></div>
    },

  ])


  return (
    <div className='App'>
      {routes}
      <Sidebar/>

    </div>
  )
}

export default App
