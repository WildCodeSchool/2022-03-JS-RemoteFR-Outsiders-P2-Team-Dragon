import React from "react";
import styles from "../assets/Accueil.module.css";

function Details({ offer }) {
  return (
    <div className={styles.jobDetail}>
      <p>{offer.description}</p>
    </div>
  );
}
export default Details;
