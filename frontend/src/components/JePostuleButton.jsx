import React from "react";
import "@assets/BackLogOffer.css";

// When I click on Button, the offer is going to "J'ai postulé"

export default function JePostuleButton({
  // handlePostuled,
  offer,
  handleLiked,
  handlePostuled,
}) {
  function buttonsBacklogoffer() {
    handleLiked(offer);
    handlePostuled(offer);
  }
  return (
    <div>
      <button
        className="jePostuleButtonON"
        type="button"
        onClick={buttonsBacklogoffer}
      >
        Je postule
      </button>
    </div>
  );
}
