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
            
        
        </nav> 
  )
}

export default Sidebar