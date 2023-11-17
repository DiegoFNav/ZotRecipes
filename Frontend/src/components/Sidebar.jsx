import { Link } from 'react-router-dom'
import { useState } from 'react';
import React from 'react'

const Sidebar = () => {
  return (
        <nav class="sidebar">
            <div class="namecont">
                <h1 class="flavrr">flavrr</h1>
            </div>
            
            <div class="userinfo">
                <img class="acc-pic" src="icons/profilepics.jpeg" alt="accpic"></img>
                <p class="name"> john doe</p>
                <p class="username">@ilovegenshin</p>
            </div>

{/* Make sections for entire sidebar */}

            <div class="appsections">

                {/* Make sections for account container */}
                <div class="accountcont">
                    <img class="accpic" src="icons/profileacc.png"></img>
                    <p class="account">Account</p>
                </div>

                {/* Make sections for explore container */}
                <div class="explorecont">
                    <img class="search"src="icons/home.png"></img>
                        <p class="explore">Explore</p>
                </div>

                {/* Make sections for favorite container */}
                <div class="favoritescont">
                    <img class="heart" src="icons/heart.png"></img>
                    <p class="favorites">Favorites</p>
                </div>

                {/* Make sections for chat container */}
                <div class="chatcont">
                    <img class="msgpic" src="icons/msg.png"></img>
                    <p class="chat">Chat</p>
                </div>
                
                {/* Make sections for settings container */}
                <div class="settingscont">
                    <img class="settingpic" src="icons/setting.png"></img>
                    <p class="settings">Settings</p>
                </div>
                <Link to={"/recipe-stack"}>RECIPES</Link>
            </div>
            
        
        </nav> 
  )
}

export default Sidebar