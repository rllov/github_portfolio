import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

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
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
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
