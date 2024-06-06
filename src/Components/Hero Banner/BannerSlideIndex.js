import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";

const Banner = () => {
  const options = {
    items: 1,
    nav: true,
    dots: false,
    autoplay: true,
    loop: true,
  };

  const slides = [
    {
      bgImg: "assets/images/bg/01.jpg",
    },
    {
      bgImg: "assets/images/bg/02.jpg",
    },
  ];

  return (
    <div>
      <OwlCarousel
        className="banner-slider owl-carousel no-pb owl-2"
        {...options}
        navText={["<span class='las la-arrow-left'><span></span></span>","<span class='las la-arrow-right'><span></span></span>"]}

      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="item bg-pos-rt"
            style={{ backgroundImage: `url(${slide.bgImg})`,height:'600px' }}
          >
            
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Banner;
