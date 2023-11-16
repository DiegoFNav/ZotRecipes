import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
        <nav className="sidebar">
            <div>
            <div className="namecont">
                <h1 className="flavrr">flavrr</h1>
            </div>
                <div className="image-text">
                    {/* <span class="image">
                        <img class="acc-pic" src="icons/profilepics.jpeg" alt="accpic"></img>
                        <p class="name">john doe</p>
                        <p class="username">@ilovegenshin</p>
                    </span> */}
                </div>

            <div className="userinfo">
                <img className="acc-pic" src="icons/profilepics.jpeg" alt="accpic"></img>
                <p className="name"> john doe</p>
                <p className="username">@ilovegenshin</p>
            </div>

            <div className="appsections">
                <div className="accountcont">
                    <img src="icons/profileacc.png"></img>
                    <p className="account">Account</p>
                </div>

                <div className="explorecont">
                    <img className="search"src="icons/home.png"></img>
                    <p className="explore">Explore</p>
                </div>

                <div className="favoritescont">
                    <img src="icons/profileacc.png"></img>
                    <p className="favorites">Favorites</p>
                </div>

                <div className="chatcont">
                    <img src="icons/profileacc.png"></img>
                    <p className="chat">Chat</p>
                </div>

                <div className="settingscont">
                    <img src="icons/profileacc.png"></img>
                    <p className="settings">Settings</p>
                </div>

            </div>
            </div>
            <Link to="/">Home</Link>
            <Link to="/recipe-stack">Recipes</Link>
        </nav> 
  )
}

export default Sidebar