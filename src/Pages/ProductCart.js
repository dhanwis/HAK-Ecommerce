import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Col, Row, Container, Input, Button } from "reactstrap";
import { updateCartItemQuantity, removeCartItem } from "../store/reducer/productReducer";
import { Link } from "react-router-dom";

function ProductCart() {
    const cartItems = useSelector((state) => state.products.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [quantities, setQuantities] = useState(cartItems.map((item) => item.quantity));

    const handleQuantityChange = (index, newQuantity) => {
        if (newQuantity >= 1 && newQuantity <= cartItems[index].stock) {
            const updatedQuantities = [...quantities];
            updatedQuantities[index] = newQuantity;
            setQuantities(updatedQuantities);
            dispatch(updateCartItemQuantity({ index, quantity: newQuantity }));
        }
    };

    const handleDeleteItem = (index) => {
        dispatch(removeCartItem(index));
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            const itemTotal = item.quantity * item.salePrice;
            return total + itemTotal;
        }, 0);
    };

    const Tax = 1.0;

    return (
        <div style={{ backgroundColor: "#f5f5f5" }}>
            <div>
                <section>
                    <Container>
                        <Row>
                            <p style={{ fontSize: '40px', color: 'black' }}>Cart</p>
                            <Col lg={8}>
                                <div className="cart-items">
                                    {cartItems.map((item, index) => (
                                        <div
                                            className="cart-item row"
                                            key={index}
                                            style={{
                                                backgroundColor: "#fff",
                                                border: "1px solid #ddd",
                                                padding: "10px",
                                                marginBottom: "10px",
                                                borderRadius: "5px",
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        >
                                            <div className="col-md-3">
                                                <Link to="#">
                                                    <img
                                                        className="img-fluid rounded"
                                                        style={{ height: "100px", width: "100px" }}
                                                        src={`assets/images/${item.pictures[0]}`}
                                                        alt={item.name}
                                                    />
                                                </Link>
                                            </div>
                                            <div className="col-md-6 d-flex flex-column justify-content-between">
                                                <div>
                                                    <div
                                                        onClick={() => navigate(`/product-single/${item.id}`)}
                                                        style={{
                                                            cursor: "pointer",
                                                            color: "hotpink",
                                                            textDecoration: "none",
                                                        }}
                                                        className="product-name link-title h4"
                                                    >
                                                        {item.name}
                                                    </div>
                                                    <div className="product-description" style={{ marginBottom: "10px" }}>
                                                        {item.description}
                                                    </div>
                                                    <div className="product-price">₹{item.salePrice}</div>
                                                </div>
                                                <div className="d-flex align-items-center mt-2">
                                                    <Button
                                                        className="btn-product btn-product-up"
                                                        onClick={() => {
                                                            if (quantities[index] > 1) {
                                                                handleQuantityChange(index, quantities[index] - 1);
                                                            }
                                                        }}
                                                        style={{
                                                            backgroundColor: "#ddd",
                                                            border: "none",
                                                            padding: "5px",
                                                        }}
                                                    >
                                                        <i className="las la-minus" style={{ fontSize: "14px" }}></i>
                                                    </Button>
                                                    <Input
                                                        className="form-product mx-2"
                                                        type="number"
                                                        name="form-product"
                                                        value={quantities[index]}
                                                        onChange={(e) => {
                                                            const newQuantity = parseInt(e.target.value);
                                                            handleQuantityChange(index, newQuantity);
                                                        }}
                                                        max={item.stock}
                                                        style={{ width: "60px", textAlign: "center" }}
                                                    />
                                                    <Button
                                                        className="btn-product btn-product-down"
                                                        onClick={() => {
                                                            if (quantities[index] < item.stock) {
                                                                handleQuantityChange(index, quantities[index] + 1);
                                                            }
                                                        }}
                                                        style={{
                                                            backgroundColor: "#ddd",
                                                            border: "none",
                                                            padding: "5px",
                                                        }}
                                                    >
                                                        <i className="las la-plus" style={{ fontSize: "14px" }}></i>
                                                    </Button>
                                                </div>
                                            </div>
                                            <div className="col-md-3 d-flex flex-column align-items-end">
                                                <Button
                                                    type="button"
                                                    onClick={() => handleDeleteItem(item.id)}
                                                    className="btn btn-danger btn-sm"
                                                    style={{
                                                        fontSize: '15px',
                                                        borderRadius: '7px',
                                                        height: '40px',
                                                        width: "120px",
                                                    }}
                                                >
                                                    Remove
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Col>
                            <Col lg="4" className="mt-5 mt-lg-0">
                                <div style={{ borderRadius: "4px", padding: "20px", backgroundColor: "#f8f8f8" }}>
                                    <div style={{ borderRadius: "4px", padding: "20px", backgroundColor: "#fff" }}>
                                        <h4 className="text-dark text-center mb-2">Cart Totals</h4>
                                        <div className="d-flex justify-content-between align-items-center border-bottom py-3">
                                            <span className="text">Subtotal</span>
                                            <span className="text-dark">₹{calculateTotal()}</span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center border-bottom py-3">
                                            <span className="text">Tax</span>
                                            <span className="text-dark">{Tax}%</span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center pt-3 mb-5">
                                            <span className="text-dark h5">Total</span>
                                            <span className="text-dark font-weight-bold h5">
                                                ₹{calculateTotal() + (calculateTotal() * Tax) / 100}
                                            </span>
                                        </div>
                                        <Link className="btn btn-dark" to="/product-checkout">
                                            Proceed To Checkout
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        </div>
    );
}

export default ProductCart;
