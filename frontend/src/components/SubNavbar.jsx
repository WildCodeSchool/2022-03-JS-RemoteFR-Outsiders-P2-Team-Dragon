import React from "react";
import { Link } from "react-router-dom";
import Nav from "@components/Nav";
import "../assets/SubNavbar.css";

function SubNavbar() {
  return (
    <subNavbar>
      <ul>
        <li>
          <Link to="/je-vais-postuler">Je vais postuler</Link>
        </li>
        <li>
          <Link to="/j-ai-postule/">J'ai Postulé</Link>
        </li><li>
          <Link to="/action">Action</Link>
        </li>
        <li>
          <Link to="/feedback">Feedback</Link>
        </li>
      </ul>
    </subNavbar>
  );
}
 
export default SubNavbar;
