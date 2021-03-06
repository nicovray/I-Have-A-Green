import React from "react";
import { Routes, Route } from "react-router-dom";
import Partages from "./Partages";
import Home from "./Home";
import Annonce from "./Annonce";
import Profil from "./Profil";

export default function Body() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/partages" element={<Partages />} />
        <Route path="/annonce" element={<Annonce />} />
        <Route path="/monprofil" element={<Profil />} />
      </Routes>
    </div>
  );
}
