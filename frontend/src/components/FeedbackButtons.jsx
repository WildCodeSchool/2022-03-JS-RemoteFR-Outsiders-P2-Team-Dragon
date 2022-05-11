import React, { useState } from "react";

// When I click on Heart, the poste is going to "Suivi de candidature"

export default function FeedbackButtons({ offer, handleDeleted }) {
  const [final, setFinal] = useState(false);
  function buttonsAction1() {
    setFinal(!final);
    console.warn(final);
  }
  function buttonsAction2() {
    handleDeleted(offer);
    // eslint-disable-next-line no-alert
    alert("Votre candidature a bien été supprimée !");
  }
  return (
    <div className="buttonsContainerSuivi">
      <button
        onClick={buttonsAction1}
        type="button"
        className={final ? "buttonSuivi2" : "buttonSuivi1"}
      >
        Candidature Relancée
      </button>
      <button onClick={buttonsAction2} type="button" className="buttonSuivi">
        Supprimer
      </button>
    </div>
  );
}
