import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Spinner } from "reactstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import classnames from "classnames";

import ProductCard from "../ProductCard";
import axios from "axios";
import { BASE_URL } from "../../services/baseurl";

export default function NewCollection() {
  const [activeTab, setActiveTab] = useState("1");
  const products = useSelector((state) => state.products.allProducts);

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  // To get new collection
  const [NewCollection, setNewCollection] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    axios.get(`${BASE_URL}/client/product/latest`)
      .then(result => {
        console.log('result:', result);
        setNewCollection(result.data);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch(error => {
        console.error("Error fetching data", error);
        setLoading(false); // Set loading to false even if there's an error
      });
  }, []);

  const filterProducts = () => {
    if (activeTab === "1") {
      // Display the new collection
      return renderProductCards(NewCollection);
    } else if (activeTab === "2") {
      // Display the first 10 products
      const firstTenProducts = products.slice(0, 10);
      return renderProductCards(firstTenProducts);
    } else if (activeTab === "3") {
      // Display the first 10 products with the highest stock
      const highestStockProducts = products
        .sort((a, b) => b.stock - a.stock)
        .slice(0, 10);
      return renderProductCards(highestStockProducts);
    }
    return null;
  };

  const renderProductCards = (filteredProducts) => {
    return filteredProducts.map((product) => (
      <div className="item" key={product.id}>
        <ProductCard
          id={product.id}
          imgBackSrc={`${BASE_URL}${product.color.image_url}`}
          imgFrontSrc={`${BASE_URL}${product.color.image_url}`}
          // imgFrontSrc={`assets/images/${product.pictures[1]}`}
          title={product.product.name}
          price={product.discount_price}
          actualPrice={product.actual_price}
           rating={product.rating}
           stock={product.stock}
           description={product.product.description}
           category={product.category.name}
           size={product.size.name}
        />
      </div>
    ));
  };

  return (
    <section className="tab p-0 mt-n15">
      <div className="container-fluid pr-sm-0">
        <Row>
          <Col lg="10" md="11" className="ml-auto">
            <div className="shadow p-sm-8 p-3 bg-white">
              <Row className="align-items-end mb-6">
                <Col lg="6">
                  <div>
                    <h6 className="text-primary mb-1">— New Collection</h6>
                    <h2 className="mb-0">Our Products</h2>
                  </div>
                </Col>
                <Col lg="6" className="text-lg-right mt-4 mt-lg-0">
                  {/* <Nav tabs className="flex-column flex-lg-row">
                    <NavItem>
                      <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => {
                          toggle('1');
                        }}
                      >
                        Latest Products
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => {
                          toggle('2');
                        }}
                      >
                        Best Seller
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({ active: activeTab === '3' })}
                        onClick={() => {
                          toggle('3');
                        }}
                      >
                        Featured Products
                      </NavLink>
                    </NavItem>
                  </Nav> */}
                </Col>
              </Row>
              <Row>
                <Col>
                  <TabContent activeTab={activeTab} className="tab-content">
                    <TabPane tabId="1" className="">
                      {loading ? (
                        <Spinner color="primary" /> // Display loading spinner while data is being fetched
                      ) : (
                        <OwlCarousel
                          className="owl-carousel no-pb owl-2"
                          dots={false}
                          nav={true}
                          items={3}
                          responsive={{
                            0: { items: 1 },
                            576: { items: 2 },
                            768: { items: 2 },
                            992: { items: 3 },
                          }}
                          navText={["<span class='las la-arrow-left'><span></span></span>", "<span class='las la-arrow-right'><span></span></span>"]}
                        >
                          {filterProducts()}
                        </OwlCarousel>
                      )}
                    </TabPane>

                    
                    {/* Repeat the same for other TabPanes */}
                  </TabContent>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
