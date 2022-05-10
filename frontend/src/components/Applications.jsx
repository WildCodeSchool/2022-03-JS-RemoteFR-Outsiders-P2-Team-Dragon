import React from "react";
import styles from "@assets/Application.module.css";
import JobOffer from "./JobOffer";
import ApplicationDetails from "./applicationDetails";
// import OngletSuiviContext from "../contexts/OngletSuiviContext";

function Applications({ jobs }) {
  // const [appliedRef] = useState(appliedOffers);
  // const [hasAnswer, setHasAnswer] = useState(appliedRef);
  return (
    <div>
      {jobs.map((offer) =>
        offer.isPostule ? (
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
            <ApplicationDetails />
          </>
        ) : null
      )}
    </div>
  );
}

export default Applications;
