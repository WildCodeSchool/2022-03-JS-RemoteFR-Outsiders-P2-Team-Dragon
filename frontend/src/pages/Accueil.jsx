import React from "react";
import Search from "../components/Search";
import JobOffer from "../components/JobOffer";
import "../assets/Common.css";

function Accueil({ jobs, setJobs, handleLiked }) {
  return (
    <div>
      <Search setJobs={setJobs} />
      {jobs.map((offer) => {
        return (
          // Partie Oscar  : ici on envoie les props qui viennent d'App et les transmets vers JobOffer...
          <JobOffer
            key={offer.id}
            handleLiked={handleLiked}
            showFavoriteButton
            offer={offer}
          />
        );
      })}
    </div>
  );
}

export default Accueil;
