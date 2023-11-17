import './App.css'
import Sidebar from './components/Sidebar'
import { useRoutes } from 'react-router-dom'
import Stack from './components/Stack.jsx'
import MainPage from './components/MainPage.jsx'
import ReturnRecipe from '../backend/supabase.jsx'

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
      path: '/test',
      element: <ReturnRecipe/>
    },
    {
      path:  "*",
      element: <div><h3>Error Occured, please try again</h3></div>
    },

  ])


  return (
    <div className='App'>
      <Sidebar/>
      {routes}

    </div>
  )
}

export default App
