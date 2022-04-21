import React, { useState } from "react";

// When I click on Heart, the poste is going to "Suivi de candidature"

export default function FavoriteButton({ handleClickButtonFavorite }) {
  const [like, setLike] = useState(false);

  const handleLiked = () => {
    handleClickButtonFavorite();
    setLike(!like);
  };
  return (
    <div className="addFavorite">
      <button className="buttonAddFavorite" type="button" onClick={handleLiked}>
        {like ? (
          <img
            className="favoriteIcon"
            src="..\src\assets\likeOFF.png"
            alt="Dont liked"
          />
        ) : (
          <img
            className="favoriteIcon"
            src="..\src\assets\likeON.png"
            alt="liked"
          />
        )}
      </button>
    </div>
  );
}
