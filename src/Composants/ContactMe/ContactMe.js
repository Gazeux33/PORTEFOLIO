import React from "react";
import "./ContactMe.css";

import Footer from "../Footer/Footer";

function ContactMe() {
  return (
    <div id="contact-me-container">
      <h1>Contact Me</h1>
      <div id="contacts-container">
        <div className="form-container">
          <form className="form">
            <div className="form-group">
              <label for="email">Your email</label>
              <input required="" name="email" id="email" type="text" />
            </div>
            <div className="form-group">
              <label for="textarea">Your Message</label>
              <textarea
                required=""
                cols="50"
                rows="10"
                id="textarea"
                name="textarea"
              >
                {" "}
              </textarea>
            </div>
            <button type="submit" className="form-submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="global-contact">
        <Footer/>
      </div>

    </div>
  );
}

export default ContactMe;