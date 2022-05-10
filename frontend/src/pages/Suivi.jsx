/* eslint-disable no-nested-ternary */
import React, { useState } from "react";
// import Applications from "@components/Applications";
import "@assets/Common.css";
import SubNavbar from "@components/SubNavBar";
import BackLogOffer from "@components/BackLogOffer";
import Applications from "@components/Applications";
import ActionOffer from "@components/ActionOffer";
import Feedback from "@components/Feedback";
// import OngletSuiviContext from "../contexts/OngletSuiviContext";

function Suivi({ handleLiked, jobs }) {
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
  const OnClickOnAction = () => {
    setOnPostule(false);
    setOnApplications(false);
    setOnAction(true);
    setOnFeedback(false);
  };
  const OnClickOnFeedback = () => {
    setOnPostule(false);
    setOnApplications(false);
    setOnAction(false);
    setOnFeedback(true);
  };

  const handlePostuled = (item) => {
    setIsPostuled(!isPostuled);
    const offerToUpdate = jobs.find((offer) => offer.id === item.id);
    offerToUpdate.isPostule = !offerToUpdate.isPostule;
  };
  return (
    <>
      <SubNavbar
        OnClickOnPostule={OnClickOnPostule}
        OnClickOnApplications={OnClickOnApplications}
        OnClickOnAction={OnClickOnAction}
        OnClickOnFeedback={OnClickOnFeedback}
        onPostule={onPostule}
      />
      {onPostule ? (
        <BackLogOffer
          handlePostuled={handlePostuled}
          handleLiked={handleLiked}
          jobs={jobs}
          onPostule={onPostule}
        />
      ) : null}
      {onApplications ? <Applications jobs={jobs} /> : null}
      {onAction ? <ActionOffer /> : null}
      {onFeedback ? <Feedback /> : null}
    </>
  );
}

export default Suivi;
