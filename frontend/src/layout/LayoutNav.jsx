import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import logo from "../assets/logo_Find_Tech.jpg";
import boussoleToggle from "../assets/boussole.png";
import "./LayoutNav.css";

function Layout() {
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
        <button type="button" onClick={toggleNav} className="btn-toggle">
          {" "}
          <img src={boussoleToggle} alt="boussole" className="img-boussole" />
        </button>

        {toggleMenu && (
          <nav className="liste-nav">
            <Link to="/Accueil" className="items">
              Accueil
            </Link>
            <Link to="/Bassin" className="items">
              Bassin d&aposemplois
            </Link>
            <Link to="/Suivi" className="items">
              Suivis de candidatures
            </Link>
            <Link to="/Feedback" className="items">
              Retours entreprises
            </Link>
          </nav>
        )}
      </div>
    </div>
  );
}

export default Layout;
