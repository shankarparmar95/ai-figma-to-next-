import React from 'react';
import Link from 'next/link';

const MainNavigation = () => {
  const navItems = [
    'SITEMAP',
    'ALL CATEGORIES',
    'NEW ARRIVALS',
    'FIRST NATIONS',
    'CARNIVAL & DANCE',
    'CRAFT STORES',
    'CLEARANCE',
    'CATALOGS',
    'PROJECTS',
    'FEATURED PROGRAMS'
  ];

  return (
    <nav className="border-t border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between space-x-1 py-3 overflow-x-auto">
            {navItems.map((item, index) => (
              <Link 
                key={index}
                href={`/${item.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`}
                className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden py-3">
            <div className="flex space-x-6 overflow-x-auto pb-2 scrollbar-hide">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={`/${item.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`}
                  className="flex-shrink-0 px-2 py-1 text-xs font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNavigation;