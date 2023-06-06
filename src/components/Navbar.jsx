import React from "react";
import logo from "../images/Header-Logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <img className="header-logo" src={logo} alt="logo" />
      <div>
        <ul className="nav-list">
          <li className="list-item">Home</li>
          <li className="list-item">Canditate</li>
          <li className="list-item">Recuriter</li>
          <li className="list-item">Infrastructer</li>
          <li className="list-item">Career Counselling</li>
          <li className="list-item">Events</li>
          <li className="list-item">Blogs</li>
          <li className="list-item">Contact us</li>
        </ul>
      </div>
      <div>
        <button className="nav-btn">My profile</button>
        <button className="nav-btn">Log out</button>
      </div>
    </nav>
  );
}

export default Navbar;
