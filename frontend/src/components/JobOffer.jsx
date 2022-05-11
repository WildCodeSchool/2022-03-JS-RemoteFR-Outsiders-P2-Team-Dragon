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
        </div>
        {showDetail ? <Details offer={offer} /> : null}
      </button>
      {showFavoriteButton ? (
        <FavoriteButton offer={offer} handleLiked={handleLiked} />
      ) : null}
    </div>
  );
}
export default JobOffer;
