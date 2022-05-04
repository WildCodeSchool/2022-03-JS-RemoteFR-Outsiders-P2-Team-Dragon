import React from "react";
import { Link } from "react-router-dom";
import "../assets/SubNavbar.css";

function SubNavbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/je-vais-postuler">Je vais postuler</Link>
        </li>
        <li>
          <Link to="/j-ai-postule/">J&apos;ai Postulé</Link>
        </li>
        <li>
          <Link to="/action">Action</Link>
        </li>
        <li>
          <Link to="/feedback">Feedback</Link>
        </li>
      </ul>
    </nav>
  );
}

export default SubNavbar;
