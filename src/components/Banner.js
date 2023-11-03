import React from "react";
import { useLocation } from "react-router";

const Banner = () => {
  const homeImg = "./homebanner.jpg";
  const aboutImg = "./aboutbanner.jpg";

  let location = useLocation();

  return (
    <div className="kasa-banner">
      <img
        src={location.pathname === "/a-propos" ? aboutImg : homeImg}
        alt="banner"
      />
      <div className="overlay"></div>
      {location.pathname === "/" ? (
        <div className="banner-text">
          <h1>
            Chez vous,<span className="line-break"></span> partout et ailleurs
          </h1>
        </div>
      ) : null}
    </div>
  );
};

export default Banner;
