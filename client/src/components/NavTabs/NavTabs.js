import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../icons/logo.svg";
import "./NavTabs.css";

function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  const [button, setButton] = useState(true);

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  
  useEffect( ()=> {
    showHamburger()
  }, []);
  
  const closeHamburger = () => setClick(false);
  const showHamburger = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true)
    }
  }

  

  window.addEventListener('resize', showHamburger);

  return (

    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo" onClick={closeHamburger}>
            <img height={50} src={logo} alt="logo" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
          { click ? <FaTimes /> : <FaBars /> }
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeHamburger}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-links" onClick={closeHamburger}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Programs" className="nav-links" onClick={closeHamburger}>
                Programs/Registration
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/News" className="nav-links" onClick={closeHamburger}>
                News and Events
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Staff" className="nav-links" onClick={closeHamburger}>
                The Team
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Contact" className="nav-links" onClick={closeHamburger}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>

    // <ul className="nav nav-tabs">
    //   <li className="nav-item">
    //     <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
    //       Home
    //     </Link>
    //   </li>
    //   <li className="nav-item">
    //     <Link
    //       to="/about"
    //       className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
    //     >
    //       About
    //     </Link>
    //   </li>
    //   <li className="nav-item">
    //     <Link
    //       to="/blog"
    //       className={location.pathname === "/blog" ? "nav-link active" : "nav-link"}
    //     >
    //       Blog
    //     </Link>
    //   </li>
    //   <li className="nav-item">
    //     <Link
    //       to="/contact"
    //       className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
    //     >
    //       Contact
    //     </Link>
    //   </li>
    //   <li className="nav-item">
    //     <Link
    //       to="/contact/learn"
    //       className={location.pathname === "/contact/learn" ? "nav-link active" : "nav-link"}
    //     >
    //       Learn
    //     </Link>
    //   </li>
    // </ul>
  );
}

export default NavTabs;
