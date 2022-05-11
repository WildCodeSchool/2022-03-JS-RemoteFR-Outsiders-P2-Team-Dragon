import React from "react";
import "@assets/Common.css";
import "@assets/Actionbutton.css";

export default function CancelButton({ handleCancel, offer }) {
  return (
    <div>
      <button
        className={offer.isCancel ? "cancelButtonON" : "cancelButtonOFF"}
        type="button"
        onClick={() => handleCancel(offer)}
      >
        {offer.isCancel ? "Dommage !" : "Annuler"}
      </button>
    </div>
  );
}
