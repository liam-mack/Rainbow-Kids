import React, { useState, useEffect } from "react";
import { Link} from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../icons/logo.svg";
import "./NavTabs.scss";

function NavTabs() {

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
      <Link to="/" className="navbar-logo" onClick={closeHamburger}>
            <img height={50} src={logo} alt="logo" />
          </Link>
        <div className="navbar-container container">
          {/* <Link to="/" className="navbar-logo" onClick={closeHamburger}>
            <img height={50} src={logo} alt="logo" />
          </Link> */}
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
                Programs & Registration
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/News" className="nav-links" onClick={closeHamburger}>
                News & Events
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
  );
}

export default NavTabs;
