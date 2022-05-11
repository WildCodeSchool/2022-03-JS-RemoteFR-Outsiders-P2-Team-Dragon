import React from "react";
import ActionButtons from "./ActionButtons";
import JobOffer from "./JobOffer";
import ApplicationDetails from "./applicationDetails";

export default function ActionOffer({
  jobs,
  handleRelaunch,
  handleCancel,
  handleNotResponsed,
}) {
  return (
    <div>
      {jobs.map((offer) =>
        offer.isNotResponse ? (
          <div className="suiviContainer" key={offer.id}>
            <div className="suiviContainer2">
              <JobOffer offer={offer} />
              <div className="buttonsSuivi">
                <ActionButtons
                  offer={offer}
                  handleCancel={handleCancel}
                  handleRelaunch={handleRelaunch}
                  handleNotResponsed={handleNotResponsed}
                />
              </div>
            </div>
            <ApplicationDetails commentsInFeedback={false} />
          </div>
        ) : null
      )}
    </div>
  );
}
