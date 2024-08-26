import React, { useState } from "react";
import "./Carousel.css"; // 必要に応じてCSSを分離

const Carousel = ({ images, imagesPerRow = 3 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = Math.ceil(images.length / imagesPerRow);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const slideStyle = {
    transform: `translateX(-${currentSlide * 100}%)`,
    width: `${100 * totalSlides}%`,
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button prev" onClick={prevSlide}>
        Prev
      </button>
      <div className="carousel-track" style={slideStyle}>
        {images.map((src, index) => (
          <div
            className="carousel-slide"
            key={index}
            style={{ width: `${100 / imagesPerRow}%` }}
          >
            <img src={src} alt={`slide-${index}`} />
          </div>
        ))}
      </div>
      <button className="carousel-button next" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};

export default Carousel;
