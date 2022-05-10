import React from "react";
import "@assets/BackLogOffer.css";

// When I click on Button, the offer is going to "J'ai postulé"

export default function JePostuleButton({
  // handlePostuled,
  offer,
  handleLiked,
}) {
  function buttonsBacklogoffer() {
    handleLiked(offer);
  }
  return (
    <div>
      <button
        className="jePostuleButtonON"
        type="button"
        onClick={buttonsBacklogoffer}
      >
        {offer.isPostule ? "Good job !" : "Je postule"}
      </button>
    </div>
  );
}
