import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const FeaturedProduct = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="relative md:w-1/2 h-80 md:h-auto">
            {/* Product Image */}
            <Image
              src="/assests/images/banner2.png" // Replace with your image path
              alt="Crystal Lane Strands"
              layout="fill"
              objectFit="cover"
              className="object-left"
            />

            {/* Navigation Arrows */}
            <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition">
              <FiChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition">
              <FiChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          {/* Product Info Section */}
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Our Crystal Lane strands are a bestseller!
            </h2>

            <div className="prose prose-sm text-gray-600 mb-6">
              <ul className="space-y-2">
                <li>Available in 4mm, 6mm, and 8mm sizes</li>
                <li>Over 20 vibrant colors to choose from</li>
                <li>High-quality precision-cut crystals</li>
                <li>Perfect for jewelry making and beadwork</li>
              </ul>
            </div>

            <div className="mt-4">
              <Link href="/shop/crystal-lane-strands">
                <div className="inline-block bg-[#05527C] text-white font-bold py-3 px-8 rounded-md transition duration-200 transform hover:scale-105">
                  SHOP NOW
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
