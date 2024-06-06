import React from "react";
import BannerSliderIndex from "../Components/Hero Banner/BannerSlideIndex";
import NewCollection from "../Components/Our Products/NewCollection";
import Section from "../Components/Section/Section";
import ProductIndex from "../Components/Trending/ProductIndex";
import HeroBanner3 from "../Components/Hero Banner/HeroBanner3";

export default function Index() {
  

  return (
    <div className="page-wrapper">
      <BannerSliderIndex />
      <div className="page-content">
        <ProductIndex />
        <HeroBanner3 />
        <NewCollection />
        <Section />
      </div>
    </div>
  );
}
