import React, { useState } from "react";
import CarouselSlide from "../CarouselSlide/CarouselSlide";
import { carouselObjOne, carouselObjTwo, carouselObjThree } from "./CarouselData";
import "./Carousel.scss";

function Carousel() {
  let carouselArray = [<CarouselSlide {...carouselObjOne}/>, <CarouselSlide {...carouselObjTwo} />, <CarouselSlide {...carouselObjThree} />];
  const [x, setX] = useState(0);
  const slideToLeft = () => {
    x === 0 ? setX(-100 * (carouselArray.length - 1)) : setX(x + 100);
  };
  const slideToRight = () => {
    x === -100 * (carouselArray.length - 1) ? setX(0) : setX(x - 100);
  };
//   const slideToRight = () => {
//     console.log(x);
//     setX(x - 100);
//   };
  return (
    <div className="carousel">
      {carouselArray.map((item, index) => {
        return (
          <div
            key={index}
            className="slide"
            style={{ transform: `translateX(${x}%)` }}
          >
            {item}
          </div>
        );
      })}
      <button id="slideLeft" onClick={slideToLeft}>
      <i class="fa fa-arrow-left" aria-hidden="true"></i>
      </button>
      <button id="slideRight" onClick={slideToRight}>
      <i class="fa fa-arrow-right" aria-hidden="true"></i>
      </button>
    </div>
  );
}

export default Carousel;
