import React from "react";
import styles from "../assets/Accueil.module.css";

// When I click on Heart, the poste is going to "Suivi de candidature"

export default function FavoriteButton({ offer, handleLiked }) {
  return (
    <div>
      <button
        className={styles.buttonAddFavorite}
        type="button"
        onClick={() => handleLiked(offer)}
      >
        {offer.isFavorite ? (
          <img
            className={styles.favoriteIcon}
            src="..\src\assets\likeON.png"
            alt="Dont liked"
          />
        ) : (
          <img
            className={styles.favoriteIcon}
            src="..\src\assets\likeOFF.png"
            alt="liked"
          />
        )}
      </button>
    </div>
  );
}
