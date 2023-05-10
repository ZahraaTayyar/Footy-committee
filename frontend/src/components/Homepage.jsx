import { style } from "@mui/system";
import React from "react";
import "../styles/Homepage.css";

function Homepage() {
  return (
    <div className="homepage">
      <div className="home-image">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Football_in_Bloomington%2C_Indiana%2C_1996.jpg"
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
      </div>
    </div>
  );
}

export default Homepage;
