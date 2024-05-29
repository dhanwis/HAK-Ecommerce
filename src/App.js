import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BackToTop from "./Components/BackToTop";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import AboutUs from "./Pages/AboutUs";
import BlogCards from "./Pages/BlogCards";
import BlogSingle from "./Pages/BlogSingle";
import BlogsList1 from "./Pages/BlogsList1";
import BlogsList2 from "./Pages/BlogsList2";
import CheckOut from "./Pages/CheckOut";
import ComingSoon from "./Pages/ComingSoon";
import Index4 from "./Pages/Electronic";
import ErrorPage from "./Pages/ErrorPage";
import Faq from "./Pages/Faq";
import Index from "./Pages/Fashion1";
import Index2 from "./Pages/Fashion2";
import Index3 from "./Pages/Fashion3";
import Index5 from "./Pages/Furniture";
import Index6 from "./Pages/Kids";
import Login from "./Pages/Login.jsx";
import OrderComplete from "./Pages/OrderComplete";
import PGFW from "./Pages/PGFW";
import PGLS from "./Pages/Kurti.js";
import PGLS1 from "./Pages/Kurtiset.js";
import PGLS2 from "./Pages/Churidar.js";
import PGLS3 from "./Pages/Saree.js";
import PGLS4 from "./Pages/Churidarmaterial.js";
import PGNS from "./Pages/PGNS";
import PGRS from "./Pages/PGRS";
import PLFW from "./Pages/PLFW";
import PLI from "./Pages/PLI";
import PLLS from "./Pages/PLLS";
import PLNS from "./Pages/PLNS";
import PLRS from "./Pages/PLRS";
import PRI from "./Pages/PRI.js";
import PrivacyPage from "./Pages/PrivacyPage";
import ProductCart from "./Pages/ProductCart";
import TAndC from "./Pages/tAndC";
import ContatctUs from "./Pages/contact/ContatctUs";
import SendOtp from "./Pages/SendOtp.js";
import Userregistration from "./Pages/Userregistration.js"


function App() {
  const location = useLocation();
  const [showGif, setShowGif] = useState(true);

  const isSpecialRoute =
    location.pathname.includes("maintenance") ||
    location.pathname.includes("coming-soon") ||
    location.pathname.includes("error-404");

  useEffect(() => {
    const handlePopstate = () => {
      window.location.reload(); // Refresh the page on popstate event (back button)
    };

    window.addEventListener("popstate", handlePopstate);

    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, [location.pathname]);

  //const [showModal, setShowModal] = useState(false);
 

  useEffect(() => {
    // Show the GIF for 3 seconds, then show the modal
    const timeout = setTimeout(() => {
      setShowGif(false);
      //setShowModal(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  // useEffect(() => {
    
  //   setShowModal(true);

  //   return () => {
      
  //     setShowModal(false);
  //   };
  // }, [location.pathname]);
  const scrollbarStyle = `
  ::-webkit-scrollbar {
    display: none;
  }
`;

if(showGif){
  return ( <div className="loader clear-loader">
  <img className="img-fluid" src="assets/images/loader.gif" alt="" />
</div>)
}
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {isSpecialRoute ? (
        <Routes>
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/error-404" element={<ErrorPage />} />
        </Routes>) : (
        <div className="page-wrapper"> 
        <Routes>
          <Route path="/" element={<><Header/><Index /><Footer/><BackToTop/></>} />
          <Route path="/index3" element={<><Header/><Index3 /><Footer/><BackToTop/></>} />
          <Route path="/index4" element={<><Header/><Index4 /><Footer/><BackToTop/></>} />
          <Route path="/index5" element={<><Header/><Index5 /><Footer/><BackToTop/></>} />
          <Route path="/index6" element={<><Header/><Index6 /><Footer/><BackToTop/></>} />
          <Route path="/kurti" element={<><Header/><PGLS /><Footer/><BackToTop/></>} />
          <Route path="/kurtiset" element={<><Header/><PGLS1 /><Footer/><BackToTop/></>} />
          <Route path="/churidar" element={<><Header/><PGLS2 /><Footer/><BackToTop/></>} />
          <Route path="/saree" element={<><Header/><PGLS3 /><Footer/><BackToTop/></>} />
          <Route path="/churidarmaterial" element={<><Header/><PGLS4 /><Footer/><BackToTop/></>} />
          <Route path="/shop-grid-right-sidebar" element={<><Header/><PGRS /><Footer/><BackToTop/></>} />
          <Route path="/shop-grid-no-sidebar" element={<><Header/><PGNS /><Footer/><BackToTop/></>} />
          <Route path="/shop-grid-fullwidth" element={<><Header/><PGFW /><Footer/><BackToTop/></>} />
          <Route path="/shop-list-left-sidebar" element={<><Header/><PLLS /><Footer/><BackToTop/></>} />
          <Route path="/shop-list-right-sidebar" element={<><Header/><PLRS /><Footer/><BackToTop/></>} />
          <Route path="/shop-list-no-sidebar" element={<><Header/><PLNS /><Footer/><BackToTop/></>} />
          <Route path="/shop-list-fullwidth" element={<><Header/><PLFW /><Footer/><BackToTop/></>} />
          <Route path="/product-left-image" element={<><Header/><PLI /><Footer/><BackToTop/></>} />
          <Route path="/product-right-image" element={<><Header/><PRI /><Footer/><BackToTop/></>} />
          <Route path="/product-cart" element={<><Header/><ProductCart /><Footer/><BackToTop/></>} />
          <Route path="/product-checkout" element={<><Header/><CheckOut /><Footer/><BackToTop/></>} />
          <Route path="/order-complete" element={<><Header/><OrderComplete /><Footer/><BackToTop/></>} />
          <Route path="/about-us" element={<><Header/><AboutUs /><Footer/><BackToTop/></>} />
          <Route path="/faq" element={<><Header/><Faq /><Footer/><BackToTop/></>} />
          <Route path="/login" element={<Login />} />      
          <Route path="/Userregistration/:id" element={<Userregistration/>} />
          <Route path="/send-otp/:id" element={<SendOtp />} />
          <Route path="/user/:id" element={<><Header/><Index2 /><Footer/><BackToTop/></>} />
          <Route path="/privacy-policy" element={<><Header/><PrivacyPage /><Footer/><BackToTop/></>} />
          <Route path="/terms-and-conditions" element={<><Header/><TAndC /><Footer/><BackToTop/></>} />
          <Route path="/blog-card" element={<><Header/><BlogCards /><Footer/><BackToTop/></>} />
          <Route path="/blog-listing" element={<><Header/><BlogsList1 /><Footer/><BackToTop/></>} />
          <Route path="/blog-listing-2" element={<><Header/><BlogsList2 /><Footer/><BackToTop/></>} />
          <Route path="/blog-single" element={<><Header/><BlogSingle /><Footer/><BackToTop/></>} />
          <Route path="/contact-us" element={<><Header/><ContatctUs /><Footer/><BackToTop/></>} />
        </Routes>
      </div>      
    )
    }
    </>
  );
}

export default App;
