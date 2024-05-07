import React from 'react';
import './navbar.scss';
import Logo from '../../../assets/company-logo.svg';

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} className="App-logo" alt="logo" />
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item"><a href="#">Home</a></li>
        <li className="navbar-item"><a href="#">About</a></li>
      </ul>
    </nav>
  );
}

export default NavigationBar;