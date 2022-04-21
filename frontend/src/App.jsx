
import React, { useState } from "react";
import Accueil from "@pages/Accueil";
import Profil from "@pages/Profil";
import { Routes, Route } from "react-router-dom";
import Nav from "@components/Nav";
import "./App.css";
import Suivi from "@pages/Suivi";
import Bassin from "@pages/Bassin";

function App() {
  // partie de Oscar
  const [sendOffreToSuivi, setSendOffreToSuivi] = useState(false);

  const handleClickButtonFavorite = () => {
    setSendOffreToSuivi(!sendOffreToSuivi);
  };
  return (
    <>
      <Nav />
      <div className="main">
        <Routes>
          <Route
            path="/Accueil"
            element={
              <Accueil
                handleClickButtonGo
                showFavoriteButton
                handleClickButtonFavorite={handleClickButtonFavorite}
              />
            }
          />
          <Route path="/Suivi" element={<Suivi />} />
          <Route path="/Bassin" element={<Bassin />} />
          <Route path="/Profil" element={<Profil />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
