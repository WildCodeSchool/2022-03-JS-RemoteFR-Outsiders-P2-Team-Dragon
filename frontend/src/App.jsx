import React, { useEffect } from "react";
import Accueil from "@pages/Accueil";
import Profil from "@pages/Profil";
import { Routes, Route } from "react-router-dom";
import Nav from "@components/Nav";
import "./App.css";
import Suivi from "@pages/Suivi";
import Bassin from "@pages/Bassin";
import "./assets/Accueil.module.css";
import Footer from "@components/Footer";
import BackLogOffer from "@components/BackLogOffer";
import Applications from "@components/Applications";
import axios from "axios";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:5000/api/token");
      console.warn(result);
      localStorage.setItem("token", result.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Nav />
      <div className="main">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/Suivi" element={<Suivi />} />
          <Route path="/Bassin" element={<Bassin />} />
          <Route path="/Profil" element={<Profil />} />
          <Route path="/suivi/backlog" element={<BackLogOffer />} />
          <Route path="/suivi/application" element={<Applications />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
export default App;
