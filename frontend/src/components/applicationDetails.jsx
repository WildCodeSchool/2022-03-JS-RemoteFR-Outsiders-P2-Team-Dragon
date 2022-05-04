import React from "react";
import styles from "@assets/Application.module.css";

function applicationDetails({ offer }) {
  const phoneUrl = `tel:${offer.contactDetails.phone}`;
  const mailUrl = `mailto:${offer.contactDetails.mail}`;
  return (
    <div className={styles.applicationDetails}>
      <div>
        <h5>
          Postulé le :{" "}
          <span className={styles.contactDetails}>
            {offer.contactDetails.applicationDate}
          </span>
        </h5>
        <h5>
          Contact :
          <span className={styles.contactDetails}>
            {offer.contactDetails.contactName}
          </span>
          <br />
          Entreprise :
          <span className={styles.contactDetails}>
            {offer.contactDetails.company}
          </span>
          <br />
          Téléphone :
          <span className={styles.contactDetails}>
            <a href={phoneUrl}>{offer.contactDetails.phone}</a>
          </span>
          <br />
          Courriel :
          <span className={styles.contactDetails}>
            <a href={mailUrl}>{offer.contactDetails.mail}</a>
          </span>
        </h5>
      </div>
    </div>
  );
}

export default applicationDetails;
