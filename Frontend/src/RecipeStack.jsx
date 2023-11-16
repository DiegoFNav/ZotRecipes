import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Stack from './components/Stack.jsx'


const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Stack />
  </React.StrictMode>,

)

// root.render(sb(Stack))

