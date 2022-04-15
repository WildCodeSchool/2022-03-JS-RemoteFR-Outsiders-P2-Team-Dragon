import React, { useState } from "react";
import Accueil from "./pages/Accueil";
import "./App.css";

function App() {
  const [sendOffreToSuivi, setSendOffreToSuivi] = useState(false);

  const handleClickButtonFavorite = () => {
    setSendOffreToSuivi(!sendOffreToSuivi);
  };
  return (
    <>
      {/* <Navbar /> */}
      <div className="main">
        <Accueil
          handleClickButtonGo
          showFavoriteButton
          handleClickButtonFavorite={handleClickButtonFavorite}
        />
      </div>
      {/* <footer/> */}
    </>
  );
}

export default App;
