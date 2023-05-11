import React from "react";
import "../styles/Homepage.css";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="homepage">
      <div className="home-image">
        <img
          src={process.env.PUBLIC_URL + "/images/home.jpg"}
          // src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Football_in_Bloomington%2C_Indiana%2C_1996.jpg"
          alt="footballers playing"
        ></img>
      </div>

      <div className="home-text">
        <h1>
          <span>
            F<i className="logo-ball fa-solid fa-earth-americas"></i>
            <i className="logo-ball fa-solid fa-earth-americas"></i>TY
          </span>
          <span> COMMITTEE</span>
        </h1>

        <hr></hr>

        <h2>
          <span>it's more than football</span>
          <br></br>
          <span>it's community</span>
        </h2>
        <Link to="/join">
          <button>PLAY WITH US</button>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
