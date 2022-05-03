import React, { useState } from "react";
import offerTemplate from "../data/offerTemplate";
import BackLogOffer from "../components/BackLogOffer";
import "../assets/Common.css";

function Suivi() {
  const [isPostuled, setIsPostuled] = useState(false);
  const handlePostuled = (item) => {
    setIsPostuled(!isPostuled);
    const offerToUpdate = offerTemplate.find((offer) => offer.id === item.id);
    offerToUpdate.isPostule = !offerToUpdate.isPostule;
  };
  return <BackLogOffer handlePostuled={handlePostuled} />;
}

export default Suivi;
