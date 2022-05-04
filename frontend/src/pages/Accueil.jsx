import React from "react";
import offerTemplate from "../data/offerTemplate";
import Search from "../components/Search";
import JobOffer from "../components/JobOffer";
import "../assets/Common.css";

function Accueil({ handleLiked }) {
  return (
    <div>
      <Search />
      {offerTemplate.map((offer) => {
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
