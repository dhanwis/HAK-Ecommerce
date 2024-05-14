import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className='page-wrapper'>
            <div className='page-content'>
                <section>
                    <div className="container">
                        <div className="row ">
                            <div className="col-lg-6 col-12">
                                <img className="img-fluid" src="assets/images/login.jpg" alt="" width="300px" height="300px" style={{ borderRadius: "60px" }} />
                            </div>
                            <div className="col-lg-6 col-12">
                                <div>
                                    <h3 className="text-center mb-3 text-uppercase">User Login</h3>
                                    <form id="contact-form">
                                        <div className="messages"></div>
                                        <div className="form-group">
                                            <input
                                                id="form_name"
                                                type="text"
                                                name="number"
                                                className="form-control"
                                                placeholder="Mobile Number"
                                                required
                                            />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                        <Link to="/send-otp" className="btn btn-primary btn-block" style={{ width: "200px", marginLeft: "180px" }}>Send OTP</Link>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Login;
