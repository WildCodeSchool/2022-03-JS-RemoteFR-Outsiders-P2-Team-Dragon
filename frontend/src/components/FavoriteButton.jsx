import React from "react";
import styles from "../assets/Accueil.module.css";

export default function FavoriteButton({ offer, handleLiked }) {
  return (
    <div className={styles.favoriteDiv}>
      <button
        className={styles.buttonAddFavorite}
        type="button"
        onClick={() => handleLiked(offer)}
      >
        {offer.isFavorite ||
        offer.isPostule ||
        offer.isNotResponse ||
        offer.isResponse ||
        offer.isRelaunch ||
        offer.isCancel ? (
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
