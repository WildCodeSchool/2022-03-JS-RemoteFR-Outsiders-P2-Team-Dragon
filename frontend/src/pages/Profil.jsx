import React from "react";
import "../assets/Common.css";
import "../assets/Profil.css";

function Profil() {
  return (
    <div className="profilcontainer">
      <div className="identity">
        <img src="..\src\assets\moi.jpg" alt="profil" />
        <h2>Nom :</h2>
        <p>Boinet</p>
        <h2>Prénom : </h2>
        <p>Christophe</p>
      </div>
      <div className="goals">
        <h1>Mes Objectifs professionnels</h1>
        <ul>
          <li>
            Job :<p>Développeur FullStack</p>
          </li>
          <li>
            Localisation :<p>Région PACA</p>
          </li>
          <li>
            Salaire :<p>35000€</p>
          </li>
          <li>
            Contrat :<p>CDI</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Profil;
