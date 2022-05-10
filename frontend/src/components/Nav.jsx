import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import logo from "@assets/logo.svg";
import boussoleToggle from "@assets/boussole.png";
import "../assets/Nav.css";
import "../assets/Common.css";

function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  return (
    <div className="navClass">
      <div className="div-logo">
        <img src={logo} alt="logo" className="img-logo" />

        <h1>FIND TECH JOB</h1>
        <button type="button" onClick={toggleNav} className="btn-toggle">
          {" "}
          <img src={boussoleToggle} alt="boussole" className="img-boussole" />
        </button>
      </div>

      <div className="div-nav">
        {(toggleMenu || screenWidth > 750) && (
          <nav className="liste-nav">
            <Link to="/" className="items">
              Accueil
            </Link>
            <Link to="/profil" className="items">
              Profil
            </Link>
            <Link to="/suivi" className="items">
              Suivi
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

export default Nav;
