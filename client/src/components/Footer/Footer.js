import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <Link to="/">
            <h1>Home</h1>
          </Link>
          <Link to="/About">
            <h1>About Us</h1>
          </Link>
          <Link to="/Programs">
            <h1>Programs and Registration</h1>
          </Link>
          <Link to="/News">
            <h1>News and Events</h1>
          </Link>
          <Link to="/Staff">
            <h1>The Team</h1>
          </Link>
          <Link to="/Contact">
            <h1>Contact Us</h1>
          </Link>
        </div>
      </div>

      <div className="footer-socials">
        <div className="footer-logo">
          <img
            src="/images/FooterLogo.png"
            alt="Rainbow Kids Logo"
            className="footerLogo"
          ></img>
        </div>
        <div className="footer-socials-wrapper">
          <small className="footer-rights">Copyright © 2021 Rainbow Kidschool</small>
          <br></br>
          <small className="footer-rights">All Rights Reserved.</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fa fa-facebook-square" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fa fa-instagram" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fa fa-twitter" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
