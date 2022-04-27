import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "@components/Nav";
import "./App.css";

import Accueil from "@pages/Accueil";
import Suivi from "@pages/Suivi";
import Bassin from "@pages/Bassin";
import Feedback from "@pages/Profil";
import SubNavbar from "@components/SubNavbar";
import JeVaisPostuler from "@components/JeVaisPostuler";
import JaiPostulé from "@components/JaiPostulé";
import Action from "@components/Action";
import Footer from "@components/Footer";

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
      <SubNavbar />
      <Routes>
        <Route path="/je-vais-postuler" SubNavbar={<JeVaisPostuler />} />
        <Route path="/j-ai-postulé" SubNavbar={<JaiPostulé />} />
        <Route path="/action" SubNavbar={<Action />} />
        <Route path="/feedback" SubNavbar={<Feedback />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
