import React from "react";

export default function ActionButtons({
  offer,
  handleRelaunch,
  handleCancel,
  handleNotResponsed,
}) {
  function buttonsAction1() {
    handleNotResponsed(offer);
    handleRelaunch(offer);
  }
  function buttonsAction2() {
    handleNotResponsed(offer);
    handleCancel(offer);
    // eslint-disable-next-line no-alert
    alert("N'oublies pas écrire un commentaire");
  }
  return (
    <div className="buttonsContainerSuivi">
      <button onClick={buttonsAction1} type="button" className="buttonSuivi">
        Je relance
      </button>
      <button onClick={buttonsAction2} type="button" className="buttonSuivi">
        Annuler candidature
      </button>
    </div>
  );
}
