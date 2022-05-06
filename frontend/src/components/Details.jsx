import React from "react";
import "@assets/Accueil.module.css";
// import "@assets/Common.css";

function Details({ offerTemplate }) {
  return (
    <div className="jobDetail">
      <p>{offerTemplate.Description}</p>
    </div>
  );
}
export default Details;
