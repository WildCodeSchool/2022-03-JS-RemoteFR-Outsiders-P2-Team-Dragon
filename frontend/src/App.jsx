import React, { useState, useEffect } from "react";
import Accueil from "@pages/Accueil";
import Profil from "@pages/Profil";
import { Routes, Route } from "react-router-dom";
import Nav from "@components/Nav";
import "./App.css";
import Suivi from "@pages/Suivi";
import Bassin from "@pages/Bassin";
import "./assets/Accueil.module.css";
import Footer from "@components/Footer";
import axios from "axios";
import { OngletSuiviContextProvider } from "./contexts/OngletSuiviContext";

function App() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:5500/api/token");
      console.warn(result);
      localStorage.setItem("token", result.data);
    };
    fetchData();
  }, []);
  const [isLiked, setIsLiked] = useState(false);
  const handleLiked = (item) => {
    setIsLiked(!isLiked);
    const offerToUpdate = jobs.find((offer) => offer.id === item.id);
    offerToUpdate.isFavorite = !offerToUpdate.isFavorite;
  };

  return (
    <OngletSuiviContextProvider>
      <>
        <Nav />
        <div className="main">
          <Routes>
            <Route
              path="/"
              element={
                <Accueil
                  handleLiked={handleLiked}
                  jobs={jobs}
                  setJobs={setJobs}
                />
              }
            />
            <Route
              path="/Suivi"
              element={
                <Suivi
                  handleLiked={handleLiked}
                  isLiked={isLiked}
                  jobs={jobs}
                />
              }
            />
            <Route path="/Bassin" element={<Bassin />} />
            <Route path="/Profil" element={<Profil />} />
          </Routes>
        </div>
        <Footer />
      </>
    </OngletSuiviContextProvider>
  );
}
export default App;
