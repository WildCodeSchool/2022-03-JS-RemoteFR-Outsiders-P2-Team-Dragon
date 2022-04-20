import React, { useState } from "react";
// import { Routes, Route, Link } from "react-router";
import Accueil from "./pages/Accueil";
import Feedback from "./pages/Feedback";
import "./assets/Accueil.module.css";
import "./assets/Accueil.css";
import "./App.css";

function App() {
  const [sendOffreToSuivi, setSendOffreToSuivi] = useState(false);
  const handleClickButtonFavorite = () => {
    setSendOffreToSuivi(!sendOffreToSuivi);
  };
  return (
    <div className="main">
      <Accueil
        handleClickButtonGo
        showFavoriteButton
        handleClickButtonFavorite={handleClickButtonFavorite}
      />
      <Feedback sendOffreToSuivi={sendOffreToSuivi} />
    </div>
  );
}
export default App;
