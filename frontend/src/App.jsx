import React from "react";
import Accueil from "@pages/Accueil";
import { Routes, Route } from "react-router-dom";
import Nav from "@components/Nav";
import "./App.css";
import Suivi from "@pages/Suivi";
import Profil from "@pages/Profil";
import Bassin from "@pages/Bassin";
import "./assets/Accueil.module.css";
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
      <Footer />
    </>
  );
}
export default App;
