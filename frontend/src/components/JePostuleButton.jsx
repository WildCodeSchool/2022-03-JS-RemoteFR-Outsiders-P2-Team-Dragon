import React from "react";

// When I click on Button, the poste is going to "J'ai postulé"

export default function JePostuleButton() {
  const coucou = true;
  return (
    <div>
      <button className="jePostuleButton" type="button">
        {coucou ? (
          <img
            className="jePostuleIcon"
            src="..\src\assets\likeON.png"
            alt="Dont liked"
          />
        ) : (
          <img
            className="jePostuleIcon"
            src="..\src\assets\likeOFF.png"
            alt="liked"
          />
        )}
      </button>
    </div>
  );
}
