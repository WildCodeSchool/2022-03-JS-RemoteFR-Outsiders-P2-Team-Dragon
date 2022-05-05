import React from "react";
import { Link } from "react-router-dom";
import "@assets/SubNavbar.css";

function SubNavbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/suivi/jevaispostuler" className="itemsuivi">
              Je vais postuler
            </Link>
          </li>
          <li>
            <Link to="/suivi/jaipostule" className="itemsuivi">
              J&apos;ai Postulé
            </Link>
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
