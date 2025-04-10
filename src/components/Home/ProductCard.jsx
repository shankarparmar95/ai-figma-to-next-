"use client";

import React, { useState } from "react";
import Image from "next/image";

const ProductCard = ({
  productName = "Crystal Bead Strand",
  sku = "JB-2024-CRYSTAL",
  inStock = true,
  priceBreaks = [
    { quantity: 2, price: 2.28 },
    { quantity: 4, price: 1.52 },
    { quantity: 12, price: 1.26 },
  ],
  imageUrl = "/product-placeholder.jpg",
}) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  return (
    <div className="flex flex-col h-full border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* Product Image */}
      <div className="relative aspect-square">
        <Image
          src={imageUrl}
          alt={productName}
          layout="fill"
          objectFit="cover"
          className="hover:opacity-90 transition-opacity"
        />
      </div>

      {/* Product Info */}
      <div className="flex-grow p-4 flex flex-col">
        {/* Product Name */}
        <h3 className="text-lg font-medium text-gray-800 text-center mb-2 line-clamp-2">
          {productName}
        </h3>

        {/* SKU */}
        <p className="text-xs text-gray-500 text-center mb-3">SKU: {sku}</p>

        {/* Stock Status */}
        <div className="flex items-center justify-center mb-3">
          <span
            className={`inline-block w-2 h-2 rounded-full mr-2 ${
              inStock ? "bg-green-500" : "bg-red-500"
            }`}
          ></span>
          <span className="text-sm">
            {inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        {/* Price Breaks */}
        <div className="mb-4 bg-[#EDEDED] grid grid-cols-2 text-center py-3 px-5">
          {priceBreaks.map((breakdown, index) => (
            <div key={index} className="text-sm text-gray-600 text-center">
              {Math.abs(index % 2) == 1 && <span>|</span>}
              {breakdown.quantity} at ${breakdown.price.toFixed(2)}
            </div>
          ))}
        </div>

        {/* Quantity Selector */}
        <div className="mb-4 flex justify-center">
          <div className="flex items-center border border-gray-300 rounded-md">
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
              className="w-12 text-center border-x border-gray-300 py-1 outline-none"
            />
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          className={`mt-auto w-full py-2 px-4 rounded-md font-bold text-white ${
            inStock
              ? "bg-[#05527C] text-white"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={!inStock}
        >
          {inStock ? "ADD TO CART" : "OUT OF STOCK"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
