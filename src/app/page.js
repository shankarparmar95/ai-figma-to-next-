import React from "react";
import Head from "next/head";
import Header from "@/components/Home/Header";
import MainNavigation from "@/components/Home/MainNavigation";
import HeroBanner from "@/components/Home/HeroBanner";
import FeaturedProduct from "@/components/Home/FeaturedProduct";
import FeaturedProducts from "@/components/Home/FeaturedProducts";
import FeaturedCategories from "@/components/Home/FeaturedCategories";
import Footer from "@/components/Home/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>John Bead - Home</title>
        <meta
          name="description"
          content="John Bead - Quality beads and jewelry supplies"
        />
      </Head>
      <Header />
      <MainNavigation />
      <HeroBanner />
      <FeaturedProduct />
      <FeaturedProducts />
      <FeaturedCategories/>
      <Footer/>
    </>
  );
}
