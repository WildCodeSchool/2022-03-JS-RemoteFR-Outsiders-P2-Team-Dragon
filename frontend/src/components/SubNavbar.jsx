import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import JaiPostule from "./JaiPostule";
import Action from "./Action";
import Feedback from "./Feedback";
import JeVaisPostuler from "./JeVaisPostuler";
import "../assets/SubNavbar.css";

function SubNavbar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/subnavbar/backLog">BackLogOffer</Link>
          </li>
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

      <Routes>
        <Route path="/suivi/je-vais-postuler" element={<JeVaisPostuler />} />
        <Route path="/j-ai-postule" element={<JaiPostule />} />
        <Route path="/action" element={<Action />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </>
  );
}

export default SubNavbar;
