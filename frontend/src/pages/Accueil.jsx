import React, { useState } from "react";
import Search from "../components/Search";
import JobOffer from "../components/JobOffer";
import "@assets/Common.css";

const offerTemplate = [
  {
    id: 1,
    title: "Développeur Full-Stack",
    contract: "CDI",
    workingHours: "35h",
    Company: "Microsoft",
    prevExperience: "+10ans",
    Description:
      "Nous recherchons un Lead Développeur Javascript francophone Senior pour rejoindre la fusée ADDAXA afin développer et améliorer nos plateformes e-commerces.",
    isFavorite: false,
  },
  {
    id: 2,
    title: "Développeur Full-Stack",
    contract: "CDI",
    workingHours: "48h",
    Company: "Apple",
    prevExperience: "+15ans",
    Description:
      "Global P.O.S est un éditeur de plateformes SaaS dédiées aux points de vente. Née en 2004 de l’association de professionnels de l’encaissement, nous sommes aujourd’hui le leader français des solutions software d’encaissement et de gestion des titres prépayés (chèques cadeaux, cartes cadeaux etc.) à destination des grands comptes du Retail comme des plus petites enseignes.",
    isFavorite: false,
  },
];
function Accueil() {
  const [isLiked, setIsLiked] = useState(false);

  const handleLiked = () => {
    // add offerLiked
    setIsLiked(!isLiked);
    // // offerTemplate.map((offer) => {
    // //   if (offer.id === offerLiked.id) {
    // //     offer.isFavorite = !offer.isFavorite;
    // //   }
    // });
  };
  return (
    <>
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
      <div>
        <h1>Suivi de Candidature</h1>
        <div>
          {offerTemplate.map((offer) =>
            offer.isFavorite ? (
              <JobOffer showFavoriteButton={false} offer={offer} />
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </>
  );
}

export default Accueil;
