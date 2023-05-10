import React from "react";
import "../styles/Volunteers.css";

function Volunteer() {
  return (
    <div className="volunteers">
      <div className="volunteers-left">
        <h1>Volunteer with us</h1>
        <p>
          Do you want to join our community as a volunteer? We are looking for
          people with ambition, creativity and commitment to help deliver our
          community. Please fill out the form below
        </p>
        <div className="form-container">
          <form>
            <label>First Name:</label>
            <input type="text" placeholder="Your name..." id="name"></input>
            <label>Last Name:</label>
            <input
              type="text"
              placeholder="Your last name..."
              id="lastname"
            ></input>
            <label>Email:</label>
            <input type="email" placeholder="Your email..." id="email"></input>
            <label>Where did you hear about us?</label>
            <select id="where" name="where">
              <option value="">Please select one</option>
              <option value="friend">Friend</option>
              <option value="company-event">Company Event</option>
              <option value="colleague">Colleague</option>
              <option value="other">other</option>
            </select>
            <label>Let us know how you want to help us:</label>
            <textarea></textarea>

            <button>Submit</button>
          </form>
        </div>
      </div>

      <div className="volunteers-right">
        <img
          src="https://crownsavers.co.uk/login/uploads/Volunteer.jpg"
          alt="hands put together"
          className="volunteers-image"
        />
      </div>
    </div>
  );
}

export default Volunteer;
