import { Link } from "react-router-dom";
import "./contact.scss";

import React from "react";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="wrapper">
          <div className="header">
            <h1>Contact us</h1>
            <p>Enter the content of your message</p>
          </div>
          <div className="forms">
            <label htmlFor="">Message</label>
            <textarea
              cols="0"
              rows="10"
              className="input-two"
              placeholder="Type your message here"
              type="text"
            />
          </div>
          <div className="button-con">
            <button className="one">Send</button>
            <button className="two">Chat via whatsapp</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
