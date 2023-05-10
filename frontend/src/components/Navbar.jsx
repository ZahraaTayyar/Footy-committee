import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="nav-container">
      <div className="nav-logo">
        <span>
          F<i className="logo-ball fa-solid fa-earth-americas"></i>
          <i className="logo-ball fa-solid fa-earth-americas"></i>TY
        </span>
        <span> COMMITTEE</span>
      </div>

      <div className="nav-right">
        <ul className="nav-list">
          <li className="nav-list-item">Join Us</li>
          <li className="nav-list-item">Volunteer</li>
          <li className="nav-list-item">Contact Us</li>
        </ul>

        <div className="nav-socials-container">
          <i className="socials-icon fa-brands fa-square-github"></i>
          <i className="socials-icon fa-brands fa-linkedin"></i>
          <i className="socials-icon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
