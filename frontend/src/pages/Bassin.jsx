import React, { useState } from "react";
import styles from "@assets/Bassin.module.css";
import emplois from "@assets/emploi-crees.png";
import repartition from "@assets/repartition.png";
import jobChart from "@assets/jobChart.png";
import triangleNoir from "@assets/triangleNoir.png";

function Bassin() {
  const [showTopJobs, setShowTopJobs] = useState(false);
  const handleClick = () => {
    setShowTopJobs(!showTopJobs);
  };
  return (
    <div className={styles.mainBassin}>
      <div>
        <h1>Le bassin d emploi tech en Occitanie</h1>
      </div>
      <p className={styles.intro}>
        Si le tissu économique des TPE-PME de la région est peu digitalisé,
        l’Occitanie, forte de ses industries de pointe, semble bien positionnée
        pour devenir une des régions françaises leaders dans l’économie
        numérique.
      </p>
      <div className={styles.sectionSynthesis}>
        <img src={emplois} alt="Emplois créés" className={styles.emploiImg} />
        <img
          src={repartition}
          alt="Emplois créés"
          className={styles.emploiImg}
        />
      </div>
      <div>
        <h2>
          <button
            type="button"
            onClick={handleClick}
            className={styles.triangleButton}
          >
            <img
              src={triangleNoir}
              alt="triangle noir"
              className={styles.discover}
            />
          </button>
          Découvrez le TOP 15 des métiers les plus demandés en Occitanie
        </h2>
        {showTopJobs === true ? (
          <div>
            <div className={styles.top15Jobs}>
              <div>
                <h3>Nouveaux métiers dans le top 15 en 2021</h3>
                <ul>
                  <li>Data Analyst</li>
                  <li>Designer UX / UI</li>
                  <li>Scrum Master</li>
                  <li>Testeur d application / fonctionnel / QA</li>
                </ul>
              </div>
              <div>
                <h3>Métiers qui disparaissent du top15 en 2021:</h3>
                <ul>
                  <li>Hotliner / Technicien Help Desk</li>
                  <li>
                    Installateur de réseaux de télécoms / Technicien fibre
                    optique
                  </li>
                  <li>Technicien systèmes et réseau</li>
                  <li>Technicien télécom</li>
                </ul>
              </div>
            </div>
            <h3>TOP 15 des métiers les plus demandés en Occitanie</h3>
            <img
              src={jobChart}
              alt="Graphique des métiers les plus recherchés"
              className={styles.emploiImg}
            />
            <div className={styles.minim}>
              Source: OPIIEC (Observatoire sectoriel Juillet 2021)
            </div>
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}

export default Bassin;
