import React from "react";
import { useSelector } from "react-redux";
import BlogSection from "../Components/Blog/BlogSection";
import Countdown2 from "../Components/Countdown/CountDown2";
import HeroBanner2 from "../Components/Hero Banner/HeroBanner2";
import NewCollection2 from "../Components/Our Products/NewCollection2";
import Section2 from "../Components/Section/Section2";
import ProductIndex2 from "../Components/Trending/ProductIndex2";
function Index2() {
  const blogs = useSelector(
    (state) => state.blog.blogItems
  );
  const filteredBlogs = blogs.filter(
    (blog) => blog.category.includes("Cloth") || blog.category.includes("Fashion")
  ).slice(0, 4);
  return <div className="page-wrapper">
    <HeroBanner2 />
    <div className="page-content">

      <ProductIndex2 />
      <Section2 />
      <NewCollection2 />
      <Countdown2 />
      <BlogSection blogs={filteredBlogs} title={"Fashion Blog"} />
    </div>
  </div>;
}

export default Index2;
