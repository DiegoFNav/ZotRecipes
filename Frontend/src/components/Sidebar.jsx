import { useState } from 'react';
import { Link } from 'react-router-dom';


{/*Sidebar Code */}

const Sidebar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [selectedSection, setSelectedSection] = useState(null);

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  {/*Sidebar Code */}
  return (
    <div className={`wrapper ${sidebarVisible ? 'sidebar-visible' : ''}`}>
      <div className={`arrow ${sidebarVisible ? 'arrow-active' : ''}`} onClick={toggleSidebar}>
        {sidebarVisible ? '❮' : '❯'} {/* Change arrow direction based on visibility */}
      </div>
      <nav className={`sidebar ${sidebarVisible ? 'active' : 'sidebar-minimized'}`}>
        {sidebarVisible && (
          <div className="namecont">
            <h1 className="flavrr">flavrr</h1>
          </div>
        )}
        

        {sidebarVisible && (
          <div className="userinfo">
            <img className="acc-pic" src="icons/profilepics.jpeg" alt="accpic" />
            <p className="name">john doe</p>
            <p className="username">@ilovegenshin</p>
          </div>
        )}

        {!sidebarVisible ? (
          <div className="flogo-wrapper">
            <div>
              <p className="flogo">f.</p>
            </div>
          </div>
        ): null}

        <div className={`appsections ${sidebarVisible ? '' : 'sidebar-minimized additional-class'}`}>
          <Link
            to="/"
            className={`accountcont ${selectedSection === 'account' ? 'active' : ''}`}
            onClick={() => handleSectionClick('account')}
          >
            <img className="home" src="icons/home.png" alt="account" />
            {sidebarVisible && <p className="hometext">Home</p>}
          </Link>

          <Link
            to="/recipe-stack"
            className={`explorecont ${selectedSection === 'explore' ? 'active' : ''}`}
            onClick={() => handleSectionClick('explore')}
          >
            <img className="search" src="icons/magnifyingglass.png" alt="explore" />
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

  );
};

export default Sidebar;