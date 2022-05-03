import React from "react";
import JePostuleButton from "@components/JePostuleButton";
import "@assets/Common.css";
import "@assets/BackLogOffer.css";
import offerTemplate from "../data/offerTemplate";
import JobOffer from "./JobOffer";

export default function BackLogOffer({ handlePostuled }) {
  return (
    <div className="offercontainer">
      {offerTemplate.map((offer) =>
        offer.isFavorite ? (
          <div className="postulecontainer" key={offer.id}>
            <JobOffer showFavoriteButton={false} offer={offer} />
            <div className="postulebutton">
              <JePostuleButton handlePostuled={handlePostuled} offer={offer} />
            </div>
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
}