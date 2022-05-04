import React from "react";
import { Link } from "react-router-dom";
import "@assets/Common.css";

// import SubNavbar from "@components/SubNavbar";
// function Suivi() {
// return <SubNavbar />;

function Suivi() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/suivi/jevaispostuler">Je vais postuler</Link>
        </li>
        <li>
          <Link to="/suivi/jaipostule">J&apos;ai Postulé</Link>
        </li>
        <li>
          <Link to="/suivi/action">Action</Link>
        </li>
        <li>
          <Link to="/suivi/feedback">Feedback</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Suivi;
