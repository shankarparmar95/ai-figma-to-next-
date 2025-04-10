import React from "react";
import Image from "next/image";
import Link from "next/link";

const FeaturedCategories = () => {
  const categories = [
    {
      title: "Preciosa Traditional Czech Beads",
      slug: "preciosa-traditional-czech-beads",
      image: "/assests/images/category1.png",
    },
    {
      title: "Preciosa Crystals",
      slug: "preciosa-crystals",
      image: "/assests/images/category2.png",
    },
    {
      title: "Miyuki Delicas and Seed Beads",
      slug: "miyuki-delicas-seed-beads",
      image: "/assests/images/category3.png",
    },
    {
      title: "Swarovski",
      slug: "swarovski",
      image: "/assests/images/category4.png",
    },
    {
      title: "Meet Betsy - Queen of Beads",
      slug: "meet-betsy",
      image: "/assests/images/category5.png",
    },
    {
      title: "Carnival & Dance",
      slug: "carnival-dance",
      image: "/assests/images/category6.png",
    },
    {
      title: "Craft Stores",
      slug: "craft-stores",
      image: "/assests/images/category7.png",
    },
    {
      title: "Fashion Embellishments",
      slug: "fashion-embellishments",
      image: "/assests/images/category8.png",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        FEATURED
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <Link
            href={category.slug}
            key={index}
            className="block relative rounded overflow-hidden group h-48"
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-full opacity-80 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-end p-3">
              <h3 className="text-white font-medium text-lg">
                {category.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
