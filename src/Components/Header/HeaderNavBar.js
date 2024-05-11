import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Button,
  Col,
  Container,
  Modal,
  ModalBody,
  Row
} from "reactstrap";
import { addToCart, removeCartItem, removeWishListItem } from "../../store/reducer/productReducer";

export default function HeaderNavBar() {
  const wishListItems = useSelector((state) => state.products.wishList);
  const cartItems = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();
  const [wishListOpen, setWishListOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const togglewWishList = () => setWishListOpen(!wishListOpen);
  const toggleCartList = () => setCartOpen(!cartOpen);
  const subtotal = wishListItems.reduce((total, item) => {
    if (item) {
      return total + item.salePrice * item.quantity;
    }
    return total;
  }, 0);
  const subtotalCart = cartItems.reduce((total, item) => {
    if (item) {
      return total + item.salePrice * item.quantity;
    }
    return total;
  }, 0);
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast("Product goes to cart", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  
  const cartItems1 = useSelector((state) => state.products.cart);
  const calculateTotal = () => {
    return cartItems1.reduce((total, item) => {
      const itemTotal = item.quantity * item.salePrice;
      return total + itemTotal;
    }, 0);
  };

  return (
    <><div>
      <header className="site-header">

        <div id="header-wrap" className="shadow-sm">
          <Container className="container">
            <Row>
              {/* <!--menu start--> */}
              <Col>
                <nav className="navbar navbar-expand-lg navbar-light position-static">
                  <Link className="navbar-brand logo d-lg-none" to="/">
                    <img className="img-fluid" src="assets/images/logo.png" alt="" />
                  </Link>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item"><Link to="/" className="nav-link" active>Home</Link></li>
                    <li className="nav-item"><Link to="/" className="nav-link">Kurti</Link></li>
                    <li className="nav-item"><Link to="/" className="nav-link">Churidar</Link></li>
                    <li className="nav-item"><Link to="/" className="nav-link">Saree</Link></li>
                    <li className="nav-item"><Link to="/" className="nav-link">Kurti Set</Link></li>
                    <li className="nav-item"><Link to="/" className="nav-link">Churidar Material</Link></li>
                    <li className="nav-item"><Link to="/contact-us" className="nav-link">Contact</Link></li>
                    </ul>
                  </div>
                  <div className="right-nav align-items-center d-flex justify-content-end">
                    <Link className="login-btn btn-link ms-3" to="/login">
                      <i className="las la-user-alt"></i>
                    </Link>
                    <Link
                      className="wishlist-btn btn-link ms-3"
                      onClick={togglewWishList}
                    >
                      <i className="lar la-heart"></i>
                    </Link>
                    <Link
                      className="d-flex align-items-center ms-3 mx-1"
                      onClick={toggleCartList}
                    >
                      <span className="bg-white px-2 py-1 shadow-sm rounded" data-cart-items={cartItems1.length}>
                        <i className="las la-shopping-cart"></i>
                      </span>
                    </Link>
                    <div>
                      <div className="ml-4 d-none d-md-block"> <small className="d-block text-muted">My Cart</small>
                        <span className="text-dark">{cartItems1.length} Items - ${calculateTotal()}</span>
                      </div>
                    </div>
                  </div>
                </nav>
              </Col>
              {/* <!--menu end--> */}
            </Row>
          </Container>
        </div>
      </header>
      <Modal
        isOpen={cartOpen}
        toggle={toggleCartList}
        className="cart-modal"
      >
        <div>
          <Row>
            <Col xs={9} className="py-4 align-item-center">
              {" "}
              <h5 className=" px-4">
                Your Cart ({cartItems?.length})
              </h5>
            </Col>
            <Col xs={3} className="align-item-center">
              {" "}
              <Button
                className="btn btn-primary btn-sm mt-4 fs-3"
                onClick={toggleCartList}>
                <i className="las la-times"></i>
              </Button>
            </Col>
          </Row>
        </div>
        <ModalBody>
          {cartItems.map((product) => {
            if (product) {
              return (
                <div>
                  <Row className="align-items-center my-5">
                    <Col xs="5" className="d-flex align-items-center">
                      <div className="mr-4">
                        <Button
                          type="submit"
                          className="btn btn-primary btn-sm"
                          onClick={() => {
                            dispatch(removeCartItem(product.id));
                          }}
                        >
                          <i className="las la-times"></i>
                        </Button>
                      </div>
                      <Link>
                        <img
                          className="img-fluid"
                          src={`assets/images/${product.pictures[0]}`}
                          alt="..."
                        />
                      </Link>
                    </Col>
                    <Col xs="5">
                      <h6>
                        <div className="link-title">
                          {product.name}
                        </div>
                      </h6>
                      <div className="product-meta">
                        <span className="mr-2 text-primary">
                          ${product.salePrice.toFixed(2)}
                        </span>
                        <span className="text-muted">x {product.quantity}</span>
                      </div>
                    </Col>
                  </Row>
                </div>
              );
            }

            return null;
          })}
          <hr className="my-5" />
          <div className="d-flex justify-content-between align-items-center mb-8">
            <span className="text-muted">Subtotal:</span>
            <span className="text-dark">${subtotalCart.toFixed(2)}</span>
          </div>
          <Link
            to="/product-cart"
            className="btn btn-primary btn-animated mr-2"
          >
            <i className="las la-shopping-cart mr-1"></i>View Cart
          </Link>
          <Link to="/product-checkout" className="btn btn-dark">
            <i className="las la-money-check mr-1"></i>Continue To Checkout
          </Link>
        </ModalBody>
      </Modal>
      <Modal
        className="cart-modal"
        direction="end"
        isOpen={wishListOpen}
        toggle={togglewWishList}
      >
        <div>
          <Row>
            <Col xs={9} className="py-4 align-items-center">
              {" "}
              <h5 className=" px-4">
                Your Wishlist ({wishListItems?.length})
              </h5>
            </Col>
            <Col xs={3} className="align-items-center">
              {" "}
              <Button
                className="btn btn-primary btn-sm mt-4 fs-3"
                onClick={togglewWishList}
              >
                <i className="las la-times"></i>
              </Button>
            </Col>
          </Row>
        </div>
        <ModalBody className="">
          {wishListItems.map((product) => {
            if (product) {
              return (
                <div>
                  <Row className="align-items-center my-4">
                    <Col xs={5} className="d-flex align-items-center">
                      <div className="mr-4">
                        <Button
                          type="submit"
                          className="btn btn-primary btn-sm"
                          onClick={() => {
                            dispatch(removeWishListItem(product.id));
                          }}
                        >
                          {/* <AiOutlineCloseCircle /> */}
                          <i className="las la-times"></i>
                        </Button>
                      </div>
                      <div>
                        <img
                          className="img-fluid"
                          src={`assets/images/${product.pictures[0]}`}
                          alt="..."
                        />
                      </div>
                    </Col>
                    <Col xs={5}>
                      <h6>
                        <div className="link-title">
                          {product.name}{" "}
                        </div>
                      </h6>
                      <div className="product-meta">
                        <span className="mx-2 text-primary">
                          ${product.salePrice.toFixed(2)}
                        </span>
                        <span className="text-muted">x {product.quantity}</span>
                      </div>
                      <div className="product-meta"></div>
                    </Col>
                    <Col xs={2} className="d-flex align-items-center mt-4">
                      <span
                        onClick={() => handleAddToCart(product)}
                        className="mx-2 btn text-white fs-1 ms-auto ">
                        <i className="las la-shopping-cart"></i>
                      </span>
                    </Col>
                  </Row>
                </div>
              );
            }
            return null;
          })}
          <hr className="my-5" />
          <div className="d-flex justify-content-between align-items-center mb-8">
            <span className="text-muted">Subtotal:</span>
            <span className="text-white">${subtotal.toFixed(2)}</span>
          </div>
          <Link
            to="/product-cart"
            className="btn btn-primary btn-animated mr-2">
            <i className="las la-shopping-cart mr-1"></i>View Cart
          </Link>
          <Link to="/product-checkout" className="btn btn-dark">
            <i className="las la-money-check mr-1"></i>Continue To Checkout
          </Link>
        </ModalBody>
      </Modal>
    </div>
    </>
  );
}