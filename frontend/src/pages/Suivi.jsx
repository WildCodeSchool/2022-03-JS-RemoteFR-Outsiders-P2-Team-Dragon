import React, { useState } from "react";
// import Applications from "@components/Applications";
import "@assets/Common.css";
import SubNavbar from "@components/SubNavBar";
import BackLogOffer from "@components/BackLogOffer";
import Applications from "@components/Applications";
import Action from "@components/Action";
import Feedback from "@components/Feedback";
import offerTemplate from "../data/offerTemplate";
// import OngletSuiviContext from "../contexts/OngletSuiviContext";

function Suivi({ handleLiked }) {
  const [isPostuled, setIsPostuled] = useState(false);
  const [onPostule, setOnPostule] = useState(true);
  const [onApplications, setOnApplications] = useState(false);
  const [onAction, setOnAction] = useState(false);
  const [onFeedback, setOnFeedback] = useState(false);

  const OnClickOnPostule = () => {
    setOnPostule(true);
    setOnApplications(false);
    setOnAction(false);
    setOnFeedback(false);
  };
  const OnClickOnApplications = () => {
    setOnPostule(false);
    setOnApplications(true);
    setOnAction(false);
    setOnFeedback(false);
  };

  const handlePostuled = (item) => {
    setIsPostuled(!isPostuled);
    const offerToUpdate = offerTemplate.find((offer) => offer.id === item.id);
    offerToUpdate.isPostule = !offerToUpdate.isPostule;
  };
  return (
    <>
      <SubNavbar
        OnClickOnPostule={OnClickOnPostule}
        OnClickOnApplications={OnClickOnApplications}
      />
      {onPostule ? (
        <BackLogOffer
          handlePostuled={handlePostuled}
          handleLiked={handleLiked}
        />
      ) : null}
      {onApplications ? (
        <Applications
          handlePostuled={handlePostuled}
          handleLiked={handleLiked}
        />
      ) : null}
      {onAction ? (
        <Action handlePostuled={handlePostuled} handleLiked={handleLiked} />
      ) : null}
      {onFeedback ? (
        <Feedback handlePostuled={handlePostuled} handleLiked={handleLiked} />
      ) : null}
    </>
  );
}

export default Suivi;
