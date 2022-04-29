import React from "react";
import { Link } from "react-router-dom";
// import BackLogOffer from "../components/BackLogOffer";
// import Applications from "../components/Applications";
import "@assets/Common.css";

function Suivi() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/suivi/backLog">BackLogOffer</Link>
        </li>
        <li>
          <Link to="/suivi/Application">Application</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Suivi;
