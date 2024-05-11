import React from "react";
import HeroBanner5 from "../Components/Hero Banner/HeroBanner5";
import FeatureFurniture from "../Components/Feature/FeatureFurniture";
import ProductIndex5 from "../Components/Trending/ProductIndex5";
import FurnitureAds from "../Components/Section/FurnitureAds";
import CountDownFurniture from "../Components/Countdown/CountDownFurniture";
import FurnitureAds2 from "../Components/Section/FurnitureAds2";
import BlogSection from "../Components/Blog/BlogSection";
import { useSelector } from "react-redux";

function Index5() {
  const blogs = useSelector(
    (state) => state.blog.blogItems
  );
  const filteredBlogs = blogs.filter(
    (blog) => blog.category.includes("Modern")
  );

  return <div className="page-wrapper">
    <HeroBanner5 />
    <div className="page-content">
      <FeatureFurniture />
      <ProductIndex5 />
      <FurnitureAds />
      <CountDownFurniture />
      <FurnitureAds2 />
      <BlogSection blogs={filteredBlogs} />
      <section>
      </section>



    </div>
  </div>;
}

export default Index5;
