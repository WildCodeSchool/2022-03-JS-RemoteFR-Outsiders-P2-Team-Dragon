import React from "react";
import { Link } from "react-router-dom";
import "../assets/SubNavbar.css";

export default function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/je-vais-postuler">Je vais postuler</Link>
        </li>
        <li>
          <Link to="/j-ai-postule">J&apos;ai postulé</Link>
        </li>
        <li>
          <Link to="/action">Action</Link>
        </li>
        <li>
          <Link to="/feedback">Feedback</Link>
        </li>
      </ul>
    </div>
  );
}
