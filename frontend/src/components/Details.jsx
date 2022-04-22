import React from "react";
import "@assets/Accueil.module.css";
// import "@assets/Common.css";

function Details({ offerTemplate }) {
  return (
    <div className="jobDetail">
      <h3>{offerTemplate.title}</h3>
      <p>{offerTemplate.Description}</p>
    </div>
  );
}
export default Details;
