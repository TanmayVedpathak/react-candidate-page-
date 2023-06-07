import React, { useState, useEffect } from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import logo from "../images/Header-Logo.png";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [addClass, setAddClass] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 1000;

  const toggleNavbar = () => {
    console.log("1. ", window.innerWidth);
    console.log("2. ", toggle);
    console.log("3. ", addClass);
    setToggle(!toggle);
  };

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    width < breakpoint ? setAddClass(true) : setAddClass(false);
  }, [width]);

  return (
    <nav className="navbar">
      <img className="header-logo" src={logo} alt="logo" />
      <div
        className={`navbar-toggle ${
          addClass ? (toggle ? "toggle-down" : "toggle-up") : ""
        }`}
      >
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
      </div>
      <div onClick={toggleNavbar} className="bars">
        <MDBIcon fas icon="bars" />
      </div>
    </nav>
  );
}

export default Navbar;
