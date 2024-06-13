import React from "react";
import { Link } from "react-router-dom";
import gif from "./diL hak.gif";
import whatsappIcon from "./whatsapp.png";

export default function Footer() {
  return (
    <>
      <footer className="py-7 bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-3 mb-4 mb-lg-0">
              <Link className="footer-logo text-white h2 mb-0" to="/">
                <span className="text-primary">
                  <img src={gif} style={{ width: "200px", height: "200px" }} alt="Logo" />
                </span>
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
            <div className="col-12 col-lg-6 d-flex justify-content-between" >
              <div className="navbar-dark justify-content-between">
                <h5 className="mb-1 text-white">Quick Links</h5>
                <ul className="navbar-nav list-unstyled mb-0">
                  <li className="mb-3 nav-item">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="mb-3 nav-item">
                    <Link className="nav-link" to="/about-us">
                      About
                    </Link>
                  </li>
                  <li className="mb-3 nav-item">
                    <Link className="nav-link" to="/faq">
                      FAQ
                    </Link>
                  </li>
                  <li className="mb-3 nav-item">
                    <Link className="nav-link" to="/terms">
                      Terms & Conditions
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div className="navbar-dark mb-3" style={{marginRight: '100px'}}>
                <h5 className="mb-1 text-white">Quick Links</h5>
                <ul className="navbar-nav list-unstyled mb-0">
                  <li className="mb-3 nav-item">
                    <Link className="nav-link" to="/contact-us">
                      Contact Us
                    </Link>
                  </li>
                  <li className="mb-3 nav-item">
                    <Link className="nav-link" to="/return-policy">
                      Return Policy
                    </Link>
                  </li>
                  <li className="mb-3 nav-item">
                    <Link className="nav-link" to="/refund-policy">
                      Refund Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-3 d-flex flex-column">
              {/* WhatsApp Chat Button */}
              <p className="mb-5" style={{fontSize:'20px',color:'white',fontWeight:'bold', marginLeft: '20px'}}>Click the icon to chat with us on WhatsApp</p>
              <a
                href="https://api.whatsapp.com/send?phone=777777777"
                className="whatsapp-chat text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
        
                <img src={whatsappIcon} height="80px" alt="WhatsApp Chat" />
              </a>
            </div>
          </div>
          <hr className="my-3" />
          <div className="row text-muted">
            <div className="col text-center">
              Copyright ©2024 diLhak
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
