import React from "react";
import RelaunchButton from "./RelaunchButton";
import CancelButton from "./CancelButton";
import "@assets/Common.css";
import "@assets/Actionbutton.css";
import offerTemplate from "../data/offerTemplate";
import JobOffer from "./JobOffer";

export default function ActionOffer({ handleRelaunch, handleCancel }) {
  return (
    <div className="offercontainer">
      {offerTemplate.map((offer) =>
        offer.isFavorite ? (
          <div className="postulecontainer" key={offer.id}>
            <JobOffer showFavoriteButton={false} offer={offer} />
            <div className="actioncontainer">
              <div className="relaunchbutton">
                <RelaunchButton handleRelaunch={handleRelaunch} offer={offer} />
              </div>
              <div className="cancelbutton">
                <CancelButton handleCancel={handleCancel} offer={offer} />
              </div>
            </div>
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
}
