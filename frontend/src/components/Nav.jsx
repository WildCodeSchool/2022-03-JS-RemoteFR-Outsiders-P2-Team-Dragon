import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import SubNavbar from "@components/SubNavbar";
import logo from "@assets/logo.svg";
import boussoleToggle from "@assets/boussole.png";
import "../assets/Nav.css";
import "../assets/Common.css";

function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [toggleMenuSuivi, setToggleMenuSuivi] = useState(false);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  const toggleSuivi = () => {
    setToggleMenuSuivi(!toggleMenuSuivi);
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
    <>
      <div className="div-logo">
        <img src={logo} alt="logo" className="img-logo" />
      </div>
      <div className="div-nav">
        <button type="button" onClick={toggleNav} className="btn-toggle">
          {" "}
          <img src={boussoleToggle} alt="boussole" className="img-boussole" />
        </button>

        {(toggleMenu || screenWidth > 750) && (
          <nav className="liste-nav">
            <Link to="/" className="items">
              Accueil
            </Link>
            <Link to="/profil" className="items">
              Profil
            </Link>
            <Link to="/suivi" className="items" onClick={toggleSuivi}>
              Suivi
            </Link>
            <Link to="/bassin" className="items">
              Bassin d&apos;emplois
            </Link>
          </nav>
        )}
      </div>
      <div>{toggleMenuSuivi ? <SubNavbar /> : null}</div>
    </>
  );
}

export default Nav;
