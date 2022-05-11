import React from "react";
import "@assets/BackLogOffer.css";

export default function JePostuleButton({
  offer,
  handleLiked,
  handlePostuled,
}) {
  function buttonsBacklogoffer() {
    handleLiked(offer);
    handlePostuled(offer);
    console.warn(offer);
    window.open(`${offer.origineOffre.urlOrigine}`);
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
