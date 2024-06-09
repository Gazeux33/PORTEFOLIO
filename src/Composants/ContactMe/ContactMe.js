import React, { useState } from "react";
import "./ContactMe.css";

import Footer from "../Footer/Footer";

function ContactMe() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const mailtoLink = `mailto:${email}?subject=Message From Website&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
      <div id="contact-me-container">
        <h1>Contact Me</h1>
        <div id="contacts-container">
          <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Your email</label>
                <input required name="email" id="email" type="text" value={email} onChange={handleEmailChange} />
              </div>
              <div className="form-group">
                <label htmlFor="textarea">Your Message</label>
                <textarea
                    required
                    cols="50"
                    rows="10"
                    id="textarea"
                    name="textarea"
                    value={message}
                    onChange={handleMessageChange}
                />
              </div>
              <button type="submit" className="form-submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="global-contact">
          <Footer />
        </div>
      </div>
  );
}

export default ContactMe;