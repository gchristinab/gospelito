import React from "react";
import "./Header.css"; // Make sure to import the Header styling

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Gospelito</h1>
        <nav className="nav">
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#purchase" className="nav-link">
            Buy
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
