// ProductList.js
import React from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import "./ProductList.css";

const products = [
  {
    image: "./image1.jpg",
    altText: "Product 1です",
    price: "¥990",
    description: "男女兼用, XS-4XL クルーネックTシャツ",
    rating: "★ 4.5 (999+)",
    sizes: ["XS", "S", "M", "L", "XL"],
    isDiscounted: true,
    discountMessage: "8/22まで期間限定価格",
    colorInfo: ["1", "2", "3", "4", "5", "6", "7", "8"],
  },
  {
    image: "./image1.jpg",
    altText: "Product 2",
    price: "¥990",
    description: "男女兼用, XS-L クルーネックTシャツ",
    rating: "★ 4.5 (999+)",
    sizes: ["XS", "S", "M"],
    isDiscounted: true,
    discountMessage: "値下げ、一部色サイズ対象",
    colorInfo: ["1", "2", "3", "4", "5", "6", "7", "8"],
  },
  {
    image: "./image1.jpg",
    altText: "Product 2",
    price: "¥990",
    description: "男女兼用, XS-L クルーネックTシャツ",
    rating: "★ 4.5 (999+)",
    sizes: ["XS", "S", "M"],
    isDiscounted: true,
    discountMessage: "値下げ、一部色サイズ対象",
    colorInfo: ["1", "2", "3", "4", "5", "6", "7", "8"],
  },
  {
    image: "./image1.jpg",
    altText: "Product 2",
    price: "¥990",
    description: "男女兼用, XS-L クルーネックTシャツ",
    rating: "★ 4.5 (999+)",
    sizes: ["XS", "S", "M"],
    isDiscounted: true,
    discountMessage: "値下げ、一部色サイズ対象",
    colorInfo: ["1", "2", "3", "4", "5", "6", "7", "8"],
  },
  // 情報追加
];

export const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};
