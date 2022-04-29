import React from "react";
import styles from "@assets/Application.module.css";
import offerTemplate from "../data/offerTemplate";
import appliedOffers from "../data/appliedOffers";
import JobOffer from "./JobOffer";
import ApplicationDetails from "./applicationDetails";

function Applications() {
  const DisplayedOffers = appliedOffers.map(
    (offer) => offerTemplate[offer.id - 1]
  );
  return (
    <div>
      <div>
        {DisplayedOffers.map((offer) => {
          return (
            <>
              <div className={styles.appliedOffer}>
                <JobOffer offer={offer} key={offer.id} />
                <div className={styles.answerbuttons}>
                  <button
                    type="button"
                    className={styles.reponseBtn}
                    id={styles.sansReponse}
                  >
                    .
                  </button>
                  <button
                    type="button"
                    className={styles.reponseBtn}
                    id={styles.avecReponse}
                  >
                    .
                  </button>
                </div>
              </div>
              <ApplicationDetails key={offer.id} />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Applications;
