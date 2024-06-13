import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";
import { addToCart, setSelectedProduct } from "../store/reducer/productReducer";
import { toast } from "react-toastify";

const ProductSingle = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.selectedProduct);
    const allProducts = useSelector((state) => state.products.allProducts);

    useEffect(() => {
        const selectedProduct = allProducts.find((item) => item.id === parseInt(id));
        if (selectedProduct) {
            dispatch(setSelectedProduct(selectedProduct));
        }
    }, [id, allProducts, dispatch]);

    if (!products) {
        return <div>Loading...</div>;
    }

    const handleAddToCart = () => {
        dispatch(addToCart({ ...products, quantity: 1 }));
        toast("Product added to cart", {
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

    return (
        <Container>
            <Row>
                <Col lg={6}>
                    <img
                        src={`assets/images/${products.pictures[0]}`}
                        alt={products.name}
                        className="img-fluid"
                    />
                </Col>
                <Col lg={6}>
                    <h1>{products.name}</h1>
                    <p>{products.description}</p>
                    <p>Price: ₹{products.salePrice}</p>
                    <Button color="primary" onClick={handleAddToCart}>
                        Add to Cart
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductSingle;
