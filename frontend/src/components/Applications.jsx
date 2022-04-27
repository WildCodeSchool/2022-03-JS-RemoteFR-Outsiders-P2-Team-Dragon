import React from "react";
import offerTemplate from "../data/offerTemplate";
// import appliedOffers from "../data/appliedOffers";
import JobOffer from "./JobOffer";

function Applications() {
  //   const DisplayedOffers = appliedOffers.filter();
  return (
    <div>
      {offerTemplate.map((offer) => {
        return <JobOffer offer={offer} key={offer.id} />;
      })}
    </div>
  );
}

export default Applications;
