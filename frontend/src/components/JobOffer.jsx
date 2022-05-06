import React, { useState } from "react";
import FavoriteButton from "./FavoriteButton";
import styles from "../assets/Accueil.module.css";
import Details from "./Details";
import "../assets/Common.css";

// showFavoriteButton=true montre le 💖 dans offer sinon il ne s'affiche pas
function JobOffer({ showFavoriteButton, offer, handleLiked }) {
  const [showDetail, setshowDetail] = useState(false);
  const handleClick = () => {
    setshowDetail(!showDetail);
  };

  return (
    <div className={styles.allInJobOffer}>
      <button
        className={styles.buttonOffer}
        onClick={handleClick}
        type="button"
      >
        <div className={styles.jobContainer}>
          <h1>{offer.title}</h1>
          <div>
            {offer.contract}
            {" | "}
            {offer.workingHours}
            {" | "}
            {offer.Company}
            {" | "}
            {offer.prevExperience}
          </div>
        </div>
        {showDetail ? <Details offerTemplate={offer} /> : null}
      </button>
      {showFavoriteButton ? (
        <FavoriteButton offer={offer} handleLiked={handleLiked} />
      ) : null}
    </div>
  );
}
export default JobOffer;
