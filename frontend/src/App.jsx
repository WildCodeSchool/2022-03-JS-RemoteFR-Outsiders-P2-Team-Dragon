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
  const [jobsApi, setJobsApi] = useState([]);
  // console.warn(jobsApi);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const newJobs = jobsApi.map((offerApi) => {
      const offer = { ...offerApi };
      offer.isFavorite = false;
      offer.isPostule = false;
      offer.isRelaunch = false;
      offer.isCancel = false;
      offer.isResponse = false;
      offer.isNotResponse = false;
      return offer;
    });
    setJobs(newJobs);
  }, [jobsApi]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:5000/api/token");
      // console.warn(result);
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
  const [isPostuled, setIsPostuled] = useState(false);
  const handlePostuled = (item) => {
    setIsPostuled(!isPostuled);
    const offerToUpdate = jobs.find((offer) => offer.id === item.id);
    offerToUpdate.isPostule = !offerToUpdate.isPostule;
  };
  const [isResponsed, setIsResponsed] = useState(false);
  const handleResponsed = (item) => {
    setIsResponsed(!isResponsed);
    const offerToUpdate = jobs.find((offer) => offer.id === item.id);
    offerToUpdate.isResponse = !offerToUpdate.isResponse;
  };
  const [isNotResponsed, setIsNotResponsed] = useState(false);
  const handleNotResponsed = (item) => {
    setIsNotResponsed(!isNotResponsed);
    const offerToUpdate = jobs.find((offer) => offer.id === item.id);
    offerToUpdate.isNotResponse = !offerToUpdate.isNotResponse;
  };
  const [isRelaunched, setIsRelaunched] = useState(false);
  const handleRelaunch = (item) => {
    setIsRelaunched(!isRelaunched);
    const offerToUpdate = jobs.find((offer) => offer.id === item.id);
    offerToUpdate.isPostule = !offerToUpdate.isPostule;
  };
  const [isCanceled, setIsCanceled] = useState(false);
  const handleCancel = (item) => {
    setIsCanceled(!isCanceled);
    const offerToUpdate = jobs.find((offer) => offer.id === item.id);
    offerToUpdate.isCancel = !offerToUpdate.isCancel;
  };
  const [isDelected, setIsDelected] = useState(false);
  const handleDeleted = (item) => {
    setIsDelected(!isDelected);
    const offerToUpdate = jobs.find((offer) => offer.id === item.id);
    offerToUpdate.isResponse = false;
    offerToUpdate.isCancel = false;
  };

  useEffect(() => {
    const as = async () => {
      console.warn(`isFavorite :${jobs[0].isFavorite}`);
      console.warn(`isPostule :${jobs[0].isPostule}`);
      console.warn(`isResponse :${jobs[0].isResponse}`);
      console.warn(`isNotResponse :${jobs[0].isNotResponse}`);
      console.warn(`isRelaunch :${jobs[0].isRelaunch}`);
      console.warn(`isCancel :${jobs[0].isCancel}`);
    };
    as();
  }, [
    isLiked,
    isPostuled,
    isResponsed,
    isNotResponsed,
    isRelaunched,
    isCanceled,
  ]);
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
                  setJobsApi={setJobsApi}
                />
              }
            />
            <Route
              path="/Suivi"
              element={
                <Suivi
                  handleLiked={handleLiked}
                  jobs={jobs}
                  handlePostuled={handlePostuled}
                  handleResponsed={handleResponsed}
                  handleNotResponsed={handleNotResponsed}
                  handleRelaunch={handleRelaunch}
                  handleCancel={handleCancel}
                  handleDeleted={handleDeleted}
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
