import React from "react";
import "../styles/ContactUs.css";
import FormContact from "./FormContact";

function ContactUs() {
  return (
    <div className="contact-us">
      <div className="hero">
        <img
          src="https://thumbs.dreamstime.com/b/multi-generation-black-family-playing-football-garden-multi-generation-black-family-playing-football-garden-134199673.jpg"
          alt="family playing football"
          className="hero-image"
        ></img>
        <div className="hero-text">
          <h1>Get in touch</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            voluptas delectus laudantium, maxime totam ipsam, tempora nostrum,
            nobis voluptate minima sequi consectetur quas sit eius et sed
            architecto mollitia aspernatur.
          </p>
        </div>
      </div>

      <div className="bottom-half">
        <div className="address">
          <img
            src="https://codeyourfuture.io/wp-content/uploads/2020/07/FSC-hero.png"
            alt="cyf"
          ></img>
          <div className="address-text">
            <h2>Code Your Future</h2>
            <hr />
            <p>69 Wilson St</p>
            <p>London</p>
            <p>EC2A 2BB</p>
          </div>
        </div>

        <div className="contact-form-container">
          <FormContact />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
