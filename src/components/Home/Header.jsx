import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";

const Header = ({
  userName = "Evelyn",
  userId = "#333333",
  cartItemCount = 3,
}) => {
  return (
    <header className="bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-gray-900 text-white py-2 px-4">
        <div className="container mx-auto flex justify-end">
          <span className="text-xs sm:text-sm">Visit our showroom</span>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/assests/images/logo.png"
                alt="John Bead"
                width={150}
                height={48}
              />
            </Link>
          </div>

          {/* Search bar - centered on desktop, full width on mobile */}
          <div className="w-full md:w-1/3 lg:w-1/2 px-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for..."
                className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-600">
                <FiSearch size={20} />
              </button>
            </div>
          </div>

          {/* User and cart section */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            {/* User account */}
            <div className="hidden sm:flex items-center space-x-2">
              <FiUser size={20} className="text-gray-700" />
              <span className="text-sm font-medium">
                Hi, {userName} {userId}
              </span>
            </div>

            {/* Shopping cart */}
            <div className="flex items-center space-x-2">
              <div className="relative">
                <FiShoppingCart size={20} className="text-gray-700" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </div>
              <span className="hidden md:inline text-sm font-medium">
                Cart ({cartItemCount})
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
