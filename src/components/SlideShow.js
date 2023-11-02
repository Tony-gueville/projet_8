import React, { useState } from "react";
import chevronLeft from "../assets/chevron-left.png";
import chevronRight from "../assets/chevron-right.png";

const SlideShow = (images) => {
  const [counter, setCounter] = useState(0);
  const pictures = images.images;
  const slideLength = pictures.length;
  //console.log(pictures);

  let actualImage;
  actualImage = pictures[counter];

  const slideLeft = () => {
    setCounter(counter - 1);
    {
      counter === 0 && setCounter(slideLength - 1);
    }
  };

  const slideRight = () => {
    setCounter(counter + 1);
    {
      counter >= slideLength - 1 && setCounter(0);
    }
  };

  console.log(counter);
  return (
    <div className="slider-container">
      <img
        className="banner-img"
        src={actualImage}
        alt="Image chambre d'un hôte"
      />
      {slideLength === 1 ? null : (
        <div className="sup-container">
          <img
            onClick={() => slideLeft()}
            className="arrow arrow-left"
            src={chevronLeft}
            alt="arrow left"
          />
          <p className="banner-number">
            {counter + 1}/{slideLength}
          </p>
          <img
            onClick={() => slideRight()}
            className="arrow arrow-right"
            src={chevronRight}
            alt="arrow right"
          />{" "}
        </div>
      )}
    </div>
  );
};

export default SlideShow;
