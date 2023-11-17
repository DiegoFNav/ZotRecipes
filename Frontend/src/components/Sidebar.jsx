import { Link } from 'react-router-dom'
import { useState } from 'react';

const Sidebar = () => {
  const [selectedSection, setSelectedSection] = useState('account');

  const handleSectionClick = (section) => {
    setSelectedSection(section);
    // You can add logic here to handle the click event for each section if needed
  };

  return (
    <nav className="sidebar">
      <div className="namecont">
        <h1 className="flavrr">flavrr</h1>
      </div>

      <div className="userinfo">
        <img className="acc-pic" src="icons/profilepics.jpeg" alt="accpic" />
        <p className="name">john doe</p>
        <p className="username">@ilovegenshin</p>
      </div>

      <div className="appsections">
        <div className={`accountcont ${selectedSection === 'account' ? 'active' : ''}`} onClick={() => handleSectionClick('account')}>
          <img className="accpic" src="icons/profileacc.png" alt="account" />
          <p className="account">Account</p>
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

      <div className="appsections">
        <div className={`accountcont ${selectedSection === 'account' ? 'active' : ''}`} onClick={() => handleSectionClick('account')}>
          <img className="accpic" src="icons/profileacc.png" alt="account" />
          <p className="account">Account</p>
        </div>

        <div className={`explorecont ${selectedSection === 'explore' ? 'active' : ''}`} onClick={() => handleSectionClick('explore')}>
          <img className="search" src="icons/home.png" alt="explore" />
          <p className="explore">Explore</p>
        </div>

        <div className={`favoritescont ${selectedSection === 'favorites' ? 'active' : ''}`} onClick={() => handleSectionClick('favorites')}>
          <img className="heart" src="icons/heart.png" alt="favorites" />
          <p className="favorites">Favorites</p>
        </div>

        <div className={`chatcont ${selectedSection === 'chat' ? 'active' : ''}`} onClick={() => handleSectionClick('chat')}>
          <img className="msgpic" src="icons/msg.png" alt="chat" />
          <p className="chat">Chat</p>
        </div>

        <div className={`settingscont ${selectedSection === 'settings' ? 'active' : ''}`} onClick={() => handleSectionClick('settings')}>
          <img className="settingpic" src="icons/setting.png" alt="settings" />
          <p className="settings">Settings</p>
        </div>
      </div>
    </nav>

  );
};

export default Sidebar;