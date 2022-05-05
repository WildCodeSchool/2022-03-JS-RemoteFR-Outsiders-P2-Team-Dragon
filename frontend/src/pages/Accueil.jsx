import React, { useState } from "react";
import offerTemplate from "../data/offerTemplate";
import Search from "../components/Search";
import JobOffer from "../components/JobOffer";
import "../assets/Common.css";

function Accueil() {
  const [isLiked, setIsLiked] = useState(false);
  const handleLiked = (item) => {
    setIsLiked(!isLiked);
    const offerToUpdate = offerTemplate.find((offer) => offer.id === item.id);
    offerToUpdate.isFavorite = !offerToUpdate.isFavorite;
  };
  const [jobs, setJobs] = useState([]);
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
