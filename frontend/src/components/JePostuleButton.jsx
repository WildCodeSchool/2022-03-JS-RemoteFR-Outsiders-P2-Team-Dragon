import React from "react";
import "@assets/BackLogOffer.css";

// When I click on Button, the poste is going to "J'ai postulé"

export default function JePostuleButton({ handlePostuled, offer }) {
  return (
    <div>
      <button
        className={offer.isPostule ? "jePostuleButtonON" : "jePostuleButtonOFF"}
        type="button"
        onClick={() => handlePostuled(offer)}
      >
        {offer.isPostule ? "J'ai postulé !" : "Je postule !"}
      </button>
    </div>
  );
}
