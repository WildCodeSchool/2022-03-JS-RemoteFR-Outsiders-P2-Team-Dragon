import React from "react";
import JePostuleButton from "@components/JePostuleButton";
import "@assets/Common.css";
import "@assets/BackLogOffer.css";
import offerTemplate from "../data/offerTemplate";
import JobOffer from "./JobOffer";

export default function BackLogOffer({ handlePostuled, handleLiked }) {
  return (
    <div className="backLogOffer">
      {offerTemplate.map((offer) =>
        offer.isFavorite ? (
          <div className="postulecontainerON" key={offer.id}>
            <JobOffer showFavoriteButton={false} offer={offer} />
            <div>
              <JePostuleButton
                handleLiked={handleLiked}
                handlePostuled={handlePostuled}
                offer={offer}
              />
            </div>
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
}
