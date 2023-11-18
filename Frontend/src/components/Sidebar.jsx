import { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [selectedSection, setSelectedSection] = useState(null);

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className={`Sidebar `}>
        <div className={`arrow ${sidebarVisible ? 'arrow-active' : ''}`} onClick={toggleSidebar}>
          {sidebarVisible ? '❮' : '❯'} {/* Change arrow direction based on visibility */}
        </div>

      <div className={`wrapper ${sidebarVisible ? '' : 'Sidebar-minimized'} ${sidebarVisible ? 'sidebar-visible' : ''}`}>

        <nav className={`sidebar ${sidebarVisible ? 'active' : ''}`}>
          <div className="namecont">
            <h1 className="flavrr">flavrr</h1>
          </div>

          <div className="userinfo">
            <img className="acc-pic" src="icons/profilepics.jpeg" alt="accpic" />
            <p className="name">john doe</p>
            <p className="username">@ilovegenshin</p>
          </div>

          <div className={`appsections ${sidebarVisible ? '' : 'sidebar-minimized'}`}>
            <Link
              to="/account"
              className={`accountcont ${selectedSection === 'account' ? 'active' : ''}`}
              onClick={() => handleSectionClick('account')}
            >
              <img className="accpic" src="icons/profileacc.png" alt="account" />
              {sidebarVisible && <p className="account">Account</p>}
            </Link>

            <Link
              to="/recipe-stack"
              className={`explorecont ${selectedSection === 'explore' ? 'active' : ''}`}
              onClick={() => handleSectionClick('explore')}
            >
              <img className="search" src="icons/home.png" alt="explore" />
              {sidebarVisible && <p className="explore">Explore</p>}
            </Link>

            <Link
              to="/favorites"
              className={`favoritescont ${selectedSection === 'favorites' ? 'active' : ''}`}
              onClick={() => handleSectionClick('favorites')}
            >
              <img className="heart" src="icons/heart.png" alt="favorites" />
              {sidebarVisible && <p className="favorites">Favorites</p>}
            </Link>

            <Link
              to="/chat"
              className={`chatcont ${selectedSection === 'chat' ? 'active' : ''}`}
              onClick={() => handleSectionClick('chat')}
            >
              <img className="msgpic" src="icons/msg.png" alt="chat" />
              {sidebarVisible && <p className="chat">Chat</p>}
            </Link>

            <Link
              to="/settings"
              className={`settingscont ${selectedSection === 'settings' ? 'active' : ''}`}
              onClick={() => handleSectionClick('settings')}
            >
              <img className="settingpic" src="icons/setting.png" alt="settings" />
              {sidebarVisible && <p className="settings">Settings</p>}
            </Link>
          </div>
        </nav>
      </div>

    </div>
  );
};

export default Sidebar;