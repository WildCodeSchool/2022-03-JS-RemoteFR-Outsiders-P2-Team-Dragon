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
      <div>
        {jobs.map((offer) => {
          return (
            <>
              <div className={styles.appliedOffer}>
                <JobOffer offer={jobs[offer.id - 1]} key={offer.id - 1} />
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
              <ApplicationDetails offer={offer} key={offer.id} />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Applications;
