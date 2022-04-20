import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "@components/Nav";
import "./App.css";

import Accueil from "@pages/Accueil";
import Suivi from "@pages/Suivi";
import Bassin from "@pages/Bassin";
import Feedback from "@pages/Profil";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/Accueil" element={<Accueil />} />
        <Route path="/Suivi" element={<Suivi />} />
        <Route path="/Bassin" element={<Bassin />} />
        <Route path="/Feedback" element={<Feedback />} />
      </Routes>
    </div>
  );
}

export default App;
