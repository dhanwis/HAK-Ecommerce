import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
    Button,
    Col,
    Container,
    Form,
    FormGroup,
    Input,
    Label,
    ListGroup,
    ListGroupItem,
    Row,
} from "reactstrap";
import { BASE_URL } from "../services/baseurl";
import Swal from "sweetalert2";
import axios from "axios";



function CheckOut() {
    const cart = useSelector((state) => state.products.cart);

    const firstBreadcrumb = { label: "Pages", link: "/product-checkout" };
    const secondBreadcrumb = {
        label: "Product Checkout",
        link: "/product-checkout",
        active: true,
    };
    function calculateSubtotal() {
        let subtotal = 0;
        cart.forEach((item) => {
            subtotal += item.quantity * item.salePrice;
        });
        return subtotal.toFixed(2);
    }
    let shipping = 50.0;
    function calculateTotal() {
        if (cart.length === 0) {
            return 0; // Return 0 if the cart is empty
        }

        const subtotal = calculateSubtotal();
        const total = parseFloat(subtotal) + parseFloat(shipping);
        return total.toFixed(2);
    }



    const[CheckoutData, setCheckoutData] = useState({
        
        first_name: "",
        last_name: "",
        email: "",
        address: "",
        mobile_no:"",
        company_name:"",
        country:"",
        city:"",
        state:"",
        postal_code:""
        
      })
    
      console.log(CheckoutData);
    
    
      const userId = sessionStorage.getItem('userId');

      const handleSubmit = async () => {
        try {
          let formData = new FormData();
          for (let key in CheckoutData) {
            formData.append(key, CheckoutData[key]);
          }
          
          let order_admin = await axios.post(`${BASE_URL}/client/order/${userId}/`, formData, {
            headers: { 'Content-Type': 'application/json' }
          });
          console.log("Response:", order_admin);
          Swal.fire({
            icon:'success',
            title: 'Added Successfully',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
         
        } catch (err) {
          console.error(err);
          alert('Failed!!!')
        }

        setCheckoutData({
            first_name: "",
            last_name: "",
            email: "",
            address: "",
            mobile_no:"",
            company_name:"",
            country:"",
            city:"",
            state:"",
            postal_code:""
        })
      };

    return (
        <div>
            <div className="page-wrapper">
               
                <div className="page-content">
                    <section>
                        <Container>
                            <Row>
                                <Col lg={7} md={12}>
                                    <div className="checkout-form">
                                        <h2 className="mb-4">Billing Details</h2>
                                        <Form>
                                            <Row form>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="fname" className="font-w-6">
                                                            First Name
                                                        </Label>
                                                        <Input
                                                            type="text"
                                                            id="fname"
                                                            placeholder="Your firstname"
                                                            value={CheckoutData.first_name}
                                                            onChange={(e)=>setCheckoutData({...CheckoutData,first_name:e.target.value})}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="lname" className="font-w-6">
                                                            Last Name
                                                        </Label>
                                                        <Input
                                                            type="text"
                                                            id="lname"
                                                            placeholder="Your lastname"
                                                            value={CheckoutData.last_name}
                                                            onChange={(e)=>setCheckoutData({...CheckoutData,last_name:e.target.value})}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="email" className="font-w-6">
                                                            E-mail Address
                                                        </Label>
                                                        <Input
                                                            type="text"
                                                            id="email"
                                                            placeholder="State Province"
                                                            value={CheckoutData.email}
                                                            onChange={(e)=>setCheckoutData({...CheckoutData,email:e.target.value})}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="phone" className="font-w-6">
                                                            Phone Number
                                                        </Label>
                                                        <Input type="number" id="phone" placeholder=""   value={CheckoutData.mobile_no}
                                                            onChange={(e)=>setCheckoutData({...CheckoutData,mobile_no:e.target.value})} />
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="companyname" className="font-w-6">
                                                            Company Name
                                                        </Label>
                                                        <Input
                                                            type="text"
                                                            id="companyname"
                                                            placeholder="Company Name"
                                                            value={CheckoutData.company_name}
                                                            onChange={(e)=>setCheckoutData({...CheckoutData,company_name:e.target.value})}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="country" className="font-w-6">
                                                            Country
                                                        </Label>
                                                        <Input
                                                            type="text"
                                                            id="Country"
                                                            placeholder="Country"
                                                            value={CheckoutData.country}
                                                            onChange={(e)=>setCheckoutData({...CheckoutData,country:e.target.value})}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col md={12}>
                                                    <FormGroup>
                                                        <Label for="address" className="font-w-6">
                                                            Address
                                                        </Label>
                                                        <Input
                                                            type="text"
                                                            id="address"
                                                            placeholder="Enter Your Address"
                                                            value={CheckoutData.address}
                                                            onChange={(e)=>setCheckoutData({...CheckoutData,address:e.target.value})}
                                                        />
                                                    </FormGroup>
                                                  
                                                </Col>
                                                <Col md={12}>
                                                    <FormGroup>
                                                        <Label for="towncity" className="font-w-6">
                                                            Town/City
                                                        </Label>
                                                        <Input
                                                            type="text"
                                                            id="towncity"
                                                            placeholder="Town or City"
                                                            value={CheckoutData.city}
                                                            onChange={(e)=>setCheckoutData({...CheckoutData,city:e.target.value})}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="statename" className="font-w-6">
                                                            State/Province
                                                        </Label>
                                                        <Input
                                                            type="text"
                                                            id="statename"
                                                            placeholder="State Province"
                                                            value={CheckoutData.state}
                                                            onChange={(e)=>setCheckoutData({...CheckoutData,state:e.target.value})}
                                                        />
                                                    </FormGroup>{" "}
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="zippostalcode" className="font-w-6">
                                                            Zip/Postal Code
                                                        </Label>
                                                        <Input
                                                            type="number"
                                                            id="zippostalcode"
                                                            placeholder="Zip / Postal"
                                                            value={CheckoutData.postal_code}
                                                            onChange={(e)=>setCheckoutData({...CheckoutData,postal_code:e.target.value})}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </div>
                                </Col>
                                <Col lg={5} md={12} className="mt-5 mt-lg-0">
                                    <Row className="my-5">
                                        <Col md={12}>
                                            <div className="p-3 p-lg-5 shadow-sm mb-5">
                                                <h3 className="mb-3">Coupon Code</h3>
                                                <label className="mb-3">
                                                    Enter your coupon code if you have one
                                                </label>
                                                <div className="d-flex align-items-center">
                                                    <Input
                                                        className="form-control"
                                                        id="c-code"
                                                        placeholder="Coupon Code"
                                                        aria-label="Coupon Code"
                                                        aria-describedby="button-addon2"
                                                        type="text"
                                                    />
                                                    <div className="input-group-append ms-3">
                                                        <Button
                                                            color="primary"
                                                            type="button"
                                                            id="button-addon2"
                                                        >
                                                            Apply
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-3 p-lg-5 shadow-sm mb-5">
                                                <h3 className="mb-3">Your Order</h3>
                                                <ListGroup className="list-unstyled">
                                                    {cart.map((item, index) => (
                                                        <ListGroupItem
                                                            className="mb-3 pb-3"
                                                            key={index}
                                                            style={{
                                                                borderLeft: 'none',
                                                                borderRight: 'none',
                                                                borderTop: 'none'
                                                            }}
                                                        >
                                                            <span>
                                                                {item.quantity} x {item.name}
                                                            </span>
                                                            {" "} ${item.salePrice * item.quantity}
                                                        </ListGroupItem>
                                                    ))}
                                                    <ListGroupItem className="mb-3  pb-3" style={{
                                                        borderLeft: 'none',
                                                        borderRight: 'none',
                                                        borderTop: 'none'
                                                    }}>
                                                        <span>Shipping</span> $ {shipping}
                                                    </ListGroupItem>
                                                    <ListGroupItem className="mb-3 pb-3" style={{
                                                        borderLeft: 'none',
                                                        borderRight: 'none',
                                                        borderTop: 'none'
                                                    }}>
                                                        <span>Subtotal</span> $ {calculateSubtotal()}
                                                    </ListGroupItem>
                                                    <ListGroupItem style={{
                                                        borderLeft: 'none',
                                                        borderRight: 'none',
                                                        borderTop: 'none'
                                                    }}>
                                                        <span>
                                                            <strong className="cart-total">Total:</strong>
                                                        </span>
                                                        <strong className="cart-total">
                                                            $ {calculateTotal()}
                                                        </strong>
                                                    </ListGroupItem>
                                                </ListGroup>
                                            </div>
                                            <div className="cart-detail my-5">
                                                <h3 className="mb-3">Payment Method</h3>
                                                <div className="form-group">
                                                    <div className="custom-control custom-radio">
                                                        <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
                                                        <label className="custom-control-label" for="customRadio1">Direct Bank Tranfer</label>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="custom-control custom-radio">
                                                        <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                                                        <label className="custom-control-label" for="customRadio2">Check Payment</label>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="custom-control custom-radio">
                                                        <input type="radio" id="customRadio3" name="customRadio" className="custom-control-input" />
                                                        <label className="custom-control-label" for="customRadio3">Paypal Account</label>
                                                    </div>
                                                </div>
                                                <div className="form-group mb-0">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                        <label className="custom-control-label" for="customCheck1">I have read and accept the terms and conditions</label>
                                                    </div>
                                                </div>
                                                <button onClick={handleSubmit} className="btn btn-primary btn-animated btn-block">Proceed to Payment</button>
                                            </div>
                                            
                                        </Col>
                                    </Row>
                                </Col> 
                            </Row>
                        </Container>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default CheckOut;
