import React from "react";
import Search from "../components/Search";
import JobOffer from "../components/JobOffer";
// import styles from "../assets/Accueil.module.css";
// import Feedback from "./Feedback";

const offerTemplate = [
  {
    title: "Développeur Full-Stack",
    contract: "CDI",
    workingHours: "35h",
    Company: "Microsoft",
    prevExperience: "+10ans",
    Description:
      "Nous recherchons un Lead Développeur Javascript francophone Senior pour rejoindre la fusée ADDAXA afin développer et améliorer nos plateformes e-commerces.",
  },
  {
    title: "Développeur Full-Stack",
    contract: "CDI",
    workingHours: "48h",
    Company: "Apple",
    prevExperience: "+15ans",
    Description:
      "Global P.O.S est un éditeur de plateformes SaaS dédiées aux points de vente. Née en 2004 de l’association de professionnels de l’encaissement, nous sommes aujourd’hui le leader français des solutions software d’encaissement et de gestion des titres prépayés (chèques cadeaux, cartes cadeaux etc.) à destination des grands comptes du Retail comme des plus petites enseignes.",
  },
];

function Accueil({ sendOffreToSuivi, handleClickButtonFavorite }) {
  return (
    <div>
      <Search />
      {offerTemplate.map((offer) => {
        return (
          <JobOffer
            sendOffreToSuivi={sendOffreToSuivi}
            showFavoriteButton
            handleClickButtonFavorite={handleClickButtonFavorite}
            offer={offer}
          />
        );
      })}

      {/* <Feedback sendOffreToSuivi={sendOffreToSuivi} /> */}
    </div>
  );
}

export default Accueil;
