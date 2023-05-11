import React from "react";
import "../styles/FormJoin.css";

function FormJoin() {
  return (
    <div className="join-form">
      <div className="join-left">
        <h1>Volunteer with us</h1>
        <p>
          Do you want to join our community as a volunteer? We are looking for
          people with ambition, creativity and commitment to help deliver our
          community. Please fill out the form below
        </p>

        <div className="join-form-container">
          <form>
            <label>First Name:</label>
            <input type="text" placeholder="Your name..." id="name"></input>

            <label>Last Name:</label>
            <input
              type="text"
              placeholder="Your last name..."
              id="lastname"
            ></input>

            <label>Age:</label>
            <input type="number" placeholder="18" id="age"></input>

            <label>Email:</label>
            <input type="email" placeholder="Your email..." id="email"></input>

            <label>Position:</label>
            <select id="position" name="position">
              <option value="center midfielder">Center Midfielder</option>
              <option value="defender">Defender</option>
              <option value="Midfielder">Midfielder</option>
              <option value="Center Forward">Center Forward</option>
              <option value="Striker">Striker</option>
              <option value="goal keeper">Goal keeper</option>
              <option value="sweeper">Sweeper</option>
              <option value="other">other</option>
            </select>

            <label>Where did you hear about us?</label>
            <select id="where" name="where">
              <option value="">Please select one</option>
              <option value="friend">Friend</option>
              <option value="company-event">Company Event</option>
              <option value="colleague">Colleague</option>
              <option value="other">other</option>
            </select>

            <label>Any special requests:</label>
            <textarea></textarea>

            <button>Submit</button>
          </form>
        </div>
      </div>

      <div className="join-right">
        <img
          src="https://news.liverpool.ac.uk/wp-content/uploads/2019/03/FootballCoach.jpg"
          alt="hands put together"
          className="join-image"
        />
      </div>
    </div>
  );
}

export default FormJoin;
