import React, { useState } from "react";
import offerTemplate from "../data/offerTemplate";
import BackLogOffer from "../components/BackLogOffer";
import "@assets/Common.css";
import ActionOffer from "../components/ActionOffer";

function Suivi() {
  const [isPostuled, setIsPostuled] = useState(false);
  const handlePostuled = (item) => {
    setIsPostuled(!isPostuled);
    const offerToUpdate = offerTemplate.find((offer) => offer.id === item.id);
    offerToUpdate.isPostule = !offerToUpdate.isPostule;
  };
  const [isRelaunched, setIsRelaunched] = useState(false);
  const handleRelaunch = (item) => {
    setIsRelaunched(!isRelaunched);
    const offerToUpdate = offerTemplate.find((offer) => offer.id === item.id);
    offerToUpdate.isRelaunch = !offerToUpdate.isRelaunch;
  };
  const [isCanceled, setIsCanceled] = useState(false);
  const handleCancel = (item) => {
    setIsCanceled(!isCanceled);
    const offerToUpdate = offerTemplate.find((offer) => offer.id === item.id);
    offerToUpdate.isCancel = !offerToUpdate.isCancel;
  };
  return (
    <div>
      <BackLogOffer handlePostuled={handlePostuled} />;
      <ActionOffer
        handleRelaunch={handleRelaunch}
        handleCancel={handleCancel}
      />
    </div>
  );
}

export default Suivi;
