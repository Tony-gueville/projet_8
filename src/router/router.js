import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";
// import Accomodation from "../pages/Accomodation";

const router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
        {/* <Route path="/Accomodation/:id" element={<Accomodation />} /> */}
      </Routes>
    </div>
  );
};

export default router;
