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
import Login from "./Pages/Login";
import Login2 from "./Pages/Login2";
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
import SignUp from "./Pages/SignUp";
import TAndC from "./Pages/tAndC";
import ContatctUs from "./Pages/contact/ContatctUs";


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
  return (<h1>Heloo</h1>)
}
  return (
    <>
      {/* <style>{scrollbarStyle}</style> */}
       
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
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/index2" element={<Index2 />} />
          <Route path="/index3" element={<Index3 />} />
          <Route path="/index4" element={<Index4 />} />
          <Route path="/index5" element={<Index5 />} />
          <Route path="/index6" element={<Index6 />} />
          <Route path="/kurti" element={<PGLS />} />
          <Route path="/kurtiset" element={<PGLS1 />} />
          <Route path="/churidar" element={<PGLS2 />} />
          <Route path="/saree" element={<PGLS3 />} />
          <Route path="/churidarmaterial" element={<PGLS4 />} />
          <Route path="/shop-grid-right-sidebar" element={<PGRS />} />
          <Route path="/shop-grid-no-sidebar" element={<PGNS />} />
          <Route path="/shop-grid-fullwidth" element={<PGFW />} />
          <Route path="/shop-list-left-sidebar" element={<PLLS />} />
          <Route path="/shop-list-right-sidebar" element={<PLRS />} />
          <Route path="/shop-list-no-sidebar" element={<PLNS />} />
          <Route path="/shop-list-fullwidth" element={<PLFW />} />
          <Route path="/product-left-image" element={<PLI />} />
          <Route path="/product-right-image" element={<PRI />} />
          <Route path="/product-cart" element={<ProductCart />} />
          <Route path="/product-checkout" element={<CheckOut />} />
          <Route path="/order-complete" element={<OrderComplete />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login-2" element={<Login2 />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/privacy-policy" element={<PrivacyPage />} />
          <Route path="/terms-and-conditions" element={<TAndC />} />
          <Route path="/blog-card" element={<BlogCards />} />
          <Route path="/blog-listing" element={<BlogsList1 />} />
          <Route path="/blog-listing-2" element={<BlogsList2 />} />
          <Route path="/blog-single" element={<BlogSingle />} />
          <Route path="/contact-us" element={<ContatctUs />} />
        </Routes>
        <Footer />

        <BackToTop />
      </div>)}

    </>
  );
}

export default App;
