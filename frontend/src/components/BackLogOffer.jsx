import React from "react";
import JePostuleButton from "@components/JePostuleButton";
import "@assets/Common.css";
import "@assets/BackLogOffer.css";
import offerTemplate from "../data/offerTemplate";
import JobOffer from "./JobOffer";

export default function BackLogOffer() {
  return (
    <div className="offercontainer">
      <div className="offerlist">
        {offerTemplate.map((offer) =>
          offer.isFavorite ? (
            <JobOffer showFavoriteButton={false} offer={offer} />
          ) : (
            ""
          )
        )}
      </div>
      <div className="postulebutton">
        <JePostuleButton />
      </div>
    </div>
  );
}
