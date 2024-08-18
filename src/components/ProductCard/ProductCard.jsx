// ProductCard.js
import React from "react";
import "./ProductCard.css";
import { ColorBoard } from "../ColorBoard/ColorBoard";

export const ProductCard = ({
  image,
  altText,
  price,
  description,
  rating,
  sizes,
  isDiscounted,
  discountMessage,
  colorInfo,
}) => {
  return (
    <div className="product-card">
      <img src={image} alt={altText} className="product-image" />
      <ColorBoard colorInfo={colorInfo} />
      <p>{description}</p>
      <p className="price">
        {isDiscounted ? <span className="discount">{price}</span> : price}
      </p>
      {isDiscounted && <p className="discount-message">{discountMessage}</p>}
      <p>{rating}</p>
      <div className="sizes">
        {sizes.map((size, index) => (
          <span key={index}>{size}</span>
        ))}
      </div>
    </div>
  );
};
