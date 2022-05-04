import React from "react";
import { Routes, Route } from "react-router-dom";
import SubNavbar from "@components/SubNavbar";
import JeVaisPostuler from "@components/JeVaisPostuler";
import JaiPostule from "@components/JaiPostule";
import Action from "@components/Action";
import Feedback from "@components/Feedback";

function Suivi() {
  return (
    <>
      <SubNavbar />
      <Routes>
        <Route path="/je-vais-postuler" element={<JeVaisPostuler />} />
        <Route path="/j-ai-postule" element={<JaiPostule />} />
        <Route path="/action" element={<Action />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </>
  );
}

export default Suivi;
