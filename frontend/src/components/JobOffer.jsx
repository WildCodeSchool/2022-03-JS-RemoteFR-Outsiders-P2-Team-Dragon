import React from "react";
import FavoriteButton from "./FavoriteButton";
import styles from "../assets/Accueil.module.css";
import Details from "./Details";

function JobOffer({
  sendOffreToSuivi,
  showFavoriteButton,
  handleClickButtonFavorite,
  offer,
}) {
  return (
    <>
      <div className={styles.mainAccueil}>
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
      </div>
      <Details offerTemplate={offer} />
    </>
  );
}

export default JobOffer;
