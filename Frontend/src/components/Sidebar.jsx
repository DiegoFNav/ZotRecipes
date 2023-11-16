import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
        <nav class="sidebar">
            <div>
            <div class="namecont">
                <h1 class="flavrr">flavrr</h1>
            </div>
                <div class="image-text">
                    {/* <span class="image">
                        <img class="acc-pic" src="icons/profilepics.jpeg" alt="accpic"></img>
                        <p class="name">john doe</p>
                        <p class="username">@ilovegenshin</p>
                    </span> */}
                </div>

            <div class="userinfo">
                <img class="acc-pic" src="icons/profilepics.jpeg" alt="accpic"></img>
                <p class="name"> john doe</p>
                <p class="username">@ilovegenshin</p>
            </div>

            <div class="appsections">
                <div class="accountcont">
                    <img src="icons/profileacc.png"></img>
                    <p class="account">Account</p>
                </div>

                <div class="explorecont">
                    <img class="search"src="icons/home.png"></img>
                    <p class="explore">Explore</p>
                </div>

                <div class="favoritescont">
                    <img src="icons/profileacc.png"></img>
                    <p class="favorites">Favorites</p>
                </div>

                <div class="chatcont">
                    <img src="icons/profileacc.png"></img>
                    <p class="chat">Chat</p>
                </div>

                <div class="settingscont">
                    <img src="icons/profileacc.png"></img>
                    <p class="settings">Settings</p>
                </div>

            </div>
            </div>
            <Link to="/">Home</Link>
            <Link to="/recipe-stack">Recipes</Link>
        </nav> 
  )
}

export default Sidebar