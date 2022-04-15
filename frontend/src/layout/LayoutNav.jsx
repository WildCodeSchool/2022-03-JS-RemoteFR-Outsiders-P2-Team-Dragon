import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Accueil from "../pages/Accueil";
import Bassin from "../pages/Bassin";
import Suivi from "../pages/Suivi";
import Feedback from "../pages/Feedback";
import logo from "../assets/logo_Find_Tech.jpg";
import boussoleToggle from "../assets/boussole.png";
import "./LayoutNav.css";

function Layout() {
  const [nav, setNav] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  useEffect(() => {}, []);

  return (
    <div className="div-nav">
      <div className="div-logo">
        <img src={logo} alt="logo" className="img-logo" />
      </div>

      <div className="div-btn-toggle">
        <button
          type="button"
          nav={nav}
          setNav={setNav}
          onClick={toggleNav}
          className="btn-toggle"
        >
          {" "}
          <img src={boussoleToggle} alt="boussole" className="img-boussole" />
        </button>

        {toggleMenu && (
          <nav className="liste-nav">
            <Link to="/Accueil" className="items">
              <Accueil />
            </Link>
            <Link to="/Bassin" className="items">
              <Bassin />
            </Link>
            <Link to="/Suivi" className="items">
              <Suivi />
            </Link>
            <Link to="/Feedback" className="items">
              <Feedback />
            </Link>
          </nav>
        )}
      </div>
    </div>
  );
}

export default Layout;
