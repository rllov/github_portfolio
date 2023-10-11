import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid " id="top-menu">
          <Link className="navbar-brand" to="/about" id="link">
            RL
          </Link>

          <div class="collapse navbar-collapse" id="navbarSupportedContent1">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" id="link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id="link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id="link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
