import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ReturnRecipe from '../database/supabase'
function App() {

  return (
    <>
      <ReturnRecipe/>
    </>
  )
}

export default App
