import React from "react";
import JePostuleButton from "@components/JePostuleButton";
import "@assets/Common.css";
import "@assets/BackLogOffer.css";
import offerTemplate from "../data/offerTemplate";
import JobOffer from "./JobOffer";

export default function BackLogOffer({ handlePostuled, handleLiked }) {
  return (
    <div className="offercontainer">
      {offerTemplate.map((offer) =>
        offer.isFavorite ? (
          <div
            className={
              offer.isPostule ? "postulecontainerOFF" : "postulecontainerON"
            }
            key={offer.id}
          >
            <JobOffer
              className="coucou"
              showFavoriteButton={false}
              offer={offer}
            />
            <div className="postulebutton">
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
