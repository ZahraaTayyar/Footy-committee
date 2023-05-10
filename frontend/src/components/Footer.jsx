import React from 'react';
import "../styles/Footer.css";

function Footer() {
  return (
    <footer>
      <h3>Contact us</h3>
      <div className="footer-socials-container">
        <i className="socials-icon fa-brands fa-square-github"></i>
        <i className="socials-icon fa-brands fa-linkedin"></i>
        <i className="socials-icon fa-brands fa-square-instagram"></i>
      </div>
    </footer>
  );
}

export default Footer
