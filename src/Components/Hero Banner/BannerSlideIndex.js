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
      bgImg: "assets/images/bg/01.jpeg",
      subtitle: "Welcome to diLhak",
      button: "Shop Now",
    },
    {
      bgImg: "assets/images/bg/02.webp",
      subtitle: "Trending Collections Available",
      button: "View Collections",
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
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-lg-7 col-md-12 custom-py-1 position-relative z-index-1">
                  <h3 className="font-w-10 text-light animated3">
                    {slide.subtitle}
                  </h3>
                  <div className="animated3">
                    <Link className="btn btn-primary btn-animated" to="#">
                      {slide.button}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Banner;
