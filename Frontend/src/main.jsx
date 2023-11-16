import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import Sidebar from './components/Sidebar.jsx'
import './App.css'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'

const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,

)

// root.render(sb(Sidebar))