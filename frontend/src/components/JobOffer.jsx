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
    <div className={styles.mainAccueil}>
      <button
        className={styles.jobContainer}
        type="button"
        onClick={handleClick}
      >
        <div className={styles.favoriteDiv}>
          {showFavoriteButton ? (
            <FavoriteButton offer={offer} handleLiked={handleLiked} />
          ) : null}
        </div>
        <div className={styles.jobSynthesisDiv}>
          <h1>{offer.intitule}</h1>
          <div>
            {offer.typeContrat}
            {" | "}
            {offer.dureeTravailLibelle}
            {" | "}
            {offer.entreprise.nom}
            {" | "}
            {offer.experienceLibelle}
          </div>

          {/* <div className={styles.favoriteDiv}>
              <button
                type="button"
                onClick={handleClick}
                className={styles.buttonDetail}
              >
                ...
              </button> 
            </div> */}
        </div>
      </button>
      {showDetail ? <Details offerTemplate={offer} /> : null}
      {/* <div className={styles.favoriteDiv}>
        {showFavoriteButton ? (
          <FavoriteButton offer={offer} handleLiked={handleLiked} />
        ) : null}
      </div> */}
    </div>
  );
}
export default JobOffer;
