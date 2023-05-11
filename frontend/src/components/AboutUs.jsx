import React from "react";
import "../styles/AboutUs.css";
import Gallery from "./Gallery";

const galleryImages = [
  {
    img: "images/gallery1.jpg",
  },
  {
    img: "images/gallery2.jpg",
  },
  {
    img: "images/gallery3.jpg",
  },
  {
    img: "images/gallery4.jpg",
  },
  {
    img: "images/gallery5.jpg",
  },
  {
    img: "images/gallery6.jpg",
  },
];

function AboutUs() {
  return (
    <section className="about-us">
      <div className="description">
        <h2 className="about-us-title">About Us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          voluptate excepturi sint voluptatem eius inventore ipsum aperiam
          necessitatibus similique culpa, blanditiis a cupiditate alias! Est
          recusandae dolores molestias minima tenetur!
        </p>
      </div>

      <Gallery galleryImages={galleryImages} />

      <div className="cards-container">
        <div className="card" id="joincard">
          <img
            src={process.env.PUBLIC_URL + "/images/donate.png"}
            alt="footballers on a field"
          ></img>
          <h3>Play with us</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ab
            dicta assumenda maiores ducimus vel asperiores. Labore deserunt
            eaque animi maxime, aut tempore, accusantium suscipit quasi, nostrum
            commodi totam eveniet.
          </p>
        </div>

        <div className="card" id="volunteer">
          <img
            src={process.env.PUBLIC_URL + "/images/donate.png"}
            alt="footballers on a field"
          ></img>
          <h3>Volunteer with us</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ab
            dicta assumenda maiores ducimus vel asperiores. Labore deserunt
            eaque animi maxime, aut tempore, accusantium suscipit quasi, nostrum
            commodi totam eveniet.
          </p>
        </div>

        <div className="card" id="sponsor-card">
          <img
            src={process.env.PUBLIC_URL + "/images/donate.png"}
            alt="footballers on a field"
          ></img>
          <h3>Donate</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ab
            dicta assumenda maiores ducimus vel asperiores. Labore deserunt
            eaque animi maxime, aut tempore, accusantium suscipit quasi, nostrum
            commodi totam eveniet.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
