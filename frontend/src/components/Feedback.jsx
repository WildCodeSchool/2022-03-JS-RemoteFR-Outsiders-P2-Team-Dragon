import React from "react";
import FeedbackButtons from "./FeedbackButtons";
import "@assets/Common.css";
import "@assets/Actionbutton.css";
import JobOffer from "./JobOffer";
import ApplicationDetails from "./applicationDetails";

export default function Feedback({ jobs, handleDeleted }) {
  return (
    <div>
      {jobs.map((offer) =>
        offer.isResponse || offer.isCancel ? (
          <div className="suiviContainer" key={offer.id}>
            <div className="suiviContainer2">
              <JobOffer offer={offer} />
              <div className="buttonsSuivi">
                <FeedbackButtons offer={offer} handleDeleted={handleDeleted} />
              </div>
            </div>
            <ApplicationDetails commentsInFeedback />
          </div>
        ) : null
      )}
    </div>
  );
}
