import React from "react";
import Navigation from "./Navigation";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="kasa-header">
      <img src={logo} alt="Logo Kasa" />
      <Navigation />
    </header>
  );
};

export default Header;
