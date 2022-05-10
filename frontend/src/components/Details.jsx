import React from "react";
import "@assets/Accueil.module.css";
// import "@assets/Common.css";

function Details({ offer }) {
  return (
    <div className="jobDetail">
      <p>{offer.description}</p>
    </div>
  );
}
export default Details;
