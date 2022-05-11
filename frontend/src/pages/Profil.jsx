import React from "react";
import "../assets/Common.css";
import "../assets/Profil.css";

function Profil() {
  return (
    <div className="profilcontainer">
      <div className="identity">
        <img src="..\src\assets\moi.jpg" alt="profil" />
        <div>
          <h2>Nom :</h2>
          <p>Boinet</p>
          <h2>Prénom : </h2>
          <p>Christophe</p>
        </div>
      </div>
      <div className="goals">
        <h1>Mes Objectifs professionnels</h1>
        <ul>
          <li>Job : Développeur FullStack</li>
          <li>Localisation : Région Occitanie</li>
          <li>Salaire : 35000€</li>
          <li>Contrat : CDI</li>
        </ul>
      </div>
    </div>
  );
}

export default Profil;
