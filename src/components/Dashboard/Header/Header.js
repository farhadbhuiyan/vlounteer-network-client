import React from 'react';
import './Header.css';
import logo from '../../../images/logos/logo.png';

const Header = () => {
  return (
    <div style={{background: '#FFF'}} className="container-fluid d-flex ">
      <div className="header-logo-container">
        <img src={logo} alt="" />
      </div>
      <div className="header-title-container">
        <h2>Volunteer register list</h2>
      </div>
    </div>
  );
};

export default Header;