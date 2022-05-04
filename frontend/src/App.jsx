import React, { useState } from "react";
import Accueil from "@pages/Accueil";
import Profil from "@pages/Profil";
import { Routes, Route } from "react-router-dom";
import Nav from "@components/Nav";
import "./App.css";
import Suivi from "@pages/Suivi";
import Bassin from "@pages/Bassin";
import "./assets/Accueil.module.css";
import Footer from "@components/Footer";
import offerTemplate from "./data/offerTemplate";

function App() {
  const [isLiked, setIsLiked] = useState(false);
  const handleLiked = (item) => {
    setIsLiked(!isLiked);
    const offerToUpdate = offerTemplate.find((offer) => offer.id === item.id);
    offerToUpdate.isFavorite = !offerToUpdate.isFavorite;
  };
  return (
    <>
      <Nav />
      <div className="main">
        <Routes>
          <Route path="/" element={<Accueil handleLiked={handleLiked} />} />
          <Route path="/Suivi" element={<Suivi handleLiked={handleLiked} />} />
          <Route path="/Bassin" element={<Bassin />} />
          <Route path="/Profil" element={<Profil />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
export default App;
