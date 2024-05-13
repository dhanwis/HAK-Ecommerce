import React, { useState } from 'react'
import PageHeading from '../Components/PageHeading/PageHeading'
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios'

function Login() {
    const [phone,setPhone] =  useState('')
    const firstBreadcrumb = { label: "Pages" };
    const secondBreadcrumb = {
        label: "Login",
        active: true,
    };
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        let response = axios.post("https://hak.pythonanywhere.com/auth/customer/",{phone_number : phone})
        console.log(response);
    };

    const handleChange = (e)=>{
      setPhone(e.target.value)
    }

    return (
        <div className='page-wrapper'>
           
            <div className='page-content'>
                <section>
                    <Container>
                        <Row className="justify-content-center">
                            <Col xs="12" sm="10" md="8" lg="6">
                                <div className="shadow p-3">
                                    <img className="img" src="assets/images/login.png" alt="" />
                                    <h3 className="text-center mb-3 text-uppercase">User Login</h3>
                                    <Form id="contact-form">
                                        <div className="messages"></div>
                                        <FormGroup>
                                            <Input
                                                type="text"
                                                name="phone_number"
                                                id="form_name"
                                                onChange={handleChange}
                                                placeholder="Enter Your Mobile Number"
                                                required
                                            />
                                            <div className="help-block with-errors"></div>
                                        </FormGroup>
                                        <Button onClick={handleSubmit} color="primary" block>Send Otp</Button>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        </div>
    )
}

export default Login