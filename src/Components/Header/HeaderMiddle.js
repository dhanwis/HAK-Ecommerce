import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../services/baseurl";
import { error } from "jquery";

export default function HeaderMiddle(props) {
  const { options } = props;


  // search data
  // const [searchTerm, setSearchTerm] = useState('');
 // replace with your base url

  // const handleChange = event => {
  //   setSearchTerm(event.target.value);
  // };

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   axios.get(`${BASE_URL}/client/product/search/?q=${searchTerm}`)
  //     .then(response => {
  //       console.log(response.data);
  //       // handle your response data here
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data', error);
  //     });
  // };
  return (
    <>
      <div className="py-md-3 py-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 d-none d-md-flex align-items-center">
              <Link className="navbar-brand logo d-none d-lg-block" to="/">
                <img className="img-fluid" src="assets/images/logo.png" alt="" />
              </Link>
              <div className="media ml-lg-11">
                <i className="las la-mobile-alt ic-2x bg-white rounded p-2 shadow-sm mr-2 text-primary"></i>
                <div className="media-body">
                  <span className="mb-0 d-block">Contact Us</span>
                  <Link className="text-primary" to="tel:+912345678900">
                    +91-234-567-8900
                  </Link>
                </div>
              </div>
            </div>

            {/* <div className="col-md-6">
              <div className="right-nav align-items-center d-flex justify-content-end">
                <form onSubmit={handleSubmit} className="form-inline border rounded w-100">
                  <select className="custom-select border-0 rounded-0 bg-light form-control d-none d-lg-inline">
                    {options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                <input
        className="form-control border-0 border-left col"
        type="search"
        placeholder="Enter Your Key"
        aria-label="Search"
        value={searchTerm}
        onChange={handleChange}
      />
                  <button
                    className="btn btn-primary text-white col-auto"
                    type="submit"
                  >
                    <i className="las la-search"></i>
                  </button>
                </form>
              </div>
            </div> */}
            {/* <!--menu end--> */}
          </div>
        </div>
      </div>
    </>
  );
}
