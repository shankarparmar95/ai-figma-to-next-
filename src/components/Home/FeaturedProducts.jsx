import React from 'react';
import ProductCard from './ProductCard';

const FeaturedProducts = () => {
  // Sample product data
  const featuredProducts = [
    {
      id: 1,
      name: "Semi-Precious Amethyst Cluster Pendant",
      sku: "JB-AMETHYST-001",
      inStock: true,
      priceBreaks: [
        { quantity: 1, price: 12.99 },
        { quantity: 3, price: 11.50 },
        { quantity: 5, price: 10.25 },
        { quantity: 4, price: 8.25 }
      ],
      imageUrl: "/assests/images/product1.png"
    },
    {
      id: 2,
      name: "Czech Seed Bead Metallic Gold",
      sku: "JB-CZECH-GOLD-002",
      inStock: true,
      priceBreaks: [
        { quantity: 10, price: 1.99 },
        { quantity: 50, price: 1.75 },
        { quantity: 100, price: 1.50 }
      ],
      imageUrl: "/assests/images/product2.png"
    },
    {
      id: 3,
      name: "Czech Seed Bead Opaque White Strung",
      sku: "JB-CZECH-WHITE-003",
      inStock: true,
      priceBreaks: [
        { quantity: 10, price: 1.49 },
        { quantity: 50, price: 1.25 },
        { quantity: 100, price: 1.00 }
      ],
      imageUrl: "/assests/images/product3.png"
    },
    {
      id: 4,
      name: "Semi-Precious Dogteeth Amethyst Natural",
      sku: "JB-AMETHYST-DOG-004",
      inStock: false,
      priceBreaks: [
        { quantity: 1, price: 15.99 },
        { quantity: 3, price: 14.50 }
      ],
      imageUrl: "/assests/images/product4.png"
    },
    {
      id: 5,
      name: "Swarovski Pendant Rectangle Crystal Light Vitrail",
      sku: "JB-SWAROVSKI-005",
      inStock: true,
      priceBreaks: [
        { quantity: 1, price: 18.99 },
        { quantity: 2, price: 17.50 },
        { quantity: 5, price: 16.00 }
      ],
      imageUrl: "/assests/images/product5.png"
    }
  ];

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
          FEATURED PRODUCTS
        </h2>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              productName={product.name}
              sku={product.sku}
              inStock={product.inStock}
              priceBreaks={product.priceBreaks}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;