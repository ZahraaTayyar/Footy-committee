import React from 'react';
import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <h3>Contact us</h3>
      <div className="footer-socials-container">
        <Link to="https://github.com/ZahraaTayyar/Footy-committee">
          <i className="footer-icon fa-brands fa-square-github"></i>
        </Link>

        <Link to="https://www.linkedin.com/in/zahraatayyar/">
          <i className="footer-icon fa-brands fa-linkedin"></i>
        </Link>

        <Link to="https://www.instagram.com/zahraatayyar/">
          <i className="footer-icon fa-brands fa-square-instagram"></i>
        </Link>
      </div>
    </footer>
  );
}

export default Footer
