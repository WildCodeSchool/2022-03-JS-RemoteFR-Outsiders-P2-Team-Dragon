import React from "react";
import "@assets/Common.css";
import "@assets/BackLogOffer.css";
import offerTemplate from "../data/offerTemplate";
import JobOffer from "./JobOffer";

export default function Feedback({ handlePostuled }) {
  return (
    <div className="offercontainer">
      {offerTemplate.map((offer) =>
        offer.isFavorite ? (
          <div className="postulecontainer" key={offer.id}>
            <JobOffer
              className="coucou"
              showFavoriteButton={false}
              offer={offer}
            />
            <div className="FeedbackButtons">
              <button
                className={
                  offer.inFeedback ? "jePostuleButtonON" : "jePostuleButtonOFF"
                }
                type="button"
                onClick={() => handlePostuled(offer)}
              >
                {offer.inFeedback ? "Good job !" : "Je postule"}
              </button>
              <button
                className={
                  offer.inFeedback ? "jePostuleButtonON" : "jePostuleButtonOFF"
                }
                type="button"
                onClick={() => handlePostuled(offer)}
              >
                {offer.inFeedback ? "Good job !" : "Je postule"}
              </button>
            </div>
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
}
