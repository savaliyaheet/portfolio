import React, { useState } from "react";
import "./navbar.css";
import { BsMoon } from "react-icons/bs";

function Navbar() {
  const [fixSidebar, setFixSidebar] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 18) {
      setFixSidebar(true);
    } else {
      setFixSidebar(false);
    }
  });

  return (
    <div className={`navbar ${fixSidebar && "navbar-fixed"}`}>
      <div className="container-lg">
        <div className="navbar-logo">
          <span className="navbar-logo-front">Heet</span>Savaliya
        </div>

        <ul className="navbar-links m-0">
          <li className="">
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#">Experience</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>

        <div className="navbar-left">
          <BsMoon className="navbar-icon" />
          <div className="navbar-btn">
            <p className="m-0">Resume</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
