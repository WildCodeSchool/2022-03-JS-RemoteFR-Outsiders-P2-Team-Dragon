import React, { useState } from "react";
import styles from "../assets/Accueil.module.css";
import Search from "../components/Search";
import JobOffer from "../components/JobOffer";
import "../assets/Common.css";

function Accueil({ jobs, setJobsApi, handleLiked }) {
  // const [isLiked, setIsLiked] = useState(false);

  const [error, setError] = useState(false);
  const handleReload = () => {
    window.location.reload(false);
  };

  return (
    <div className="divGeneral">
      <Search setJobsApi={setJobsApi} setError={setError} />
      {error === true ? (
        <div className={styles.displayError}>
          <div className={styles.divError}>
            Une erreur est survenue pendant la requête
          </div>
          <button
            type="button"
            onClick={handleReload}
            className={styles.buttonReload}
          >
            {" "}
            Recharger
          </button>
        </div>
      ) : (
        jobs.map((offer) => {
          return (
            <JobOffer
              key={offer.id}
              handleLiked={handleLiked}
              showFavoriteButton
              offer={offer}
            />
          );
        })
      )}
    </div>
  );
}

export default Accueil;
