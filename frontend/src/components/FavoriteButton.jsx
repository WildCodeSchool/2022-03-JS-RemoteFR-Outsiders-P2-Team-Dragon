import React from "react";
import styles from "../assets/Accueil.module.css";

// When I click on Heart, the poste is going to "Suivi de candidature"

export default function FavoriteButton({ handleClickButtonFavorite }) {
  return (
    <div className={styles.addFavorite}>
      <button
        className={styles.buttonAddFavorite}
        type="button"
        onClick={handleClickButtonFavorite}
      >
        <img
          className={styles.favoriteIcon}
          src="..\src\assets\coeur.png"
          alt="Like ?"
        />
      </button>
    </div>
  );
}
