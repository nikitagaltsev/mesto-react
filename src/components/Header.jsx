import React from "react";
import logo from '../images/logo.png';

function Header() {
  return (
    <header className="header root__section">
      <img src={logo} alt="mesto logo" className="logo" />
    </header>
  )
}

export default Header;