import React from "react";

export default function AplicationButtons({
  offer,
  handleResponsed,
  handleNotResponsed,
  handlePostuled,
}) {
  function buttonsApplications1() {
    handlePostuled(offer);
    handleResponsed(offer);
    // eslint-disable-next-line no-alert
    alert("N'oublies pas écrire un commentaire");
  }
  function buttonsApplications2() {
    handlePostuled(offer);
    handleNotResponsed(offer);
  }
  return (
    <div className="buttonsContainerSuivi">
      <button
        onClick={buttonsApplications2}
        type="button"
        className="buttonSuivi"
      >
        Sans Réponse
      </button>
      <button
        onClick={buttonsApplications1}
        type="button"
        className="buttonSuivi"
      >
        Réponse
      </button>
    </div>
  );
}
