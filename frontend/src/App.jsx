import React, { useState } from "react";
import Accueil from "@pages/Accueil";
import Profil from "@pages/Profil";
import { Routes, Route } from "react-router-dom";
import Nav from "@components/Nav";
import "./App.css";
import Suivi from "@pages/Suivi";
import Bassin from "@pages/Bassin";
// à integrer et ranger
import "./assets/Accueil.module.css";
import "./assets/Accueil.css";

function App() {
  // partie de Oscar, sendOffreToSuivi sert à envoyer chaque offre vers la section suivi. le likeON montre l'offre sur suive le Like OFF l'a fait disparaitre.
  // handleClickButtonFavorite doit aller jusqu'au component "add favorite" afin de que lorsque je click il rend false ou true le state de sendOffreToSuivi.
  // on doit donc envoyer sendOffreToSuivi et handleClickButtonFavorite en props vers les pages dans lequelles l'on souhaite montrer des offres.

  return (
    <>
      <Nav />
      <div className="main">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/Suivi" element={<Suivi />} />
          <Route path="/Bassin" element={<Bassin />} />
          <Route path="/Profil" element={<Profil />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
