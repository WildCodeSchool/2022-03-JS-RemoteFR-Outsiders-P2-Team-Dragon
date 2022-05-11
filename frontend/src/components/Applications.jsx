import React from "react";
import JobOffer from "./JobOffer";
import ApplicationDetails from "./applicationDetails";
import AplicationButtons from "./ApplicationButtons";
// import OngletSuiviContext from "../contexts/OngletSuiviContext";

function Applications({
  jobs,
  handleResponsed,
  handleNotResponsed,
  handlePostuled,
}) {
  return (
    <div>
      {jobs.map((offer) =>
        offer.isPostule ? (
          <div className="suiviContainer" key={offer.id}>
            <div className="suiviContainer2">
              <JobOffer offer={offer} />
              <div className="">
                <AplicationButtons
                  offer={offer}
                  handleResponsed={handleResponsed}
                  handleNotResponsed={handleNotResponsed}
                  handlePostuled={handlePostuled}
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

export default Applications;
