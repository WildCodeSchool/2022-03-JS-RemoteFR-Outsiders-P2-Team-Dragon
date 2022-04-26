import React, { useState } from "react";
import FavoriteButton from "./FavoriteButton";
import styles from "../assets/Accueil.module.css";
import Details from "./Details";
import "../assets/Common.css";

function JobOffer({
  sendOffreToSuivi,
  showFavoriteButton,
  handleClickButtonFavorite,
  offer,
}) {
  const [showDetail, setshowDetail] = useState(false);
  const handleClick = () => {
    setshowDetail(!showDetail);
  };
  return (
    <div className={styles.mainAccueil}>
      <div className={styles.jobContainer}>
        <div className={styles.favoriteDiv}>
          {showFavoriteButton ? (
            <FavoriteButton
              sendOffreToSuivi={sendOffreToSuivi}
              showFavoriteButton
              handleClickButtonFavorite={handleClickButtonFavorite}
            />
          ) : (
            console.warn("pas de button")
          )}
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
