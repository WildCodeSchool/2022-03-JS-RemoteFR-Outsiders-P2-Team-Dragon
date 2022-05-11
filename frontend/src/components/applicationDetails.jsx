import React from "react";

function applicationDetails({ commentsInFeedback }) {
  // const phoneUrl = `tel:`;
  // const mailUrl = `mailto:`;

  return (
    <>
      {/* <div className={styles.applicationDetails}>
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
            Modifier les informations de candidature
          </button>
        </div>
      </div> */}
      <div className="detailsDiv">
        <form className="detailsForm">
          <input
            type="text"
            name="applicationDate"
            id="applicationDate"
            width="200px"
            placeholder="Date"
          />
          <input
            type="text"
            name="contactName"
            id="contactName"
            placeholder="NOM Prenom"
          />
          <input
            type="text"
            name="company"
            id="company"
            placeholder="Entreprise"
          />
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Nº téléphone"
          />
          <input type="text" name="mail" id="mail" placeholder="Mail" />

          {commentsInFeedback ? (
            <textarea
              type="text"
              name="applicationComments"
              id="applicationComments"
              placeholder="Mon Feedback"
              rows="5"
            />
          ) : null}
        </form>
      </div>
    </>
  );
}

export default applicationDetails;
