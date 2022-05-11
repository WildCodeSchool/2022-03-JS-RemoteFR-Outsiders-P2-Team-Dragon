import React from "react";
import "@assets/SubNavbar.css";

function SubNavbar({
  OnClickOnPostule,
  OnClickOnApplications,
  OnClickOnAction,
  OnClickOnFeedback,
  onPostule,
}) {
  return (
    <div className="containerSubNav">
      <button
        onClick={OnClickOnPostule}
        type="button"
        className={onPostule ? "itemsuivi itemsuiviOnStart" : "itemsuivi"}
      >
        Je vais postuler
      </button>
      <button
        onClick={OnClickOnApplications}
        type="button"
        className="itemsuivi"
      >
        J&apos;ai Postulé
      </button>
      <button onClick={OnClickOnAction} type="button" className="itemsuivi">
        Action
      </button>
      <button onClick={OnClickOnFeedback} type="button" className="itemsuivi">
        Feedback
      </button>
    </div>
  );
}

export default SubNavbar;
