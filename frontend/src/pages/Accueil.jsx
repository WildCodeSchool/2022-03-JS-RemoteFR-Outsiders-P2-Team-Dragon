import React, { useState } from "react";
import Search from "../components/Search";
import JobOffer from "../components/JobOffer";
import "../assets/Common.css";

function Accueil({ handleLiked }) {
  // const [isLiked, setIsLiked] = useState(false);
  const [jobs, setJobs] = useState([]);
  return (
    <div>
      <Search setJobs={setJobs} />
      {/* {jobs.filter(item => item.intitule.includes("alternance")).map((offer) => { */}
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
