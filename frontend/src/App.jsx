import React from "react";
import Accueil from "@pages/Accueil";
import { Routes, Route } from "react-router-dom";
import Nav from "@components/Nav";
import "./App.css";
import Suivi from "@pages/Suivi";
import Bassin from "@pages/Bassin";
import Profil from "@pages/Profil";
import SubNavBar from "@components/SubNavBar";
import JeVaisPostuler from "@components/JeVaisPostuler";
import JaiPostule from "@components/JaiPostule";
import Action from "@components/Action";
import Feedback from "@components/Feedback";
import Footer from "@components/Footer";

function App() {
  return (
    <>
      <Nav />
      <div className="main">
        <Routes>
          <Route path="/Accueil" element={<Accueil />} />
          <Route path="/Suivi" element={<Suivi />} />
          <Route path="/Bassin" element={<Bassin />} />
          <Route path="/Profil" element={<Profil />} />
        </Routes>
      </div>
      <SubNavBar />
      <Routes>
        <Route path="/je-vais-postuler" element={<JeVaisPostuler />} />
        <Route path="/j-ai-postule" element={<JaiPostule />} />
        <Route path="/action" element={<Action />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
