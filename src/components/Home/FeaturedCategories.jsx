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
    <section className="w-full px-4 py-6 max-w-7xl mx-auto">
      <h2 className="text-xl font-bold mb-4">FEATURED</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((item, index) => (
          <div
            key={index}
            className="relative w-full aspect-[4/3] overflow-hidden rounded "
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 backdrop "
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 w-full bg-black/40"></div>
            <div className="absolute bottom-0 left-0 w-1/2 p-2 text-white text-xl font-extrabold ">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
