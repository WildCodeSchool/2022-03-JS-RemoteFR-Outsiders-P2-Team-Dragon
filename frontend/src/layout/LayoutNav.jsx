import React, { useState } from "react";
import Accueil from "../pages/Accueil";
import Bassin from "../pages/Bassin";
import Suivi from "../pages/Suivi";
import Feedback from "../pages/Feedback";
import logo from "../assets/logo_Find_Tech.jpg";
import boussoleToggle from "../assets/boussole.png";
import LayoutNav from "./LayoutNav.css";

function Layout({ children }) {
  const [nav, setNav] = useState(true);
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <>
      {children}
      <div className="div-nav">
        <div className="div-logo">
          <img src={logo} alt="logo" className="img-logo" />
        </div>

        <div className="div-btn-toggle">
          <button type="button" onClick={toggleNav} className="btn-toggle">
            {" "}
            <img src={boussoleToggle} alt="boussole" className="img-boussole" />
          </button>

          {toggleMenu && (
            <nav className="liste-nav">
              <li className="items">
                <Accueil />
              </li>
              <li className="items">
                <Bassin />
              </li>
              <li className="items">
                <Suivi />
              </li>
              <li className="items">
                <Feedback />
              </li>
            </nav>
          )}
        </div>
      </div>
    </>
  );
}

export default Layout;
