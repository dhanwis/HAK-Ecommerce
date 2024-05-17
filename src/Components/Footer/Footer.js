import React from "react";
import { Link } from "react-router-dom";
import gif from "./diL hak.gif"

export default function Footer() {
  return (
    <>
      <footer className="py-7 bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-3">
              {" "}
              <Link className="footer-logo text-white h2 mb-0" to="/">
                <span className="text-primary"><img src={gif} style={{width:"200px",height:"200px"}}/></span>
              </Link>
              
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <Link className="text-light ic-2x" to="#">
                    <i className="la la-facebook"></i>
                  </Link>
                </li>
               
                <li className="list-inline-item">
                  <Link className="text-light ic-2x" to="#">
                    <i className="la la-instagram"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link className="text-light ic-2x" to="#">
                    <i className="la la-twitter"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link className="text-light ic-2x" to="#">
                    <i className="la la-linkedin"></i>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-12 col-lg-6 mt-6 mt-lg-0">
              <div className="row">
              <div className="col-12 col-sm-4 navbar-dark">
                  <h5 className="mb-1 text-white">Quick Links</h5>
                  <ul className="navbar-nav list-unstyled mb-0">
                    <li className="mb-3 nav-item">
                      <Link className="nav-link" to="/">
                        Home
                      </Link>
                    </li>
                    <li className="mb-3 nav-item">
                      <Link className="nav-link" to="about-us">
                        About
                      </Link>
                    </li>
                    <li className="mb-3 nav-item">
                      <Link className="nav-link" to="faq">
                        FAQ
                      </Link>
                    </li>
                    <li className="mb-3 nav-item">
                      <Link className="nav-link" to="faq">
                        Terms & Conditions
                      </Link>
                    </li>
                    <li className="mb-3 nav-item">
                      <Link className="nav-link" to="faq">
                        Return Policy
                      </Link>
                    </li>
                    <li className="mb-3 nav-item">
                      <Link className="nav-link" to="faq">
                        Refund Policy
                      </Link>
                    </li>
                    
                    <li className="nav-item">
                      <Link className="nav-link" to="contact-us">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-sm-4 navbar-dark">
                  <h5 className="mb-1 text-white">Quick Links</h5>
                  <ul className="navbar-nav list-unstyled mb-0">
                    <li className="mb-3 nav-item">
                      <Link className="nav-link" to="/">
                        Home
                      </Link>
                    </li>
                    <li className="mb-3 nav-item">
                      <Link className="nav-link" to="about-us">
                        About
                      </Link>
                    </li>
                    <li className="mb-3 nav-item">
                      <Link className="nav-link" to="faq">
                        FAQ
                      </Link>
                    </li>
                    <li className="mb-3 nav-item">
                      <Link className="nav-link" to="faq">
                        Terms & Conditions
                      </Link>
                    </li>
                    <li className="mb-3 nav-item">
                      <Link className="nav-link" to="faq">
                        Return Policy
                      </Link>
                    </li>
                    <li className="mb-3 nav-item">
                      <Link className="nav-link" to="faq">
                        Refund Policy
                      </Link>
                    </li>
                    
                    <li className="nav-item">
                      <Link className="nav-link" to="contact-us">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
               
              </div>
            </div>
            <div className="col-12 col-lg-3 mt-6 mt-lg-0">
              <div className="d-flex mb-3">
                <div className="mr-2">
                  {" "}
                  <i className="las la-map ic-2x text-primary"></i>
                </div>
                <div>
                  <h6 className="mb-1 text-light">Store address</h6>
                  <p className="mb-0 text-muted">
                    423B, Road Wordwide Kannur, USA
                  </p>
                </div>
              </div>
              <div className="d-flex mb-3">
                <div className="mr-2">
                  {" "}
                  <i className="las la-envelope ic-2x text-primary"></i>
                </div>
                <div>
                  <h6 className="mb-1 text-light">Email Us :::</h6>
                  <Link className="text-muted" to="mailto:skytouchinfotech01@gmail.com">
                    {" "}
                    dhanwisproduction@gmail.com                  </Link>
                </div>
              </div>
              <div className="d-flex mb-3">
                <div className="mr-2">
                  {" "}
                  <i className="las la-mobile ic-2x text-primary"></i>``
                </div>
                <div>
                  <h6 className="mb-1 text-light">Phone Number</h6>
                  <Link className="text-muted" to="tel:+912345678900">
                    +098765432
                  </Link>
                </div>
              </div>
              <div className="d-flex">
                <div className="mr-2">
                  {" "}
                  <i className="las la-clock ic-2x text-primary"></i>
                </div>
                <div>
                  <h6 className="mb-1 text-light">Working Hours</h6>
                  <span className="text-muted">Mon - Fri: 10AM - 7PM</span>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-3" />
          <div className="row text-muted ">
            <div className="col text-center">
              Copyright ©2024 diLhak
            </div>
           
          </div>
        </div>
      </footer>
    </>
  );
}
