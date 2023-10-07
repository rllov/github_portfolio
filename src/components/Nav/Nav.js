import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

const Nav = () => {
  return (
    <>
      <div className="container-fluid  topnav-container">
        <div className="row row-container align-items-center">
          {/* Left Side (1 column) */}
          <div className="col-8 col-sm-6">
            <div className="logo">
              <Link
                to="/about"
                className="text-decoration-none  text-reset link"
              >
                RL
              </Link>
            </div>
          </div>

          {/* Right Side (3 columns) */}
          <div className="col" align="center">
            <div className="nav-elements">
              <ul className="list-unstyled">
                <li>
                  <Link to="/" className="text-decoration-none link">
                    Home
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col" align="center">
            <div className="nav-elements">
              <ul className="list-unstyled">
                <li>
                  <Link to="/about" className="text-decoration-none link">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col" align="center">
            <div className="nav-elements">
              <ul className="list-unstyled">
                <li>
                  <Link to="/contact" className="text-decoration-none link">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
