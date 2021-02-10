import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
          alt="Logo"
        />
      </header>
    );
  }
}

export default Header;
