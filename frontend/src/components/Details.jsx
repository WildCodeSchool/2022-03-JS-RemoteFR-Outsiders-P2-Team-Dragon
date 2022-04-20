import React from "react";

function Details({ offerTemplate }) {
  return (
    <div>
      <h3>{offerTemplate.title}</h3>
      <h3>{offerTemplate.contract}</h3>
      <h3>{offerTemplate.workingHours}</h3>
      <h3>{offerTemplate.Company}</h3>
      <h3>{offerTemplate.prevExperience}</h3>
      <p>{offerTemplate.Description}</p>
    </div>
  );
}
export default Details;
