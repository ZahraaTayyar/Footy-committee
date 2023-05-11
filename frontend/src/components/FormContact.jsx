import React, { useState } from 'react';
import "../styles/FormContact.css";

function FormContact() {
  const [formContactData, setFormContactData] = useState({name: "", email: "", message: ""})

  function handleChange(e) {
    const {name, value } = e.target;
    setFormContactData((prevFormContactData) => ({...prevFormContactData, [name]: value }))
  }

    function handleSubmit(e) {
      e.preventDefault();
      alert(`Your message with input of: "Name: ${formContactData.name}, Email:${formContactData.email}. Message: ${formContactData.message}" has been delivered`);
      setFormContactData({ name: "", email: "", message: "" });
    }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h2>Send us a message</h2>

      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formContactData.name}
        onChange={handleChange}
        placeholder="insert your name..."
        required
      ></input>

      <label htmlFor='email'>Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formContactData.email}
        onChange={handleChange}
        placeholder="insert your email..."
        required
      />

      <label htmlFor='message'>Message:</label>
      <textarea
        id="message"
        name="message"
        value={formContactData.message}
        onChange={handleChange}
        placeholder="Write your message here..."
        required
      ></textarea>

      <button type='submit' className="contact-submit-btn">Submit</button>
    </form>
  );
}

export default FormContact;
