import React, { useState } from "react";
import offerTemplate from "../data/offerTemplate";
import Search from "../components/Search";
import JobOffer from "../components/JobOffer";
import "@assets/Common.css";

function Accueil() {
  const [isLiked, setIsLiked] = useState(false);
  // mettre  ---   offerLiked   ---  en parametre de handleLiked
  const handleLiked = () => {
    // add offerLiked
    setIsLiked(!isLiked);
    // offerTemplate.map((offer) => {
    //   if (offer.id === offerLiked.id) {
    //     offer.isFavorite = !offer.isFavorite;
    //   }
    // });
  };
  return (
    <div>
      <Search />
      {offerTemplate.map((offer) => {
        return (
          // Partie Oscar : ici on envoie les props qui viennent d'App et les transmets vers JobOffer...
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
