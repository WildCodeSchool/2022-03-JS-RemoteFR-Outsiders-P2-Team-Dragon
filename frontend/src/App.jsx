import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "@components/Nav";
import "./App.css";
import Accueil from "@pages/Accueil";
import Suivi from "@pages/Suivi";
import Profil from "@pages/Profil";
import Bassin from "@pages/Bassin";
import "./assets/Accueil.module.css";
import Footer from "@components/Footer";
import BackLogOffer from "@components/BackLogOffer";
import Applications from "@components/Applications";
import Action from "@components/Action";
import Feedback from "@components/Feedback";

function App() {
  return (
    <>
      <Nav />
      <div className="main">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/Suivi" element={<Suivi />} />
          <Route path="/Bassin" element={<Bassin />} />
          <Route path="/Profil" element={<Profil />} />
          <Route path="/suivi/jevaispostuler" element={<BackLogOffer />} />
          <Route path="/suivi/jaipostule" element={<Applications />} />
          <Route path="/suivi/action" element={<Action />} />
          <Route path="/suivi/feedback" element={<Feedback />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
export default App;
