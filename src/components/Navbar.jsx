import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Events from "../components/Events";
import Contact from "../components/Contact";
import "../styles/Navbar.css";
import Logo from  '../images/skull.png';

const Navbar = () => {
  return (
    <BrowserRouter>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light sticky-top">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
                <div className="brand-name">
                <img className="navbar-logo" src={Logo} alt="Logo" />
                <span>WOLFAME 2K22</span>
                </div>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end flex-grow-1 pe-3">
                <Link className="nav-link active" aria-current="page" to="/">
                <span id='nav-item'>Home</span>
                </Link>
                <Link className="nav-link active" to="/about">
                <span id='nav-item'>About</span>
                </Link>
                <Link className="nav-link active" to="/events">
                <span id='nav-item'>Events</span>
                </Link>
                <Link className="nav-link active" to="/contact">
                <span id='nav-item'>Contact</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="contact" element={<Contact />} />
          <Route exact path="events" element={<Events />} />
          <Route exact path="about" element={<About />} />
          <Route exact path="" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Navbar;
