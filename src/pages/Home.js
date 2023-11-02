import React from "react";

import Banner from "../components/Banner";
import Card from "../components/Card";

const Home = () => {
  document.title = "Kasa - Accueil";
  return (
    <div>
      <Banner />
      <Card />
    </div>
  );
};

export default Home;
