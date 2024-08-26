import React from "react";
import Carousel from "./Carousel2";

const App = () => {
  const images = [
    "https://via.placeholder.com/150x100",
    "https://via.placeholder.com/150x100",
    "https://via.placeholder.com/150x100",
    "https://via.placeholder.com/150x100",
    "https://via.placeholder.com/150x100",
    "https://via.placeholder.com/150x100",
  ];

  return (
    <div>
      <h1>Image Carousel</h1>
      <Carousel images={images} imagesPerRow={3} />
    </div>
  );
};

export default App;
