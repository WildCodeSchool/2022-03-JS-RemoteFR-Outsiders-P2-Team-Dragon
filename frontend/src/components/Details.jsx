import React from "react";
import styles from "../assets/Accueil.module.css";

function Details({ offerTemplate }) {
  return (
    <div className={styles.jobDetail}>
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
