import React from "react";
import "@assets/Accueil.module.css";
// import "@assets/Common.css";

function Details({ offerTemplate }) {
  return (
    <div className="jobDetail">
      {/* <h3>{offerTemplate.title}</h3> */}
      <p>{offerTemplate.description}</p>
    </div>
  );
}
export default Details;
