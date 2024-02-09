import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";
import pfp from "../../images/profile.png";

const Contact = () => {
  return (
    <div className="social_container">
      <div id="social_card">
        <div className="social_card_info">
          <div id="pfp">
            <img src={pfp} alt="Ryan Lov" />
          </div>
          <div id="name">Ryan Lov</div>
          <div id="location">El Monte, California</div>
          <div id="bio">Motivated Front-end developer</div>
        </div>
        <div className="social_card_links">
          <Link to="https://github.com/rllov" target="_blank">
            <div id="links">Github</div>
          </Link>

          <Link to="https://www.linkedin.com/in/ryanlov/" target="_blank">
            <div id="links">LinkedIn</div>
          </Link>
          <Link to="https://www.instagram.com/ryan_lov168/" target="_blank">
            <div id="links">Instagram</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
