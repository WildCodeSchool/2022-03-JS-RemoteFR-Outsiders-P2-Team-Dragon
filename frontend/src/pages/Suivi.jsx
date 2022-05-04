import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Applications from "@components/Applications";
import offerTemplate from "../data/offerTemplate";
import BackLogOffer from "../components/BackLogOffer";
import "@assets/Common.css";
import styles from "../assets/Suivi.module.css";
// import OngletSuiviContext from "../contexts/OngletSuiviContext";

function Suivi({ handleLiked }) {
  const [isPostuled, setIsPostuled] = useState(false);

  const handlePostuled = (item) => {
    setIsPostuled(!isPostuled);
    const offerToUpdate = offerTemplate.find((offer) => offer.id === item.id);
    offerToUpdate.isPostule = !offerToUpdate.isPostule;
  };
  return (
    <>
      <nav>
        <ul className={styles.subNav}>
          <li>
            <Link to="/suivi/backLog">BackLogOffer</Link>
          </li>
          <li>
            <Link to="/suivi/Application">Application</Link>
          </li>
        </ul>
      </nav>

      <BackLogOffer handlePostuled={handlePostuled} handleLiked={handleLiked} />
    </>
  );
}

export default Suivi;
