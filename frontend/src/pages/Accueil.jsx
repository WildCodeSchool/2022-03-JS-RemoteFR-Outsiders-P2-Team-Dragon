import React from "react";
import Search from "../components/Search";
import JobOffer from "../components/JobOffer";
import "../assets/Common.css";

function Accueil({ jobs, setJobsApi, handleLiked }) {
  return (
    <div>
      <Search setJobsApi={setJobsApi} />
      {jobs.map((offer) => {
        return (
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
