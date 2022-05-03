import React, { useState } from "react";
import { Link } from "react-router-dom";
import offerTemplate from "../data/offerTemplate";
import BackLogOffer from "../components/BackLogOffer";
// import Applications from "../components/Applications";
import "@assets/Common.css";

function Suivi() {
  const [isPostuled, setIsPostuled] = useState(false);

  const handlePostuled = (item) => {
    setIsPostuled(!isPostuled);
    const offerToUpdate = offerTemplate.find((offer) => offer.id === item.id);
    offerToUpdate.isPostule = !offerToUpdate.isPostule;
  };
  return (
    <>
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
      <BackLogOffer handlePostuled={handlePostuled} />
    </>
  );
}

export default Suivi;
