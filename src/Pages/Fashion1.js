import React from "react";
import { useSelector } from "react-redux";
import BlogSection from "../Components/Blog/BlogSection";
import CountDown from "../Components/Countdown/CountDown";
import BannerSliderIndex from "../Components/Hero Banner/BannerSlideIndex";
import InstagramSection from "../Components/InstagramSection/InstagramSection";
import NewCollection from "../Components/Our Products/NewCollection";
import Section from "../Components/Section/Section";
import ProductIndex from "../Components/Trending/ProductIndex";

export default function Index() {
  const blogs = useSelector(
    (state) => state.blog.blogItems
  );
  const filteredBlogs = blogs.filter(
    (blog) => blog.category.includes("Cloth") || blog.category.includes("Fashion")
  ).slice(0, 4);


  return (
    <div className="page-wrapper">
      <BannerSliderIndex />
      <div className="page-content">
        <ProductIndex />
        <CountDown />
        <NewCollection />
        <Section />
        <BlogSection blogs={filteredBlogs} title={"Fashion Blog"} />
        <InstagramSection />
      </div>
    </div>
  );
}
