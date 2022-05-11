import React from "react";
import "@assets/Common.css";
import "@assets/Actionbutton.css";

export default function RelaunchButton({ handleRelaunch, offer }) {
  return (
    <div>
      <button
        className={offer.isRelaunch ? "relaunchButtonON" : "relaunchButtonOFF"}
        type="button"
        onClick={() => handleRelaunch(offer)}
      >
        {offer.isRelaunch ? "Bien joué !" : "Relance !"}
      </button>
    </div>
  );
}
