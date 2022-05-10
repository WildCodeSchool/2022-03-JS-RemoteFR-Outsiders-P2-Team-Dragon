import React from "react";
import { Link } from "react-router-dom";
import "@assets/SubNavbar.css";

function SubNavbar({ OnClickOnPostule, OnClickOnApplications }) {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <button
              onClick={OnClickOnPostule}
              type="button"
              className="itemsuivi"
            >
              Je vais postuler
            </button>
          </li>
          <li>
            <button
              onClick={OnClickOnApplications}
              type="button"
              className="itemsuivi"
            >
              J&apos;ai Postulé
            </button>
          </li>
          <li>
            <Link to="/suivi/action" className="itemsuivi">
              Action
            </Link>
          </li>
          <li>
            <Link to="/suivi/feedback" className="itemsuivi">
              Feedback
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SubNavbar;
