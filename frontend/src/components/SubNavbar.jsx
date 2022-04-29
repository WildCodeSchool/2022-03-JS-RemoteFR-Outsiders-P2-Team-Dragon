import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/SubNavbar.css";

export default function SubNavbar() {
  const [activeUn, setActiveUn] = useState(false);
  const [activeDeux, setActiveDeux] = useState(false);
  const [activeTrois, setActiveTrois] = useState(false);
  return (
    <div>
      <ul>
        {/* Se situe dans suivi */}
        <li>
          {/* Je vais postuler va appeler le composant BacklogOffer */}
          <Link
            to="/je-vais-postuler"
            className={activeUn ? "btn-red " : ""}
            onClick={() => setActiveUn(!activeUn)}
          >
            Je vais postuler
          </Link>
        </li>
        <li>
          {/* Affiche le composant application.jsx */}
          <Link
            to="/j-ai-postule"
            className={activeDeux ? "btn-red " : ""}
            onClick={() => setActiveDeux(!activeDeux)}
          >
            J&apos;ai postulé
          </Link>
        </li>
        <li>
          {/* Affiche le composant action.jsx */}
          <Link
            to="/action"
            className={activeTrois ? "btn-red " : ""}
            onClick={() => setActiveTrois(!activeTrois)}
          >
            Action
          </Link>
        </li>
        <li>
          {/* Affiche le composant feedback.jsx */}
          <Link to="/feedback">Feedback</Link>
        </li>
      </ul>
    </div>
  );
}
