import React, { useState } from "react";
import Section from "./components/Section";
import Offre from "./components/Offre";
import "./assets/oscar.css";
import "./App.css";

function App() {
  const [sendOffreToSuivi, setSendOffreToSuivi] = useState(false);

  const handleClickButtonFavorite = () => {
    setSendOffreToSuivi(!sendOffreToSuivi);
  };

  return (
    <div className="App">
      <div className="oscar-div-exemple">
        <Offre
          showFavoriteButton
          handleClickButtonFavorite={handleClickButtonFavorite}
        />
        <Section sendOffreToSuivi={sendOffreToSuivi} />
      </div>
    </div>
  );
}

export default App;
