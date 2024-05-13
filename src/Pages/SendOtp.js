import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
    const [isOtpSent, setIsOtpSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Assuming here that you have a function to send OTP
        // You can implement your logic here to send OTP
        // For now, just toggling isOtpSent state
        setIsOtpSent(true);
    };

    return (
        <div className='page-wrapper'>
           
            <div className='page-content'>
                <section>
                    <div className="container">
                        <div className="row ">
                            <div className="col-lg-6 col-12" >
                                <img className="img-fluid" src="assets/images/login.png" alt="" width="300px" height="300px" style={{borderRadius:"60px"}}/>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div>
                                    <h3 className="text-center mb-3 text-uppercase">Otp Verification</h3>
                                    {isOtpSent ? (
                                        <form id="otp-form" onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <input
                                                    id="form_otp"
                                                    type="text"
                                                    name="otp"
                                                    className="form-control"
                                                    placeholder="Enter OTP"
                                                    required
                                                />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                            <button className="btn btn-primary btn-block" style={{width:"200px",marginLeft:"180px"}}>Verify OTP</button>
                                        </form>
                                    ) : (
                                        <form id="contact-form" onSubmit={handleSubmit}>
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
                                            <button className="btn btn-primary btn-block" style={{width:"200px",marginLeft:"180px"}}>Send OTP</button>
                                        </form>
                                    )}
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
