import React, { useState } from "react";
import "@assets/BackLogOffer.css";

// When I click on Button, the poste is going to "J'ai postulé"

export default function JePostuleButton() {
  const [isPostule, setPostule] = useState(false);
  const toggleClass = () => {
    setPostule(!isPostule);
  };

  return (
    <div>
      <button
        className={isPostule ? "jePostuleButtonON" : "jePostuleButtonOFF"}
        type="button"
        onClick={toggleClass}
      >
        Je postule !
      </button>
    </div>
  );
}
