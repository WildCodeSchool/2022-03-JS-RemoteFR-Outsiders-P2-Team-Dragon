import React from "react";
import styles from "@assets/Application.module.css";

function applicationDetails({ offer }) {
  const phoneUrl = `tel:${offer.contactDetails.phone}`;
  const mailUrl = `mailto:${offer.contactDetails.mail}`;

  return (
    <>
      <div className={styles.applicationDetails}>
        <div className={styles.displayDetailsApplication}>
          <h5>
            Postulé le :{" "}
            <span className={styles.contactDetails}>
              {offer.contactDetails.applicationDate}
            </span>
          </h5>
          <h5>
            Contact :{" "}
            <span className={styles.contactDetails}>
              {offer.contactDetails.contactName}
            </span>
            <br />
            Entreprise :{" "}
            <span className={styles.contactDetails}>
              {offer.contactDetails.company}
            </span>
            <br />
            Téléphone :{" "}
            <span className={styles.contactDetails}>
              <a href={phoneUrl}>{offer.contactDetails.phone}</a>
            </span>
            <br />
            Courriel :{" "}
            <span className={styles.contactDetails}>
              <a href={mailUrl}>{offer.contactDetails.mail}</a>
            </span>
            <br />
            Commentaires sur la candidature :{" "}
            <span className={styles.contactDetails}>
              {offer.applicationComments}
            </span>
          </h5>
        </div>
        <div>
          <button type="button" className={styles.editButton}>
            {" "}
            Modifier les informations de candidature
          </button>
        </div>
      </div>
      <div className={styles.editDetailsDiv}>
        <h5>
          <form className={styles.editApplicationForm}>
            <label htmlFor="applicationDate" className={styles.formItem}>
              Date de candidature :
              <input
                type="text"
                name="applicationDate"
                id="applicationDate"
                width="200px"
                placeholder={offer.contactDetails.applicationDate}
              />
            </label>

            <label htmlFor="contactName" className={styles.formItem}>
              Nom du contact :
              <input
                type="text"
                name="contactName"
                id="contactName"
                placeholder={offer.contactDetails.contactName}
              />
            </label>

            <label htmlFor="company" className={styles.formItem}>
              Entreprise :
              <input
                type="text"
                name="company"
                id="company"
                placeholder={offer.contactDetails.company}
              />
            </label>

            <label htmlFor="phone" className={styles.formItem}>
              Téléphone :
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder={offer.contactDetails.phone}
              />
            </label>

            <label htmlFor="mail" className={styles.formItem}>
              Courriel :
              <input
                type="text"
                name="mail"
                id="mail"
                placeholder={offer.contactDetails.mail}
              />
            </label>

            <label htmlFor="applicationComments" className={styles.formItem}>
              Commentaires :
              <textarea
                type="text"
                name="applicationComments"
                id="applicationComments"
                placeholder={offer.applicationComments}
                rows="5"
              />
            </label>
          </form>
        </h5>
      </div>
    </>
  );
}

export default applicationDetails;