import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Card,
  CardText,
  Col,
  Container,
  Row
} from "reactstrap";
import ProductCard from '../Components/ProductCard';
import SideBar from '../Components/Sidebar/SideBar';
import CustomPagination from '../Components/pagination';
import axios from 'axios';
import { BASE_URL } from '../services/baseurl';
function PGLS3() {
  
  const [selectedOption, setSelectedOption] = useState("1");
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    setActivePage(1);
  };

  const filteredProducts = useSelector((state) => {
    const option = parseInt(selectedOption);
    switch (option) {
      case 1: // Newest Item
        return state.products.filteredProducts;
      case 2: // High To Low
        return state.products.filteredProducts.slice().sort((a, b) => b.price - a.price);
      case 3: // Low To High
        return state.products.filteredProducts.slice().sort((a, b) => a.price - b.price);
      default:
        return state.products.filteredProducts;
    }
  });

  const [activePage, setActivePage] = useState(1);
  const pageSize = 9;

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };
  const totalPages = Math.ceil(filteredProducts.length / pageSize);
  const startIndex = (activePage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const productsToShow = filteredProducts.slice(startIndex, endIndex);
  const [activeFilter, setActiveFilter] = useState('grid');

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };


  // get kurtiset data
  const [SareeData,setSareeData]=useState([])    

  useEffect(() => {
    axios.get(`${BASE_URL}/client/product/sort/?category=saree`)
      .then(response => {
        console.log("hii", response);
        setSareeData(response.data);
      })
      .catch(error => {
        console.error("Error fetching data", error);
      });
  }, []);


  return (
    <div className='page-wrapper'>
      <div className='page-content'>
        <section>
        <h1>Saree</h1>
          <Container>
            <Row>
              <Col lg={9} md={12} className="order-lg-1">
                <Row className="">
                  <Col>
                    <Card className="border-0 p-2">
                      <Row className="align-items-center">
                        <Col md="5" className="mb-3 mb-md-0">
                          <CardText tag="span" className="text-muted">
                            Showing 1 to {productsToShow.length} of
                            {" "}{filteredProducts.length}
                          </CardText>
                        </Col>
                        <Col
                          md="7"
                          className="d-flex align-items-center justify-content-md-end"
                        >
                          <div className="view-filter">
                            <Link
                              to="/shop-grid-left-sidebar"
                              className={`me-2 ${activeFilter === 'grid' ? 'active text-primary' : ''}`}
                              onClick={() => handleFilterClick('grid')}
                            >
                              <i className="lab la-buromobelexperte"></i>
                            </Link>
                            <Link
                              to="/shop-list-left-sidebar"
                              className={`text-dark ${activeFilter === 'list' ? 'active text-primary' : ''}`}
                              onClick={() => handleFilterClick('list')}
                            >
                              <i className="las la-list"></i>
                            </Link>
                          </div>
                          <div className="sort-filter ml-2 d-flex align-items-center">
                            <select className="custom-select" id="inputGroupSelect02" onChange={handleOptionChange} value={selectedOption}>
                              <option selected>Sort By</option>
                              <option value="1">New Item</option>
                              <option value="2">High To Low</option>
                              <option value="3">Low To High</option>
                            </select>
                          </div>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                </Row>
                <Row className="text-center">
                  {SareeData.map((product) => (
                    <Col lg="4" md="6" className="mt-5">
                    <Link to={`/product-left-image/${product.id}`}>  <ProductCard
                        id={product.id}
                        imgBackSrc={`${BASE_URL}${product.color.image_url}`}
                        imgFrontSrc={`${BASE_URL}${product.color.image_url}`}
                        title={product.product.name}
                        price={product.discount_price}
                        actualPrice={product.actual_price}
                        rating={product.rating}
                      /> </Link>
                    </Col>
                  ))}

                </Row>
                <Row
                  className="mt-5 mb-5"
                  style={{ justifyContent: "center" }}
                >
                  <CustomPagination
                    activePage={activePage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </Row>
              </Col>
              <div className="col-lg-3 col-md-12 sidebar mt-8 mt-lg-0">
                <SideBar />
              </div>
            </Row>
          </Container>
        </section>
      </div>
    </div>
  )
}

export default PGLS3