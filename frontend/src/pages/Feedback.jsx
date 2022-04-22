import React from "react";
import JobOffer from "../components/JobOffer";

export default function Feedback({ sendOffreToSuivi }) {
  return (
    <div>
      <h1>Suivi de Candidature</h1>
      <div>
        {sendOffreToSuivi ? (
          <JobOffer
            sendOffreToSuivi
            showFavoriteButton={false}
            handleClickButtonFavorite
          />
        ) : null}
      </div>
    </div>
  );
}
