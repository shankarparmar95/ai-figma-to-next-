import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroBanner = () => {
  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assests/images/banner1.png" // Replace with your actual image path
          alt="Maple Leaf Beads Collection"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="opacity-90"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-xl text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">
            Maple Leaf Beads
          </h1>
          <p className="text-lg sm:text-xl mb-6 drop-shadow-md">
            John Bead Corp is open and shipping all orders. Only our showroom is closed to visitors at this time.
          </p>
          <Link
            href="/shop"
            className="inline-block bg-[#05527C] text-white font-bold py-3 px-8 rounded-md transition duration-300 transform hover:scale-105 shadow-lg"
          >
            SHOP NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;