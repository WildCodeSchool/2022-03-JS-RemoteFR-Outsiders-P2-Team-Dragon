import React, { useState } from "react";
import FavoriteButton from "./FavoriteButton";
import styles from "../assets/Accueil.module.css";
import Details from "./Details";
import "../assets/Common.css";

// showFavoriteButton=true montre le heart dans offer sinon il ne s'affiche pas
function JobOffer({ showFavoriteButton, offer, handleLiked }) {
  const [showDetail, setshowDetail] = useState(false);
  const handleClick = () => {
    setshowDetail(!showDetail);
  };

  return (
    <div className={styles.mainAccueil}>
      <div className={styles.jobContainer}>
        <div className={styles.favoriteDiv}>
          {showFavoriteButton ? (
            <FavoriteButton offer={offer} handleLiked={handleLiked} />
          ) : null}
        </div>
        <div className={styles.jobSynthesisDiv}>
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
        <div className={styles.favoriteDiv}>
          <button
            type="button"
            onClick={handleClick}
            className={styles.buttonDetail}
          >
            ...
          </button>
        </div>
      </div>
      {showDetail ? <Details offerTemplate={offer} /> : null}
    </div>
  );
}
export default JobOffer;
