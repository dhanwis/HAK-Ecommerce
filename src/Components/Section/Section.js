import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "reactstrap";


const Section = () => {
    return (
      <section>
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={8}>
              <div className="position-relative rounded overflow-hidden text-right shadow-sm">
                {/* Background */}
               <Link to={'/saree'}> <img className="img-fluid hover-zoom" src="assets/images/product-ad/01.jpg" alt="" style={{height:'950px',width:'725px'}}/></Link>
                {/* Body */}
                <div className="position-absolute top-50 pl-5 text-left">
                  <h6 className="text-light">New Saree Collection</h6>
                 
                </div>
              </div>
            </Col>
            <Col xs={12} md={4} className="mt-5 mt-md-0">
              <div className="position-relative rounded overflow-hidden">
              <Link to={'/kurtiset'}>  <img className="img-fluid w-100 hover-zoom" src="assets/images/product-ad/02.webp" alt="" style={{height:'470px'}}/></Link>
                <div className="position-absolute top-50 pl-5" >
                  <h4 className="mb-0 text-light" >New kurtiSet <br /> Collection</h4>
                </div>
              </div>
              <div className="position-relative rounded overflow-hidden mt-2 shadow-sm">
              <Link to={'/kurti'}>  <img className="img-fluid w-100 hover-zoom" src="assets/images/product-ad/03.webp" alt="" style={{height:'470px'}}/></Link>
                <div className="position-absolute top-50 pl-5">
                  <h4 className="mb-0 text-light">New kurti Collection</h4>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  };
  
  export default Section;