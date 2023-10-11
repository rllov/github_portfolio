import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

const Nav = () => {
  return (
    <>
      {/* <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid " id="top-menu">
          <Link className="navbar-brand" to="/about" id="link">
            RL
            <button
              className="navbar-toggler ms-auto"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarToggleExternalContent2"
              aria-controls="navbarToggleExternalContent2"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>
          </Link>
        </div>

        <div className="collapse navbar-collapse" id="navbarToggleExternalContent2">
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
      </nav> */}
      <nav className="navbar navbar-expand-lg" id="top-menu">
        <Link className="navbar-brand" id="link" to="/about">
          RL
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link className="nav-link" id="link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" id="link" className="nav-link">
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
      </nav>
    </>
  );
};

export default Nav;
