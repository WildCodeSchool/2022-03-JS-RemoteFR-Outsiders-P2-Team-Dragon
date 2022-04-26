import React from "react";

// When I click on Heart, the poste is going to "Suivi de candidature"

export default function FavoriteButton({ offer, handleLiked }) {
  return (
    <div className="addFavorite">
      <button
        className="buttonAddFavorite"
        type="button"
        onClick={() => handleLiked(offer)}
      >
        {offer.isFavorite ? (
          <img
            className="favoriteIcon"
            src="..\src\assets\likeON.png"
            alt="Dont liked"
          />
        ) : (
          <img
            className="favoriteIcon"
            src="..\src\assets\likeOFF.png"
            alt="liked"
          />
        )}
      </button>
    </div>
  );
}
