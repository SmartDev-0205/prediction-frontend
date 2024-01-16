import React, { useState, useRef } from "react";
import up from "../assets/up.svg";
import down from "../assets/down.svg";
import preset from "../assets/preset.svg";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [up, down, up, down, up, down, down, down, down]; // Replace with your image names
  const containerRef = useRef(null);

  const decreaseValue = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      scrollLeft();
    }
  };

  const increaseValue = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
      scrollRight();
    }
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        top: 0,
        left: -100, // Adjust this value as needed for the scroll amount
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        top: 0,
        left: 100, // Adjust this value as needed for the scroll amount
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex gap-2 items-center justify-center mt-8">
      <button onClick={decreaseValue}>
        <img alt="loading" src={preset} className="-rotate-90 w-7"  />
      </button>
      <div
        ref={containerRef}
        className="flex gap-2 w-80 overflow-x-scroll"
        style={{ scrollBehavior: "smooth", overflowX: "hidden" }}
      >
        {images.map((image, index) => (
          <img 
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="w-10 object-contain"
          />
        ))}
      </div>
      <button onClick={increaseValue}>
        <img alt="loading" src={preset} className="rotate-90 w-7"  />
      </button>
    </div>
  );
};

export default Slider;
