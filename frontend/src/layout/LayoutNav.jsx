import { Link } from "react-router-dom";
import React, { useState } from "react";
import logo from "../assets/logo.svg";
import boussoleToggle from "../assets/boussole.svg";
import "./LayoutNav.css";

function Layout() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

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
            <Link to="/accueil" className="items">
              Accueil
            </Link>
            <Link to="/profil" className="items">
              Profil
            </Link>
            <Link to="/suivi" className="items">
              Suivis
            </Link>
            <Link to="/bassin" className="items">
              Bassin d&apos;emplois
            </Link>
          </nav>
        )}
      </div>
    </div>
  );
}

export default Layout;
