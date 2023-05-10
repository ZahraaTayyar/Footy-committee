import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav-container">
      <Link to="/" className="link">
        <div className="nav-logo">
          <span>
            F<i className="logo-ball fa-solid fa-earth-americas"></i>
            <i className="logo-ball fa-solid fa-earth-americas"></i>TY
          </span>
          <span> COMMITTEE</span>
        </div>
      </Link>

      <div className="nav-right">
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="nav-list-item">
            <Link to="/joinus" className="link">
              Join Us
            </Link>
          </li>
          <li className="nav-list-item">
            <Link to="/" className="link">
              Volunteer
            </Link>
          </li>
          <li className="nav-list-item">
            <Link to="/" className="link">
              Contact Us
            </Link>
          </li>
        </ul>

        <div className="nav-socials-container">
          <Link
            to="https://github.com/ZahraaTayyar/Footy-committee"
            className="link"
          >
            <i className="socials-icon fa-brands fa-square-github"></i>
          </Link>

          <Link to="https://www.linkedin.com/in/zahraatayyar/" className="link">
            <i className="socials-icon fa-brands fa-linkedin"></i>
          </Link>

          <Link to="https://www.instagram.com/zahraatayyar/" className="link">
            <i className="socials-icon fa-brands fa-square-instagram"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
