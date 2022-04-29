import React from "react";
import JePostuleButton from "@components/JePostuleButton";
import "@assets/Common.css";
import "@assets/BackLogOffer.css";
import offerTemplate from "../data/offerTemplate";
import JobOffer from "./JobOffer";

export default function BackLogOffer() {
  return (
    <div>
      <div>
        {offerTemplate.map((offer) =>
          offer.isFavorite ? (
            <JobOffer showFavoriteButton={false} offer={offer} />
          ) : (
            ""
          )
        )}
      </div>
      <div>
        <JePostuleButton />
      </div>
    </div>
  );
}
