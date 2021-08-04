import React from "react";
import Logo from '../../assets/expice.png';
import User from '../../assets/User-icon.svg';
const Header = (props) => {
  return <header className="header-section container">
      <div className="logo-section">
          <img src={Logo} alt="Logo"/>
      </div>
      <nav className="navigation">
          <ul className="navigation--list">
              <li className="navigation--list__item">Menu One</li>
              <li className="navigation--list__item">Menu Two</li>
              <li className="navigation--list__item">Menu three</li>
              <li className="navigation--list__item">Menu Four</li>
          </ul>
      </nav>
      <div className="user-login">
          <div className="user-login__image">
            <img src={User}/>
          </div>
          <a href="#" onClick={props.show}>User</a>
      </div>
  </header>;
};

export default Header;
