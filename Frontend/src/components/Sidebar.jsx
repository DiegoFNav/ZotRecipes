import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
        <nav className="sidebar">
            <div>
                <h1 className="websitename">flavrr</h1>
                <div className="image-text">
                    <span className="image">
                        <img className="acc-pic" src="icons/profilepics.jpeg" alt="accpic"></img>
                        <p className="name">john doe</p>
                        <p className="username">@ilovegenshin</p>
                        
                    </span>
                </div>
            </div>
            <Link to="/">Home</Link>
            <Link to="/recipe-stack">Recipes</Link>
        </nav> 
  )
}

export default Sidebar