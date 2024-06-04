import React from "react";

export default function CountDown() {
  return (
    <section className="p-0">
      <div className="container-fluid pl-0">
        <div className="row">
          <div
            className="col-md-6 col-sm-5 "
           
          ><img src="../assets/images/loginside.avif"></img></div>
          <div className="col-md-6 col-sm-7">
              <span className="bg-primary py-1 px-2 d-inline-block rounded mb-3 text-white text-uppercase">
                Limited Offer
              </span>
              <h2 className="mb-5 font-w-5 line-h-1">
                Weekly Sale on
                <br /> <span className="text-primary font-w-8">60% OFF</span> All
                Products
              </h2>
              <ul
                className="countdown list-inline d-flex"
                data-countdown="2024/08/23"
              ></ul>
            </div>
          </div>
        </div>
    </section>
  );
}
